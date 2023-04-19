# require 'rails_helper'

# RSpec.describe AdminsController, type: :controller do
#   describe "GET #index" do
#     it "returns a success response" do
#       get :index
#       expect(response).to be_successful
#     end

#     it "returns all admins as JSON" do
#       admin1 = Admin.create(name: "John Doe", email: "johndoe@example.com", password: "password1")
#       admin2 = Admin.create(name: "Jane Smith", email: "janesmith@example.com", password: "password2")

#       get :index

#       expect(response.content_type).to eq('application/json')
#       expect(response.body).to include(admin1.to_json)
#       expect(response.body).to include(admin2.to_json)
#     end
#   end
# end
