class CreateLoanApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :loan_applications do |t|
      t.column :name, :string
      t.column :address, :string
      t.column :annual_income, :integer
      t.column :requested_amount, :integer
      t.column :decision, :boolean, :default => false

      t.timestamps
    end
  end
end
