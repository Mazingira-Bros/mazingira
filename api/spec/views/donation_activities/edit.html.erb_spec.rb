require 'rails_helper'

RSpec.describe "donation_activities/edit", type: :view do
  let(:donation_activity) {
    DonationActivity.create!(
      total_donations: 1,
      monthly_donations: 1,
      average_donation: 1,
      month: "MyString",
      visits: 1,
      signups: 1,
      active_users: 1,
      donations: 1
    )
  }

  before(:each) do
    assign(:donation_activity, donation_activity)
  end

  it "renders the edit donation_activity form" do
    render

    assert_select "form[action=?][method=?]", donation_activity_path(donation_activity), "post" do

      assert_select "input[name=?]", "donation_activity[total_donations]"

      assert_select "input[name=?]", "donation_activity[monthly_donations]"

      assert_select "input[name=?]", "donation_activity[average_donation]"

      assert_select "input[name=?]", "donation_activity[month]"

      assert_select "input[name=?]", "donation_activity[visits]"

      assert_select "input[name=?]", "donation_activity[signups]"

      assert_select "input[name=?]", "donation_activity[active_users]"

      assert_select "input[name=?]", "donation_activity[donations]"
    end
  end
end
