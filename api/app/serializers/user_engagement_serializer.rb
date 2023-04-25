class UserEngagementSerializer < ActiveModel::Serializer
  attributes :id, :total_users, :active_users, :inactive_users, :month, :visits, :signups, :date, :donations
end
