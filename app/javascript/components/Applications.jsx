import React, { Component } from 'react';

const Applications = (props) => {
  return (
    <ul>
      {props.loanApplications.map(application => (
        <div key={application.id}>
          <li>{`${application.name}, Decision: ${(application.decision ? "ACCEPTED!" : "Declined")}`}</li>
          <li>{application.address} Salary: {application.annual_income} Request Amount: {application.requested_amount}</li>
          <hr></hr>
        </div>
      ))}
    </ul>
  )
}
export default Applications;