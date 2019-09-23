require('pry')
class LoanRequirement < ApplicationRecord

  def self.finance_check annual_income, requested_amount
    if (requested_amount > 5000) && (requested_amount < 50000) && (requested_amount / annual_income < 0.3)
      return true;
    end
    return false;
  end

  def self.address_check address
    key = ENV["GOOGLE_KEY"]
    state_initials = "state not found"
    response = HTTParty.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + key)
    formatted_address = ""
    if response
      if response["results"]
        if response["results"][0]
          if response["results"][0]["formatted_address"]
            formatted_address = response["results"][0]["formatted_address"]
          end
        end
      end
    end
    if !formatted_address.nil?
      if formatted_address.split(',')[-2]
        if formatted_address.split(',')[-2].strip
          if formatted_address.split(',')[-2].strip[0..2]
            if formatted_address.split(',')[-2].strip[0..2].strip
              state_initials = formatted_address.split(',')[-2].strip[0..2].strip #returns state from response payload
            end
          end
        end
      end
    end

    return state_initials
  end
end
