class Donation < ApplicationRecord
  belongs_to :organisation
  belongs_to :donor

  enum preference: { anonymous: 0, not_anonymous: 1 }
  enum frequency: { once: 0, weekly: 1, monthly: 2 }
end
