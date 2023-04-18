class OrganisationsController < ApplicationController
  def index
    @organisation = Organisation.all
    render json: @organisation
  end
end
