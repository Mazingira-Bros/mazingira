class DonationActivitiesController < ApplicationController
  before_action :set_donation_activity, only: %i[ show edit update destroy ]

  # GET /donation_activities 
  def index
    render json: donation_activities = DonationActivity.all
  end

  # GET /donation_activities/1 or /donation_activities/1.json
  def show
    render json: @donation_activity || { error: "Donation activity not found" }, status: :not_found  end

  

  # POST /donation_activities or /donation_activities.json
  def create
    @donation_activity = DonationActivity.new(donation_activity_params)

    if @donation_activity.save
      redirect_to donation_activity_url(@donation_activity), notice: "Donation activity was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  

  # DELETE /donation_activities/1 or /donation_activities/1.json
  def destroy
    @donation_activity.destroy
    redirect_to donation_activities_url, notice: "Donation activity was successfully destroyed."
 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_donation_activity
      @donation_activity = DonationActivity.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def donation_activity_params
      params.require(:donation_activity).permit(:total_donations, :monthly_donations, :average_donation, :month, :visits, :signups, :active_users, :date, :donations)
    end
end
