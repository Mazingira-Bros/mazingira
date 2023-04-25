require 'rails_helper'

RSpec.describe "donation_activities/index", type: :view do
  before(:each) do
    assign(:donation_activities, [
      DonationActivity.create!(
        total_donations: 2,
        monthly_donations: 3,
        average_donation: 4,
        month: "Month",
        visits: 5,
        signups: 6,
        active_users: 7,
        donations: 8
      ),
      DonationActivity.create!(
        total_donations: 2,
        monthly_donations: 3,
        average_donation: 4,
        month: "Month",
        visits: 5,
        signups: 6,
        active_users: 7,
        donations: 8
      )
    ])
  end

  it "renders a list of donation_activities" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(3.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(4.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Month".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(5.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(6.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(7.to_s), count: 2
    assert_select cell_selector, text: Regexp.new(8.to_s), count: 2
  end
end
