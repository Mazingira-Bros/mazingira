class Donor < ApplicationRecord
  has_secure_password
  has_many :donations, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { is: 13 }
end
