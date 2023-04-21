class Beneficiary < ApplicationRecord
  belongs_to :organisation
  has_many :stories, dependent: :destroy

  validates :name, presence: true
end
