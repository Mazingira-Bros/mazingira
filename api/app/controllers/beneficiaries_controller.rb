class BeneficiariesController < ApplicationController
  before_action :set_beneficiary, only: [:show, :update, :destroy]

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
  #PATCH /beneficiaries/:id
  #DELETE /beneficiaries/:id
  def destroy
    @beneficiary.destroy
  end


  private
  #set callback
  def set_beneficiary
    @beneficiary =Beneficiary.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def beneficiary_params
    params.require(:beneficiary).permit(:organisation_id, :name, :image, :description, :location)
  end

end
