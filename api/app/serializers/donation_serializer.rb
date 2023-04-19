class DonationSerializer < ActiveModel::Serializer
  attributes :id, :organisation_id, :donor_id, :amount, :preference, :frequency
  belongs_to :donor
end
