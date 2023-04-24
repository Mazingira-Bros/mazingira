class EventsController < ApplicationController

  # GET /events
  def index
    events = Event.all
    render json: events, status: :ok
  end
  # SHOW /events/:id

  # PUT /events/update/:id

  # POST /donors

  # DELETE /donors/:id

  private
  def event_params
  end
  def render_event_not_found_response
    render json: {error: "Event not found"}, status: :not_found
  end
end
