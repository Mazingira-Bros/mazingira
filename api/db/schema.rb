# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_24_120114) do
  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "beneficiaries", force: :cascade do |t|
    t.integer "organisation_id", null: false
    t.string "name"
    t.string "image"
    t.string "description"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organisation_id"], name: "index_beneficiaries_on_organisation_id"
  end

  create_table "donations", force: :cascade do |t|
    t.integer "organisation_id", null: false
    t.integer "donor_id", null: false
    t.float "amount"
    t.integer "preference"
    t.integer "frequency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["donor_id"], name: "index_donations_on_donor_id"
    t.index ["organisation_id"], name: "index_donations_on_organisation_id"
  end

  create_table "donors", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "organisation_id", null: false
    t.string "image"
    t.string "name"
    t.text "description"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organisation_id"], name: "index_inventories_on_organisation_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "text"
    t.string "sender"
    t.string "attachment"
    t.datetime "createdAt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organisations", force: :cascade do |t|
    t.string "logo"
    t.string "name"
    t.string "password_digest"
    t.string "email"
    t.text "description"
    t.string "website"
    t.string "contact_person"
    t.string "phone_number"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reminders", force: :cascade do |t|
    t.integer "donation_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["donation_id"], name: "index_reminders_on_donation_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "beneficiary_id", null: false
    t.integer "likes"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["beneficiary_id"], name: "index_stories_on_beneficiary_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "donation_id", null: false
    t.integer "payment_method"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["donation_id"], name: "index_transactions_on_donation_id"
  end

  create_table "user_engagements", force: :cascade do |t|
    t.integer "total_users"
    t.integer "active_users"
    t.integer "inactive_users"
    t.string "month"
    t.integer "visits"
    t.integer "signups"
    t.date "date"
    t.integer "donations"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "beneficiaries", "organisations"
  add_foreign_key "donations", "donors"
  add_foreign_key "donations", "organisations"
  add_foreign_key "inventories", "organisations"
  add_foreign_key "reminders", "donations"
  add_foreign_key "stories", "beneficiaries"
  add_foreign_key "transactions", "donations"
end
