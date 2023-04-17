class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.references :organisation, null: false, foreign_key: true
      t.string :image
      t.string :name
      t.text :description
      t.integer :quantity

      t.timestamps
    end
  end
end
