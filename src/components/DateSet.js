import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import ShowList from "./ShowList";
import {List,Paper} from "@mui/material";
import { ko } from 'date-fns/esm/locale';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, InputBase, Checkbox} from "@mui/material";


const API_BASE_URL = "http://localhost:8080/api/show";

const DateSet = ({movie, theater, mdate, showDate}) => {


    const [startDate, setStartDate] = useState(new Date());
    const [itemState, setItemState] = useState([]);


    function dateFormat(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;

        return date.getFullYear() + '-' + month + '-' + day;
    }


    useEffect(()=> {

        showDate(dateFormat(startDate));
        console.log(showDate);

    },[startDate]);



    return (
       <>

           <DatePicker
            selected={startDate}
            locale={ko}
            onChange={(date) => setStartDate(date)}
            inline
           />
       </>


    );

};

export default DateSet;