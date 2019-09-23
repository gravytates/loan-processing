import React, { Component } from 'react';

const Applications = (props) => {
  return (
    <ul>
      {props.loanApplications.map(application => (
        <li key={application.id}>{`Name: ${application.name}, Decision: ${(application.decision ? "Accepted" : "Declined")}`}</li>
      ))}
    </ul>
  )
}
export default Applications;