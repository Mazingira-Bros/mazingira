require "rails_helper"

RSpec.describe DonationActivitiesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/donation_activities").to route_to("donation_activities#index")
    end

    it "routes to #new" do
      expect(get: "/donation_activities/new").to route_to("donation_activities#new")
    end

    it "routes to #show" do
      expect(get: "/donation_activities/1").to route_to("donation_activities#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/donation_activities/1/edit").to route_to("donation_activities#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/donation_activities").to route_to("donation_activities#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/donation_activities/1").to route_to("donation_activities#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/donation_activities/1").to route_to("donation_activities#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/donation_activities/1").to route_to("donation_activities#destroy", id: "1")
    end
  end
end
