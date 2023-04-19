class Admin < ApplicationRecord
  has_secure_password
  validates :password, presence: true, length: { minimum: 8 }, format: { with: /\A(?=.*[0-9])(?=.*[A-Z])/i }
end
