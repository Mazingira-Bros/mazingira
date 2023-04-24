class ReminderSerializer < ActiveModel::Serializer
  attributes :id, :donation_id
  belongs_to :donation
end
