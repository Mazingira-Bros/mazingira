require 'rails_helper'

RSpec.describe Organisation, type: :model do
  it { should have_many(:donations).dependent(:destroy) }
  it { should have_many(:beneficiaries).dependent(:destroy) }
  it { should have_many(:inventories).dependent(:destroy) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }
end
