require 'rails_helper'

RSpec.describe "user_engagements/show", type: :view do
  before(:each) do
    assign(:user_engagement, UserEngagement.create!(
      total_users: 2,
      active_users: 3,
      inactive_users: 4,
      month: "Month",
      visits: 5,
      signups: 6,
      donations: 7
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
  end
end
