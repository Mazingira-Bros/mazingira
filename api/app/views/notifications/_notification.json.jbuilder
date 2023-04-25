json.extract! notification, :id, :title, :message, :date, :sender, :image, :created_at, :updated_at
json.url notification_url(notification, format: :json)
