class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :donation_id
      t.integer :payment_method
      t.string :status

      t.timestamps
    end
  end
end
