class Transaction < ApplicationRecord
  belongs_to :donation, dependent: :destroy

  enum payment_method: {M_Pesa: 0, paypal: 1, credit_card: 2}
  enum status: {cancelled:0, accepted:1}

  # Mpesa, paypal
end
