class EventsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_event_not_found_response

  # GET /events
  def index
    events = Event.all
    render json: events, status: :ok
  end

  # GET /events/:id
  def show
    event = find_event
    render json: event, status: :ok
  end

  # PUT /events/update/:id
  def update
    event = find_event
    if event.update(event_params)
      render json: event, status: :ok
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # POST /events
  def create
    event = Event.new(event_params)
    if event.save
      render json: event, status: :created
    else
      render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /events/:id
  def destroy
    event = find_event
    event.destroy
    head :no_content
  end

  private

  def find_event
    Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:title, :description, :poster, :location, :date, :time)
  end

  def render_event_not_found_response
    render json: { error: "Event not found" }, status: :not_found
  end
end
