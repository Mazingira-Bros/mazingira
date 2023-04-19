class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:login]

  def login
    user = find_user(params[:email], params[:password])
    if user
      render json: user, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def find_user(email, password)
    donor = Donor.find_by(email: email)
    return donor if donor && donor.authenticate(password)

    org = Organisation.find_by(email: email)
    return org if org && org.authenticate(password)

    nil
  end
end
