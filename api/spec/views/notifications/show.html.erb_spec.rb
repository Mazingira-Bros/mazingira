require 'rails_helper'

RSpec.describe "notifications/show", type: :view do
  before(:each) do
    assign(:notification, Notification.create!(
      title: "Title",
      message: "MyText",
      sender: "Sender",
      image: "Image"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Sender/)
    expect(rendered).to match(/Image/)
  end
end
