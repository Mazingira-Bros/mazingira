class StoriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_story_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

    # GET /stories
    def index
        stories = Story.all
        render json: stories, status: :ok
    end

    # GET /stories/:id
    def show
        story = Story.find(params[:id])
        render json: story, status: :ok
    end

    # PUT /stories/:id
    def update
        story = Story.find(params[:id])
        story.update(story_params)
        render json: story, status: :created
    end

    # POST /stories
    def create 
        story = Story.create(story_params)
        render json: story, status: :created
    end

    # DELETE /stories/:id
    def destroy
        story = Story.find(params[:id])
        story.destroy
        head :no_content
    end
    private 

    def story_params
        params.permit(:title, :content, :likes, :image)
    end

    def render_story_not_found_response
        render json: { error: "Story not found"}, status: :not_found
    end

    def render_invalid_response(invalid)
        render json: {errors: errors.invalid.full_messages}, status: :unathorised
    end
end
