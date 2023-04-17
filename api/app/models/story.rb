class Story < ApplicationRecord
  belongs_to :beneficiary
  has_one_attached :image
end
