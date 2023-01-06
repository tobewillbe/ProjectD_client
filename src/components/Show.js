import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import ShowList from "./ShowList";
import {List,Paper} from "@mui/material";
import { ko } from 'date-fns/esm/locale';

//https://mui.com/material-ui/getting-started/learn/
import {ListItem, ListItemText, InputBase, Checkbox} from "@mui/material";


const API_BASE_URL = "http://localhost:8080/api/show";

const Show = ({movie, theater, mdate}) => {
    console.log(movie)
    console.log("movie :", movie);

    console.log("theater :", theater);
    console.log("date :", mdate);


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
        // console.log(`${API_BASE_URL}, date: ${dateFormat(startDate)}`);
        fetch(API_BASE_URL + "/" + dateFormat(startDate) + "/" + movie + "/" + theater)
            .then(res => {
                if (res.status === 403) {
                    // setTimeout(() => {
                        alert('로그인이 필요한 서비스입니다.');
                        window.location.href = '/login';
                        return;
                    // }, 1000)
                } else {
                    // console.log(res.json());
                    return res.json();
                }
            })
            .then(result => {
                console.log('server result: ', result);
                setItemState(result);
            })
        ;
    },[startDate]);

    const showItems = itemState.map(item => <ShowList key={item.showId} item={item}/>);

    return (
       <>


           <DatePicker
            selected={startDate}
            locale={ko}
            onChange={(date) => setStartDate(date)}
            inline
           />

           <div>
               <Paper style={{margin: 16}}>
                   <List>
                       {showItems}
                   </List>
               </Paper>
           </div>

       </>


    );

};

export default Show;