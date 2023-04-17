class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :content
      t.references :beneficiary, null: false, foreign_key: true
      t.integer :likes

      t.timestamps
    end
  end
end
