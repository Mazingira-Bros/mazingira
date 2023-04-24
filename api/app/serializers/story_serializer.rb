class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :summary,:location, :blogurl, :likes, :organisation,

  def organisation
    {
      id: object.organisation.id,
      name: object.organisation.name
    }
  end
end
