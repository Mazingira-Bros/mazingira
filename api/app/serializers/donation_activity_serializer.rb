class DonationActivitySerializer < ActiveModel::Serializer
  attributes :id, :total_donations, :monthly_donations, :average_donation, :month, :visits, :signups, :active_users, :date, :donations
end
