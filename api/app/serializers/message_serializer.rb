class MessageSerializer < ActiveModel::Serializer
  attributes :id, :text, :sender, :attachment, :createdAt
end
