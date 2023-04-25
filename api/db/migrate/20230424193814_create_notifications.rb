class CreateNotifications < ActiveRecord::Migration[7.0]
  def change
    create_table :notifications do |t|
      t.string :title
      t.text :message
      t.datetime :date
      t.string :sender
      t.string :image

      t.timestamps
    end
  end
end
