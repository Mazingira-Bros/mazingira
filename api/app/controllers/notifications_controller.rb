class NotificationsController < ApplicationController
  before_action :set_notification, only: %i[show edit update destroy]

  # GET /notifications 
  def index
    @notifications = Notification.all
    render json: @notifications
  end

  # GET /notifications/1 
  def show
    if @notification.present?
      render json: @notification
    else
      render json: { error: 'Notification not found' }, status: :not_found
    end
  end

  # POST /notifications 
  def create
    @notification = Notification.new(notification_params)

    if @notification.save
      render json: @notification, status: :created, location: @notification
    else
      render json: { error: @notification.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notifications/1 
  def update
    if @notification.update(notification_params)
      render json: @notification, status: :ok, location: @notification
    else
      render json: { error: @notification.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /notifications/1 
  def destroy
    @notification.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notification
      @notification = Notification.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def notification_params
      params.require(:notification).permit(:title, :message, :date, :sender, :image)
    end
end
