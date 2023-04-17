require 'faker'

puts "👨 Creating donors..."

10.times do
  Donor.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password_digest: "password"
  )
end

puts "👤 Created #{Donor.count} donors"
puts

puts "🎉 Done!"
