class Inventory < ApplicationRecord
  belongs_to :organisation, dependent: :destroy
end
