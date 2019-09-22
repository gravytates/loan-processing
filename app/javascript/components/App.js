import React, { Component } from 'react';
import FormInputs from './FormInputs';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return(
      <div>
        <FormInputs/>
        <ul>
          {this.props.loanApplications.map(application => (
            <li key={application.id}>{`Name: ${application.name}, Decision: ${(application.decision ? "Accepted" : "Declined")}`}</li>
          ))}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
  loanApplications: PropTypes.array.isRequired
};

export default App;