require 'rails_helper'

RSpec.describe "messages/index", type: :view do
  before(:each) do
    assign(:messages, [
      Message.create!(
        text: "Text",
        sender: "Sender",
        attachment: "Attachment"
      ),
      Message.create!(
        text: "Text",
        sender: "Sender",
        attachment: "Attachment"
      )
    ])
  end

  it "renders a list of messages" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Text".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Sender".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Attachment".to_s), count: 2
  end
end
