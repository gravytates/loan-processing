class HomeController < ApplicationController
  def index
    @loan_applications = LoanApplication.all
  end

  def create
    #check decision using param data before creating new object.
    income = application_params[:income]
    amount = application_params[:requested_amount]
    address = application_params[:address]

    if (LoanRequirements.finance_check(income, amount) && LoanRequirements.address_check(address)) {
      application_params.push(:decision => true);
    }
    @loan_application = LoanApplication.new(application_params)
    if @loan_application.save
      render json: @loan_application, status: :created
    else
      render json: @loan_application.errors, status: :unprocessable_entity
    end
  end
end
