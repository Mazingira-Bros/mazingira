require 'faker'

puts "👤 Creating Administrators"
6.times do
  Admin.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "root_password"
  )
end

puts "✨ Created #{Admin.count} Admins"; puts

puts "👨 Creating donors..."

10.times do
  Donor.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: "password"
  )
end

puts "✨ Created #{Donor.count} donors";puts

puts "📦 Creating organisations..."
5.times do
  Organisation.create!(
    logo: Faker::Company.logo,
    name: Faker::Company.name,
    password: "org_password",
    email: Faker::Internet.email,
    description: Faker::Lorem.paragraph,
    website: Faker::Internet.url,
    contact_person: Faker::Name.name,
    phone_number: Faker::PhoneNumber.phone_number,
    status: rand(0..2)
  )
end
puts "✨ Created #{Organisation.count} organizations";puts

puts "📦 Creating donations..."
Donor.all.each do |donor|
  rand(4..7).times do
    Donation.create!(
      organisation: Organisation.all.sample,
      donor: donor,
      amount: rand(10..1000),
      preference: rand(0..1),
      frequency: rand(0..2)
    )
  end
end
puts "✨ Created #{Donation.count} donations";puts

puts "👥 Creating beneficiaries..."
Organisation.all.each do |organisation|
  rand(3..4).times do
    Beneficiary.create!(
      name: Faker::Vehicle.manufacture,
      image: "https://picsum.photos/300/300/?random",
      description: Faker::Hacker.say_something_smart,
      location: Faker::Nation.capital_city,
      organisation: organisation
    )
  end
end
puts "✨ Created #{Beneficiary.count} beneficiaries";puts

puts "📦 Creating inventories..."
Organisation.all.each do |organisation|
  rand(3..4).times do
    Inventory.create!(
      name: Faker::Commerce.product_name,
      quantity: rand(1..100),
      # price: Faker::Number.decimal(l_digits: 2),
      image: "https://picsum.photos/300/300/?random",
      description: Faker::Lorem.paragraph,
      organisation: organisation
    )
  end
end
puts "✨ Created #{Inventory.count} inventories";puts


puts "📖 Creating stories..."
Beneficiary.all.each do |beneficiary|
  rand(2..3).times do
    Story.create!(
      title: Faker::Lorem.sentence(word_count: 5),
      content: Faker::ChuckNorris.fact,
      image: "https://picsum.photos/300/300/?random",
      beneficiary: beneficiary
    )
  end
end
puts "✨ Created #{Story.count} stories";puts

puts "📖 Creating transactions..."

Donation.all.each do |donation|
  # Create a transaction for the donation
  Transaction.create(donation: donation, payment_method: Transaction.payment_methods.keys.sample, status: Transaction.statuses.keys.sample)
end
puts "✨ Created #{Transaction.count} transactions";puts

puts "📖 Creating reminders..."

Donation.all.each do |donation|
  Reminder.create!(donation: donation)
end

puts "✨ Created #{Reminder.count} reminders";puts


puts "🎉 Done!"
