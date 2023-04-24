require 'rails_helper'

RSpec.describe Beneficiary, type: :model do
  describe 'Validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:organisation_id) }
  end

  describe 'Associations' do
    it { should belong_to(:organisation) }
    it { should have_many(:stories).dependent(:destroy) }
  end
end
