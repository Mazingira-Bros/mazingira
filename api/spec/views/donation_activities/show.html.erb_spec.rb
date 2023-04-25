require 'rails_helper'

RSpec.describe "donation_activities/show", type: :view do
  before(:each) do
    assign(:donation_activity, DonationActivity.create!(
      total_donations: 2,
      monthly_donations: 3,
      average_donation: 4,
      month: "Month",
      visits: 5,
      signups: 6,
      active_users: 7,
      donations: 8
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
    expect(rendered).to match(/4/)
    expect(rendered).to match(/Month/)
    expect(rendered).to match(/5/)
    expect(rendered).to match(/6/)
    expect(rendered).to match(/7/)
    expect(rendered).to match(/8/)
  end
end
