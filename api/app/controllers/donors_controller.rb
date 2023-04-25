class DonorsController < ApplicationController
  before_action :set_donor, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token
  rescue_from ActiveRecord::RecordNotFound, with: :render_donor_not_found_response

  # GET /donors
  def index
    donors = Donor.all
    render json: donors, status: :ok
  end

  # SHOW /donors/:id
  def show
    render json: @donor, status: :ok, serializer: DonorWithDonationsSerializer
  end

  # PUT /donor/update/:id
  def update
    @donor.update(donor_params)
    render json: @donor, status: :created
  end

# POST /donors
def create
  @donor = Donor.create!(donor_params)

  render json: @donor, status: :created
rescue ActiveRecord::RecordInvalid => e
  render json: { errors: e.message }, status: :unprocessable_entity
end

  # DELETE /donor/:id
  def destroy
    @donor.destroy
    head :no_content
  end

  private

  def set_donor
    @donor = Donor.find(params[:id])
  end

  def donor_params
    params.permit(:name, :email, :password)
    # params.require(:donor).permit(:name, :email, :password)
  end


  def render_donor_not_found_response
    render json: {error: "Donor not found"}, status: :not_found
  end
end
