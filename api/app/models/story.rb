class Story < ApplicationRecord
  belongs_to :organisation, dependent: :destroy
end
