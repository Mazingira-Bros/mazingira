class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :donation_id, :payment_method, :credit_card, :status, :cancelled
end
