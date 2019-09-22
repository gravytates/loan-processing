# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
include Faker

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end
25.times do
  name = Faker::Name.name
  address = Faker::Address.full_address
  income = Faker::Number.number(digits: 5)
  requested_amount = Faker::Number.number(digits: 4)
  LoanApplication.create(name: name, address: address, annual_income: income, requested_amount: requested_amount)
end