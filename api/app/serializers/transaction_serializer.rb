class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :donation_id, :payment_method, :status
end
