class OrganisationSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description, :website,:logo ,:phone_number, :status

  # def phone_number
  #   object.phone_number
  # end
end
