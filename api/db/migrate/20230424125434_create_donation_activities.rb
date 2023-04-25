class CreateDonationActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :donation_activities do |t|
      t.integer :total_donations
      t.integer :monthly_donations
      t.integer :average_donation
      t.string :month
      t.integer :visits
      t.integer :signups
      t.integer :active_users
      t.date :date
      t.integer :donations

      t.timestamps
    end
  end
end
