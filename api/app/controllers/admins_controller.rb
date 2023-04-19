class AdminsController < ApplicationController
  before_action :set_admin, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  # GET /admins
  def index
    admins = Admin.all
    render json: admins
  end

  # GET /admins/:id
  def show
    render json: @admin
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

  # PATCH/PUT /admins/:id
  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: { errors: @admin.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /admins/:id
  def destroy
    @admin.destroy
    head :no_content
  end

  private

  # Before_action method to find admin by ID and set it to instance variable @admin
  def set_admin
    @admin = Admin.find(params[:id])
  end

  # Strong params method
  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end

  # Method to handle RecordNotFound exception
  def not_found
    render json: { error: "Record not found" }, status: :not_found
  end
end
