class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.references :donation, null: false, foreign_key: true
      t.integer :payment_method

      t.timestamps
    end
  end
end
