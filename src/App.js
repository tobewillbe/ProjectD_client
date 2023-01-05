import logo from './logo.svg';
import './App.css';
import Show from './components/Show';
import{List} from '@mui/material';
import React, {useState} from 'react';
import Datepicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import TimeTable from "./components/TimeTable";



const items = [
  {
    id: 1,
    title: '점심메뉴 고르기',
    done: true
  },
  {
    id: 2,
    title: '책 읽기',
    done: false
  },
  {
    id: 3,
    title: '동영상 강의 보기',
    done: false
  }
];

//  const todoItems = Show();


const App =() => {
  const [startDate, setStartDate] = useState(new Date());

  return (
      <div className="App">
        <TimeTable/>


      </div>
  );
}

export default App;
