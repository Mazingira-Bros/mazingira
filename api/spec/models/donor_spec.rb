require 'rails_helper'

RSpec.describe Donor, type: :model do
  context "validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:password) }
    it { should validate_length_of(:password).is_equal_to(13) }
  end

  context "associations" do
    it { should have_many(:donations).dependent(:destroy) }
  end
end
