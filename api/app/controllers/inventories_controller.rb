class InventoriesController < ApplicationController
  before_action :set_inventory, only: %i[show update destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  #GET /inventories
  def index
    @inventories = Inventory.all
    render json: @inventories
  end

  #GET /inventories/:id
  def show
    render json: @inventory
  end

  #POST /inventories
  def create
    @inventory = Inventory.new(inventory_params)

    if @inventory.save
      render json: @inventory, status: :created, location: @inventory
    else
      render json: @inventory.errors, status: :unprocessable_entity
    end
  end

  #PATCH/PUT /inventories/:id
  def update
    if @inventory.update(inventory_params)
      render json: @inventory
    else
      render json: @inventory.errors, status: :unprocessable_entity
    end
  end

  #DELETE /inventories/:id
  def destroy
    @inventory.destroy
  end

  private

  def set_inventory
    @inventory = Inventory.find(params[:id])
  end

  def render_not_found
    render json: {
             error: "Inventory with ID: #{params[:id]} not found"
           },
           status: :not_found
  end

  # Only allow a list of trusted parameters through.
  def inventory_params
    params.require(:inventory).permit(
      :organisation_id,
      :name,
      :image,
      :description,
      :quantity
    )
  end
end
