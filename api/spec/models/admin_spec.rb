require 'rails_helper'

RSpec.describe Admin, type: :model do
  context "validations" do
    it "is valid with a name, email, and password" do
      admin = Admin.new(
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password12345!"
      )
      expect(admin).to be_valid
    end

    it "is invalid without a name" do
      admin = Admin.new(name: nil)
      admin.valid?
      expect(admin.errors[:name]).to include("can't be blank")
    end

    it "is invalid without an email" do
      admin = Admin.new(email: nil)
      admin.valid?
      expect(admin.errors[:email]).to include("can't be blank")
    end

    it "is invalid without a password" do
      admin = Admin.new(password: nil)
      admin.valid?
      expect(admin.errors[:password]).to include("can't be blank")
    end
  end
end
