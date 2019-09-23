import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInputs from './FormInputs';
import Applications from './Applications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      income: 0,
      requested_amount: 0,
      loan_applications: this.props.loanApplications
    }

    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleRequestedAmountChange = this.handleRequestedAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.token = document.getElementsByName('csrf-token')[0].content;
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
  }

  handleIncomeChange = (e) => {
    this.setState({ income: e.target.value });
  }

  handleRequestedAmountChange = (e) => {
    this.setState({ requested_amount: e.target.value });
  } 

  handleSubmit = async event => {
    event.preventDefault();
    let scope = this;
    let postData = {loan_application: scope.state}
    console.log(postData);
    fetch("/loan_application", {
      method: "POST",
      type: "json",
      body: postData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': scope.token
      }
    })
    .then(function(response) {
      this.handleDecision(response.data);
      this.state.loan_applications.push(response.data) //or something
    })
    .catch(function(response,status,err) {
      console.log(response, status, err);
    });

    alert("A loan application was submitted from: " + scope.state.name);
    
    this.setState({
      name: '',
      address: '',
      income: 0,
      requested_amount: 0
    });
  }

  handleDecision = async responseData => {
    return responseData.decision //or something
  }
  
  render() {
    return(
      <div>
        <FormInputs inputName={this.state.name} 
                    inputAddress={this.state.address}
                    inputIncome={this.state.income}
                    inputRequestedAmount={this.state.requested_amount}
                    handleNameChange={this.handleNameChange}
                    handleAddressChange={this.handleAddressChange}
                    handleIncomeChange={this.handleIncomeChange}
                    handleRequestedAmountChange={this.handleRequestedAmountChange}
                    handleSubmit={this.handleSubmit}/>
        <Applications loanApplications={this.state.loan_applications}/>
      </div>
    )
  }
}

App.propTypes = {
  loanApplications: PropTypes.array.isRequired
};

export default App;