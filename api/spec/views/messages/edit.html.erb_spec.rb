require 'rails_helper'

RSpec.describe "messages/edit", type: :view do
  let(:message) {
    Message.create!(
      text: "MyString",
      sender: "MyString",
      attachment: "MyString"
    )
  }

  before(:each) do
    assign(:message, message)
  end

  it "renders the edit message form" do
    render

    assert_select "form[action=?][method=?]", message_path(message), "post" do

      assert_select "input[name=?]", "message[text]"

      assert_select "input[name=?]", "message[sender]"

      assert_select "input[name=?]", "message[attachment]"
    end
  end
end
