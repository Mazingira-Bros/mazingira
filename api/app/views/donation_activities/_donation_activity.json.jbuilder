json.extract! donation_activity, :id, :total_donations, :monthly_donations, :average_donation, :month, :visits, :signups, :active_users, :date, :donations, :created_at, :updated_at
json.url donation_activity_url(donation_activity, format: :json)
