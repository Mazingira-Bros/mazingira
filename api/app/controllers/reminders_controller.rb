class RemindersController < ApplicationController
    def index
        reminder= Reminder.all
        render json: reminder, status: :ok
    end

    def show
        reminder = Reminder.find_by(id: params[:id])
    
        if reminder
          render json: reminder
        else
          render json: { error: "Reminder not found" }, status: :not_found
        end
      end
       # updates a specific reminder
  def update
    reminder = Reminder.find_by(id: params[:id])

    if reminder
      if reminder.update(reminder_params)
        render json: reminder, status: :ok
      else
        render json: { errors: reminder.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Reminder not found" }, status: :not_found
    end
  end

    # creates a new reminder
    def create
        reminder = Reminder.new(reminder_params)
    
        if reminder.save
          render json: { message: "Reminder created successfully", reminder: reminder }, status: :created
        else
          render json: { errors: reminder.errors.full_messages }, status: :unprocessable_entity
        end
      end
 # creates a destroy
      def destroy
        reminder = Reminder.find_by(id: params[:id])
    
        if reminder
          reminder.destroy
          render json: { message: "Reminder deleted successfully" }, status: :ok
        else
          render json: { error: "Reminder not found" }, status: :not_found
        end
      end
      private

      def reminder_params
        params.require(:reminder).permit(:donation_id)
      end
end
