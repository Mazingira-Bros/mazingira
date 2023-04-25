require 'rails_helper'

RSpec.describe "messages/show", type: :view do
  before(:each) do
    assign(:message, Message.create!(
      text: "Text",
      sender: "Sender",
      attachment: "Attachment"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Text/)
    expect(rendered).to match(/Sender/)
    expect(rendered).to match(/Attachment/)
  end
end
