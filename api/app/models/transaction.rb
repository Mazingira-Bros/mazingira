class Transaction < ApplicationRecord
  belongs_to :donation

  enum status: {M_Pesa: 0,paypal: 1, credit_card: 2}

  # Mpesa, paypal
end
