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
          <input type="text" value={props.inputName} onChange={props.handleNameChange} />
        </div>
        <div>
          <label>
            Mailing Address:
          </label>
          <input type="text" value={props.inputAddress} onChange={props.handleAddressChange} />
        </div>
        <div>
          <label>
            Annual Income:
          </label>
          <input type="number" value={props.inputIncome} onChange={props.handleIncomeChange} />
        </div>
        <div>
          <label>
            Requested Loan Amount:
          </label>
          <input type="number" value={props.inputRequestedAmount} onChange={props.handleRequestedAmountChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
export default FormInputs;