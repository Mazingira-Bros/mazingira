class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :poster
      t.string :location
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
