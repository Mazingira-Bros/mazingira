require 'rails_helper'

RSpec.describe "donation_activities/new", type: :view do
  before(:each) do
    assign(:donation_activity, DonationActivity.new(
      total_donations: 1,
      monthly_donations: 1,
      average_donation: 1,
      month: "MyString",
      visits: 1,
      signups: 1,
      active_users: 1,
      donations: 1
    ))
  end

  it "renders new donation_activity form" do
    render

    assert_select "form[action=?][method=?]", donation_activities_path, "post" do

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
