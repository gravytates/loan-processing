import React from 'react';

const FormInputs = (props) => {
  return (
    <div>
      <h3>Form Inputs</h3>
      <form>
        <div>
          <label>
            Name:
          </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>
            Mailing Address:
          </label>
          <input type="text" name="address" />
        </div>
        <div>
          <label>
            Annual Income:
          </label>
          <input type="number" name="income" />
        </div>
        <div>
          <label>
            Requested Loan Amount:
          </label>
          <input type="number" name="requestedAmount" />
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
export default FormInputs;