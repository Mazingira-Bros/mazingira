class CreateUserEngagements < ActiveRecord::Migration[7.0]
  def change
    create_table :user_engagements do |t|
      t.integer :total_users
      t.integer :active_users
      t.integer :inactive_users
      t.string :month
      t.integer :visits
      t.integer :signups
      t.date :date
      t.integer :donations

      t.timestamps
    end
  end
end
