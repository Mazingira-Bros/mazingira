class BeneficiarySerializer < ActiveModel::Serializer
  attributes :name, :image, :description, :location, :organisation_name

  def organisation_name
    object.organisation.name
  end
end
