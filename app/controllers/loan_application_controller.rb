require 'pry'
class LoanApplicationController < ApplicationController
  def index
    @loan_applications = LoanApplication.all
  end

  def new
    @loan_application = LoanApplication.new
  end

  def create
    #check decision using param data before creating new object.
    @loan_application = LoanApplication.new(application_params)

    respond_to do |format|
      if @loan_application.save
        format.html { redirect_to @loan_application, notice: 'Application successfully submitted.'}
        format.json { render json: LoanApplication.all }
      else
        render json: @loan_application.errors, status: :unprocessable_entity
      end
    end
    
    income = params[:income]
    amount = params[:requested_amount]
    address = params[:address]
    state = LoanRequirements.address_check(address)
    isStateAcceptable = false

    if state === "Oregon" || state === "California" || state === "Florida"
      isStateAcceptable = true
    end

    if (LoanRequirements.finance_check(income, amount) && isStateAcceptable)
      params.push(:decision => true);
    end

    @loan_application = LoanApplication.new(params)
    
    if @loan_application.save
      render json: LoanApplication.all, status: :created
    else
      render json: @loan_application.errors, status: :unprocessable_entity
    end
  end

  private 
    def application_params
      # binding.pry
      @cleaned_params = JSON.parse(params.gsub('\"', '"'))
      # JSON.stringify(@cleaned_params).require(:loan_application).permit(:name, :address, :income, :requested_amount)
      params.require(:loan_application).permit(:name, :address, :income, :requested_amount)
    end
end
