import './App.css';
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import TimeTable from "./components/TimeTable";

const App =() => {

  return (
      <div className="App">
        <TimeTable/>
      </div>
  );
}

export default App;
