class Organisation < ApplicationRecord
  has_secure_password
  has_many :donations, dependent: :destroy
  has_many :beneficiaries, dependent: :destroy
  has_many :inventories, dependent: :destroy
  has_many :stories, dependent: :destroy

  enum status: {pending: 0,accepted: 1,denied: 2}

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true, length: { in: 8..15 }
end


