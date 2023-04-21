require 'rails_helper'

RSpec.describe Donation, type: :model do
  context "validations" do
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:preference) }
    it { should validate_presence_of(:frequency) }
    it { should validate_presence_of(:organisation_id) }
    it { should validate_presence_of(:donor_id) }
  end

  context "associations" do
    it { should belong_to(:organisation) }
    it { should belong_to(:donor) }
  end

  context "enums" do
    it { should define_enum_for(:preference).with_values(anonymous: 0, not_anonymous: 1) }
    it { should define_enum_for(:frequency).with_values(once: 0, weekly: 1, monthly: 2) }
  end
end
