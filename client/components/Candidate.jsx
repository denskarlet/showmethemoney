import React, { useState, useEffect } from 'react';

import Session from '../Session.js';

const FinanceData = (props) => {
  const [ data, setData ] = useState(null);

  useEffect(() => {
    Session.getFinances(props.candidate_id)
    .then((data) => setData(data))
    .catch((err) => setData(undefined));
  }, []);

  console.log('financial data', data);

  if (data === null) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (!data) {
    return (
      <h1>No financial information available for this candidate.</h1>
    )
  }

  return (
    <div style={{border: '1px solid'}}>
      <div><b>total expenditures:</b> {data.expenditures}</div>
    </div>
  );
};

const Candidate = (props) => {
  console.log('candidate data', props);

  const [ showFinances, setShowFinances ] = useState(false);

  return (
    <div style={{border: '1px solid'}}>
      <div><b>name:</b> {props.name}</div>
      <div><b>party:</b> {props.party}</div>
      <div><b>address:</b> {props.address_street_1}</div>
      <div>
        <button onClick={() => setShowFinances(!showFinances)}>
          {showFinances ? 'hide' : 'show'} finances
        </button>
        {showFinances ? <FinanceData candidate_id={props.candidate_id} /> : null}
      </div>
    </div>
  );
};

export default Candidate;