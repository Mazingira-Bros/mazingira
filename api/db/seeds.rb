# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


puts "🌱 creating reminders..."

transactions = Transaction.create([{donation_id:"#{donations.id}",payment_method:"M-pesa",status:"Pending"}])


puts "✅Done"
