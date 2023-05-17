import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable';

function App() {
  let rows=4;
  let columns=4;
  return (
    <div className="App">
      <DataTable
          columns={columns}
          rows={rows}
          />
    </div>
  );
}

export default App;
