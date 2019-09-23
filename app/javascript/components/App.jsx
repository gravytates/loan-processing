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
      requestedAmount: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleRequestedAmountChange = this.handleRequestedAmountChange.bind(this);
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
    this.setState({ requestedAmount: e.target.value });
  } 

  handleSubmit = async event => {
    event.preventDefault();
    alert("A loan application was submitted: " + this.state);
    console.log(this.state);
    this.setState({
      name: '',
      address: '',
      income: 0,
      requestedAmount: 0
    });
  }
  
  render() {
    return(
      <div>
        <FormInputs inputName={this.state.name} 
                    inputAddress={this.state.address}
                    inputIncome={this.state.income}
                    inputRequestedAmount={this.state.requestedAmount}
                    handleNameChange={this.handleNameChange}
                    handleAddressChange={this.handleAddressChange}
                    handleIncomeChange={this.handleIncomeChange}
                    handleRequestedAmountChange={this.handleRequestedAmountChange}
                    handleSubmit={this.handleSubmit}/>
        <Applications loanApplications={this.props.loanApplications}/>
      </div>
    )
  }
}

App.propTypes = {
  loanApplications: PropTypes.array.isRequired
};

export default App;