require 'rails_helper'

RSpec.describe "messages/new", type: :view do
  before(:each) do
    assign(:message, Message.new(
      text: "MyString",
      sender: "MyString",
      attachment: "MyString"
    ))
  end

  it "renders new message form" do
    render

    assert_select "form[action=?][method=?]", messages_path, "post" do

      assert_select "input[name=?]", "message[text]"

      assert_select "input[name=?]", "message[sender]"

      assert_select "input[name=?]", "message[attachment]"
    end
  end
end
