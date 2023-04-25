class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :text
      t.string :sender
      t.string :attachment
      t.datetime :createdAt

      t.timestamps
    end
  end
end
