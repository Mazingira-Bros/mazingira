require 'rails_helper'

RSpec.describe Admin, type: :model do
  describe 'password encryption and validation' do
    it 'encrypts the password' do
      admin = Admin.create!(email: 'test@example.com', password: 'password1234!')
      expect(admin.password_digest).not_to eq('password1234!')
    end

    it 'validates the password length' do
      admin = Admin.new(email: 'test@example.com', password: 'password')
      expect(admin).not_to be_valid

      admin = Admin.new(email: 'test@example.com', password: 'password1234!')
      expect(admin).to be_valid
    end
  end
end
