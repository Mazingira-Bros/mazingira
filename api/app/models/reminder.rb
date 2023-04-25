class Reminder < ApplicationRecord
  belongs_to :donation, dependent: :destroy
end
