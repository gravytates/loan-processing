import React, { Component } from 'react';

const FormInputs = (props) => {
  return (
    <div>
      <h3>Form Inputs</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            Name:
          </label>
          <input type="text" value={props.input_name} onChange={props.handleNameChange} />
        </div>
        <div>
          <label>
            Mailing Address:
          </label>
          <input type="text" value={props.input_address} onChange={props.handleAddressChange} />
        </div>
        <div>
          <label>
            Annual Income:
          </label>
          <input type="number" value={props.input_income} onChange={props.handleIncomeChange} />
        </div>
        <div>
          <label>
            Requested Loan Amount:
          </label>
          <input type="number" value={props.input_requested_amount} onChange={props.handleRequestedAmountChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default FormInputs;