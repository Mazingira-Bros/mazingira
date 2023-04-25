class Donation < ApplicationRecord
  belongs_to :organisation
  belongs_to :donor, dependent: :destroy

  enum preference: { anonymous: 0, not_anonymous: 1 }
  enum frequency: { once: 0, weekly: 1, monthly: 2 }

  validates :amount, presence: true
  validates :preference, presence: true
  validates :frequency, presence: true
  validates :organisation_id, presence: true
  validates :donor_id, presence: true
end
