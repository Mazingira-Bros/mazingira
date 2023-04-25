class NotificationSerializer < ActiveModel::Serializer
  attributes :id, :title, :message, :date, :sender, :image
end
