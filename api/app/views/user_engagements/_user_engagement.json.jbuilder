json.extract! user_engagement, :id, :total_users, :active_users, :inactive_users, :month, :visits, :signups, :date, :donations, :created_at, :updated_at
json.url user_engagement_url(user_engagement, format: :json)
