class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :login

  def login
    user = find_user(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      session[:expires_at] = Time.current + 30.minutes # session expires in 30 minutes
      # puts session.inspect
      puts "The value of my_cookie is: #{cookies[:user_id]}"
      puts user.id
      render json: { user: user, role: user.class.name }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def me
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def destroy
    session.delete(:user_id)
    render json: { message: 'Session destroyed' }, status: :ok
  end


  private

  def find_user(email, password)
    donor = Donor.find_by(email: email)
    return donor if donor && donor.authenticate(password)

    org = Organisation.find_by(email: email)
    return org if org && org.authenticate(password)

    admin = Admin.find_by(email: email)
    return admin if admin && admin.authenticate(password)

    nil
  end
end
