class CreateBeneficiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :beneficiaries do |t|
      t.references :organisation, null: false, foreign_key: true
      t.string :name
      t.string :image
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
