class CreateOrganisations < ActiveRecord::Migration[7.0]
  def change
    create_table :organisations do |t|
      t.string :logo
      t.string :name
      t.string :password_digest
      t.string :email
      t.text :description
      t.string :website
      t.string :contact_person
      t.string :phone_number
      t.integer :status

      t.timestamps
    end
  end
end
