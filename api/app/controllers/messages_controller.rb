class MessagesController < ApplicationController
  
  before_action :set_message, only: [:show, :destroy]
  # GET /messages or /messages.json
  def index
    render json: messages = Message.all
  end

  # GET /messages/1 
  def show
    if @message
      render json: @message
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end
  
 

  
  # POST /messages 
  def create
    message = Message.new(message_params)
  
    if message.save
      render json: { message: "Message created successfully", message: message }, status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end
  

 

  # DELETE /messages/1 
  def destroy
   
   message =  @message

    if message
      message.destroy
      render json: { message: "Message deleted successfully" }, status: :ok
    else
      render json: { error: "Message not found" }, status: :not_found
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:text, :sender, :attachment, :createdAt)
    end
end
