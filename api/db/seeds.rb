

# Create 5 organizations
puts "seeding now************"
5.times do
  Organisation.create!(
    logo: Faker::Company.logo,
    name: Faker::Company.name,
    password_digest: Faker::Internet.password,
    email: Faker::Internet.email,
    description: Faker::Lorem.paragraph,
    website: Faker::Internet.url,
    contact_person: Faker::Name.name,
    phone_number: Faker::PhoneNumber.phone_number,
    status: rand(0..2)
  )
end

puts "done seeding **************"
