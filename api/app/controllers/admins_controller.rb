class AdminsController < ApplicationController
    def index
    admins= Admin.all
    render json: admins, status: :ok
    end

     # GET /admins/1
  def show
    admin = Admin.find(params[:id])
    render json: admin, status: :ok
  end
     # POST /admins
  def create
    admin = Admin.new(admin_params)

    if admin.save
      render json: admin, status: :created
    else
      render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admins/1
  def update
    admin = Admin.find(params[:id])

    if admin.update(admin_params)
      render json: admin, status: :ok
    else
      render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /admins/1
  def destroy
    admin = Admin.find(params[:id])
    admin.destroy
    head :no_content
  end
  private

  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end
end
