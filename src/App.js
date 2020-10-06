import React, { Fragment } from 'react';
import './App.css';

import InputJob from './components/InputJob';
import ListJobs from './components/ListJobs';

function App() {
  return (
    <Fragment>
      <div className="container">
      <div className="header">
      <h1>Job Tracker</h1>
      <InputJob/>
      </div>
      <ListJobs/>
      </div>
    </Fragment>
  );
}

export default App;
