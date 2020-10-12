import { FormControl, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Covid-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          <MenuItem value="World Wide">op1</MenuItem>
          <MenuItem value="UK">op2</MenuItem>
          <MenuItem value="USA">op3</MenuItem>
        </Select>
      </FormControl>

      {/* {Header} */}
      {/* {title + select inout dropdown field} */}

      {/* {InfoBoxs} */}
      {/* {InfoBoxs} */}
      {/* {InfoBoxs} */}

      {/* {Table} */}
      {/* {Graph} */}

      {/* {Map} */}
    </div>
  );
}

export default App;
