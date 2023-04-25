require 'rails_helper'

RSpec.describe "user_engagements/index", type: :view do
  before(:each) do
    assign(:user_engagements, [
      UserEngagement.create!(
        total_users: 2,
        active_users: 3,
        inactive_users: 4,
        month: "Month",
        visits: 5,
        signups: 6,
        donations: 7
      ),
      UserEngagement.create!(
        total_users: 2,
        active_users: 3,
        inactive_users: 4,
        month: "Month",
        visits: 5,
        signups: 6,
        donations: 7
      )
    ])
  end

  it "renders a list of user_engagements" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(3.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(4.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Month".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(5.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(6.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(7.to_s), count: 2
  end
end
