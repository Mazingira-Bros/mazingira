require 'rails_helper'

RSpec.describe "notifications/index", type: :view do
  before(:each) do
    assign(:notifications, [
      Notification.create!(
        title: "Title",
        message: "MyText",
        sender: "Sender",
        image: "Image"
      ),
      Notification.create!(
        title: "Title",
        message: "MyText",
        sender: "Sender",
        image: "Image"
      )
    ])
  end

  it "renders a list of notifications" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Sender".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Image".to_s), count: 2
  end
end
