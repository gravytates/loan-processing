class LoanRequirement < ApplicationRecord

  def finance_check |annual_income requested_amount|
    if (annual_income > 5000) && (requested_amount < 50000) && (requested_amount / annual_income < 0.3)
      return true;
    end
    return false;
  end

  def address_check |address|
    # google geocode api call goes here
  end
end