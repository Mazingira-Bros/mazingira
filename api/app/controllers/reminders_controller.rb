class RemindersController < ApplicationController
    def index
        reminder= Reminder.all
        render json: reminder, status: :ok
    end
end
