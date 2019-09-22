class HomeController < ApplicationController
  def index
    @loan_applications = LoanApplication.all
  end
end
