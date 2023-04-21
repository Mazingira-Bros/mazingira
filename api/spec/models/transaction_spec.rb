# spec/models/transaction_spec.rb
require 'rails_helper'

RSpec.describe Transaction, type: :model do
  describe "associations" do
    it { should belong_to(:donation) }
  end

  describe "enums" do
    it { should define_enum_for(:payment_method).with_values(M_Pesa: 0, paypal: 1, credit_card: 2) }
    it { should define_enum_for(:status).with_values(cancelled: 0, accepted: 1) }
  end
end
