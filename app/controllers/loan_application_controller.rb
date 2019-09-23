require 'pry'
class LoanApplicationController < ApplicationController
  def index
    @loan_applications = LoanApplication.all.order(:decision)
  end

  def new
    @loan_application = LoanApplication.new
  end

  def create
    binding.pry
    #check decision using param data before creating new object.    
    income = application_params[:income]
    amount = application_params[:requested_amount]
    address = application_params[:address]
    state = LoanRequirement.address_check(address)
    isStateAcceptable = false

    if state === "OR" || state === "CA" || state === "FL"
      isStateAcceptable = true
    end

    if (LoanRequirement.finance_check(income, amount) && isStateAcceptable)
      application_params[:decision] = true;
    end

    @loan_application = LoanApplication.new(application_params)

    if @loan_application.save
      render json: LoanApplication.all.order(:decision), status: :created
    else
      render json: @loan_application.errors, status: :unprocessable_entity
    end
  end

  private 
    def application_params
      params.require(:loan_application).permit(:name, :address, :income, :requested_amount, :decision)
    end
end
