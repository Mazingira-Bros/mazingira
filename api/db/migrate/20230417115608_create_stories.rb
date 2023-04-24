class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.references :organisation, null: false, foreign_key: true
      t.string :image
      t.string :summary
      t.string :location
      t.string :likes
      t.string :blogurl

      t.timestamps
    end
  end
end
