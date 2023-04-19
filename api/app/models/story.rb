class Story < ApplicationRecord
  belongs_to :beneficiary, dependent: :destroy
  # has_one_attached :image
end
