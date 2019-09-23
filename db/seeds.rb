require 'faker'
include Faker

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end
LoanApplication.create(name: 'Grady Shelton', address: '2625 E Burnside St. Portland, OR 97214', annual_income: 50000, requested_amount: 6000)
100.times do
  name = Faker::Name.name
  address = Faker::Address.full_address
  income = Faker::Number.number(digits: 5)
  requested_amount = Faker::Number.number(digits: 4)
  LoanApplication.create(name: name, address: address, annual_income: income, requested_amount: requested_amount)
end