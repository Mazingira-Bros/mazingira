class CreateReminders < ActiveRecord::Migration[7.0]
  def change
    create_table :reminders do |t|
      t.integer :donation_id

      t.timestamps
    end
  end
end
