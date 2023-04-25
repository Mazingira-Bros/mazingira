class Beneficiary < ApplicationRecord
  belongs_to :organisation

  validates :organisation_id, presence: true
  validates :name, presence: true
end
