class DonorsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_donor_not_found_response

  # GET /donors
  def index
    donors = Donor.all
    render json: donors, status: :ok
  end

  # SHOW /donors/:id
  def show 
    donor = Donor.find(params[:id])
    render json: donor, status: :ok
  end

  # PUT /donor/update/:id
  def update 
    donor = Donor.find(params[:id])
    donor.update(donor_params)
    render json: donor, status: :created
  end

  # POST /donors
  def create
    donor = Donor.create(donor_params)
    render json: donor, status: :created
  end

  # DELETE /donor/:id 
  def destroy
    donor = Donor.find(params[:id])
    donor.destroy
    head :no_content
  end

  private

  def donor_params
    params.permit(:name, :email, :password_digest)
  end

  def render_donor_not_found_response
    render json: {error: "Donor not found"}, status: :not_found
  end
end
