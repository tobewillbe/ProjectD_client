import React, {useEffect, useState} from "react";
import Show from "./Show";
import {List, Paper} from "@mui/material";
import LocationList from "./LocationList";
import TheaterList from "./TheaterList";
import ShowList from "./ShowList";

const API_BASE_URL="http://localhost:8080/api";

const TimeTable = () => {
    const [ttState, setTTState] = useState([]);
    const [locState, setLocState] = useState([]);
    const [thState, setThState] = useState([]);

    const location = target => {
        fetch(API_BASE_URL+'/theater/'+target)
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
            setLocState(result.theaters);
        })
    }

    const theater = target => {
        console.log(target)
        // fetch(API_BASE_URL+'/theater/02')
        //     .then(res => {
        //         if (res.status === 403) {
        //             // setTimeout(() => {
        //             alert('로그인이 필요한 서비스입니다.');
        //             window.location.href = '/login';
        //             return;
        //             // }, 1000)
        //         } else {
        //             // console.log(res.json());
        //             return res.json();
        //         }
        //     })
        //     .then(result => {
        //         console.log('server result: ', result);
        //         setThState(result);
        //         console.log('thState:', thState);
        //     })
    }

    const locitem = ttState.map(item => <LocationList key={item.locationID} item={item} location={location}/>);
    const thitem = locState.map(item => <TheaterList key={item.theaterID} item={item} theater={theater}/>);

    useEffect(()=> {
        fetch(API_BASE_URL +'/location' )
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
                console.log('server result: ', result.locDTOList);
                setTTState(result.locDTOList);
            })
        ;
    },[]);

    return(<div>
        <div>
            <Paper style={{margin: 10}}>
                <List>
                    {locitem}
                </List>
            </Paper>
            <Paper style={{margin: 10}}>
                <List>
                    {thitem}
                </List>
            </Paper>
        </div>
        <Show/>
    </div>)
}
export default TimeTable;