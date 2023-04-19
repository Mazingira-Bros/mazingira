class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :likes, :image
  belongs_to :beneficiary
end
