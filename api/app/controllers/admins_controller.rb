class AdminsController < ApplicationController
    def index
    admins= Admin.all
    render json: admins
    end
end
