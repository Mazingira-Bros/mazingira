class DonationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_donation_not_found_response

    # GET /donations
    def index
        donations = Donation.all
        render json: donations,status: :ok
    end

    # GET /donations/:id
    def show
        donation = Donation.find(params[:id])
        render json: donation, status: :ok
    end

    # PUT /donations/update/:id
    def update
        donation = Donation.find(params[:id])
        donation.update(donations_params)
        render json: donation, status: :created
    end

    # POST /donation
    def create
        donation = Donation.create(donations_params)
        render json: donation, status: :created
    end


    private

    def donations_params
        params.permit(:preference, :frequency)
    end
    
    def render_donation_not_found_response
        render json: {error: "Donations not found"}, status: :not_found
    end
end
