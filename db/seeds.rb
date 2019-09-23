require 'faker'
include Faker

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end
single_address = '2625 E Burnside St. Portland, OR 97214'
single_income = 50000
single_amount = 60000
single_decision = false
single_state = LoanRequirement.address_check(single_address)
isStateAcceptable = false
if single_state === "OR" || single_state === "CA" || single_state === "FL"
  isStateAcceptable = true
end
if (LoanRequirement.finance_check(single_income, single_amount) && isStateAcceptable)
  single_decision = true
end
LoanApplication.create(name: 'Grady Shelton', address: single_address, annual_income: 50000, requested_amount: 6000, decision: single_decision)
100.times do
  name = Faker::Name.name
  address = Faker::Address.full_address
  income = Faker::Number.number(digits: 5)
  requested_amount = Faker::Number.number(digits: 4)
  state = LoanRequirement.address_check(address)
  isStateAcceptable = false
  decision = false

  if state === "OR" || state === "CA" || state === "FL"
    isStateAcceptable = true
  end

  if (LoanRequirement.finance_check(income, requested_amount) && isStateAcceptable)
    decision = true
  end
  LoanApplication.create(name: name, address: address, annual_income: income, requested_amount: requested_amount, decision: decision)
end