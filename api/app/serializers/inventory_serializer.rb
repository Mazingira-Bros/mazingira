class InventorySerializer < ActiveModel::Serializer
  attributes  :name, :image, :description, :organisation_name, :quantity

def organisation_name
  object.organisation.name
end
end
