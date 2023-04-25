class UserEngagementsController < ApplicationController
  before_action :set_user_engagement, only: %i[show edit update destroy]

  def index
    user_engagements = UserEngagement.all
    render json: user_engagements
  end

  def show
    render json: @user_engagement || { error: "User engagement not found" }, status: :not_found
  end

  def create
    user_engagement = UserEngagement.new(user_engagement_params)

    if user_engagement.save
      render json: { message: "User engagement created successfully", user_engagement: user_engagement }, status: :created
    else
      render json: { errors: user_engagement.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @user_engagement.destroy
      render json: { message: "User engagement deleted successfully" }, status: :ok
    else
      render json: { error: "User engagement not found" }, status: :not_found
    end
  end

  private

  def set_user_engagement
    @user_engagement = UserEngagement.find_by(id: params[:id])
  end

  def user_engagement_params
    params.require(:user_engagement).permit(:total_users, :active_users, :inactive_users, :month, :visits, :signups, :date, :donations)
  end
end
