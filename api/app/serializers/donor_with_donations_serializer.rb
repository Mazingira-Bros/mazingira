class DonorWithDonationsSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :donations

  def donations
    object.donations.map do |donation|
      {
        organisation: donation.organisation.name,
        amount: donation.amount,
        frequency: donation.frequency,
        # created_at: donation.created_at
      }
    end
  end
end
