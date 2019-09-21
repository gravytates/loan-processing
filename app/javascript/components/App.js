import React, { Component } from 'react';
import FormInputs from './FormInputs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      income: 0,
      requestedAmount: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      name: event.target.name,
      address: event.target.value,
      income: event.target.value,
      requestedAmount: event.target.value
    });
  }

  handleSubmit(event) {
    alert("A loan application was submitted: " + this.state);
  }

  render() {
    return(
      <FormInputs handleChange={this.handleChange}/>
    )
  }
}

export default App;