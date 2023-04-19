class Organisation < ApplicationRecord
  has_secure_password
  has_many :donations
  has_many :beneficiaries
  has_many :inventories

  enum status: {pending: 0,accepted: 1,denied: 2}
end


