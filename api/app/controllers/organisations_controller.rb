class OrganisationsController < ApplicationController
  before_action :set_organisation, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  skip_before_action :verify_authenticity_token

  # GET /organisations
  def index
    @organisations = Organisation.all
    render json: @organisations, status: :ok
  end

  # GET /organisations/:id
  def show
    render json: @organisation, status: :ok
  end

  # POST /organisations
  def create
    @organisation = Organisation.create(organisation_params)

    if @organisation.save
      render json: @organisation, status: :created, location: @organisation
    else
      render json: @organisation, status: :unprocessable_entity
    end
  end

  # PATCH /organisations/:id/
  def update
    if @organisation.update(organisation_params)
      render json: @organisation, status: :ok
    else
      render json: @organisation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /organisations/:id
  def destroy
    @organisation.destroy
  end

  # private methods
  private

  def set_organisation
    @organisation = Organisation.find(params[:id])
  end

  def render_not_found
    render json: { error: "Organization with ID: #{params[:id]} not found" }, status: :not_found
  end

  # Only allow a list of trusted parameters through.
  def organisation_params
    params.permit(:logo, :name, :password, :email, :description, :website, :contact_person)
    # require(:organisation)
  end

end
