import React, { Component } from 'react';

class FormInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      income: 0,
      requestedAmount: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postLoanApplication = async () => {
    return;
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({
      name: event.target.name,
      address: event.target.value,
      income: event.target.value,
      requestedAmount: event.target.value
    });
    alert("A loan application was submitted: " + this.state);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h3>Form Inputs</h3>
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default FormInputs;