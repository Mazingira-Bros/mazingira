class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :poster, :location, :date, :time
end
