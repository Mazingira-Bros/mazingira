require 'rails_helper'

RSpec.describe "notifications/edit", type: :view do
  let(:notification) {
    Notification.create!(
      title: "MyString",
      message: "MyText",
      sender: "MyString",
      image: "MyString"
    )
  }

  before(:each) do
    assign(:notification, notification)
  end

  it "renders the edit notification form" do
    render

    assert_select "form[action=?][method=?]", notification_path(notification), "post" do

      assert_select "input[name=?]", "notification[title]"

      assert_select "textarea[name=?]", "notification[message]"

      assert_select "input[name=?]", "notification[sender]"

      assert_select "input[name=?]", "notification[image]"
    end
  end
end
