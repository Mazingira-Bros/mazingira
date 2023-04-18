class BeneficiariesController < ApplicationController
  before_action :set_beneficiary, only: %i[show update destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  #GET /beneficiaries
  def index
    @beneficiaries = Beneficiary.all
    render json: @beneficiaries, status: :ok
  end

  #GET /beneficiaries/:id
  def show
    render json: @beneficiary, status: :ok
  end

  #POST /beneficiaries
  def create
    @beneficiary = Beneficiary.new(beneficiary_params)

    if @beneficiary.save
      render json: @beneficiary, status: :created, location: @beneficiary
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  #PATCH /beneficiaries/:id
  def update
    if @beneficiary.update(beneficiary_params)
      render json: @beneficiary
    else
      render json: @beneficiary.errors, status: :unprocessable_entity
    end
  end

  #DELETE /beneficiaries/:id
  def destroy
    @beneficiary.destroy
  end

  private

  #set callback
  def set_beneficiary
    @beneficiary = Beneficiary.find(params[:id])
  end

  def render_not_found
    render json: { error: "Beneficiary with ID: #{params[:id]} not found" }, status: :not_found
  end

  # Only allow a list of trusted parameters through.
  def beneficiary_params
    params.require(:beneficiary).permit(:organisation_id, :name, :image, :description, :location )
  end
end
