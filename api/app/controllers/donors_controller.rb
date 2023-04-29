class DonorsController < ApplicationController
  def index
    @donors = Donor.all
    render json: @donors
  end
end
