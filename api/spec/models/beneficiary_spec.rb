require 'rails_helper'

RSpec.describe Beneficiary, type: :model do
  describe 'Validation' do

    describe 'name' do
      it 'must be present' do
        beneficiary = Beneficiary.new
        expect(beneficiary).not_to be_valid
        expect(beneficiary.errors[:name]).to include("can't be blank")
      end
    end
  end

  describe 'Associations' do
    it { should belong_to(:organisation) }
    it { should have_many(:stories).dependent(:destroy) }
  end
end
