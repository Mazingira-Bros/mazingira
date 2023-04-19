class Admin < ApplicationRecord
  has_secure_password
  validates :password, length: { is: 13 }
end
