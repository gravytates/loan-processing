class LoanRequirement < ApplicationRecord

  def finance_check |annual_income requested_amount|
    if (requested_amount > 5000) && (requested_amount < 50000) && (requested_amount / annual_income < 0.3)
      return true;
    end
    return false;
  end

  def address_check |address|
    @address = address
    @key = ENV["GOOGLE_KEY"]
    response = HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + @address + '&key=' + @key)
    return response["results"]["address_components"][4]["long_name"] #returns state from response payload
  end
end