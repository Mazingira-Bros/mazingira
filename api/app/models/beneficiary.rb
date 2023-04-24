class Beneficiary < ApplicationRecord
  belongs_to :organisation
  has_many :stories, dependent: :destroy

  validates :organisation_id, presence: true
  validates :name, presence: true
end
