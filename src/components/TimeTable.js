import React, {useEffect, useState} from "react";
import Show from "./Show";
import {List, Paper} from "@mui/material";
import MovieList from "./MovieList";
import LocationList from "./LocationList";
import TheaterList from "./TheaterList";
import "../Timetable.css";

const API_BASE_URL="http://localhost:8080/api";

const TimeTable = () => {
    const [mvState, setMvState] = useState([]);
    const [ttState, setTTState] = useState([]);
    const [locState, setLocState] = useState([]);
    const [thState, setThState] = useState(["0111"]);
    const [mvCdState, setMvCdState] = useState(["20022020"]);

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
        setThState(target);
        console.log("thState: ", thState);
    }
    const movie = target => {
        setMvCdState(target);
        console.log("mvCdState: ", mvCdState);
    }

    const mvitem = mvState.map(item => <MovieList key={item.movieCd} item={item} movie={movie}/>);
    const locitem = ttState.map(item => <LocationList key={item.locationID} item={item} location={location}/>);
    const thitem = locState.map(item => <TheaterList key={item.theaterID} item={item} theater={theater}/>);

    useEffect(()=> {
        fetch(API_BASE_URL +'/movie' )
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
                //console.log('server result: ', result.movies);
                setMvState(result.movies);
            })
        ;
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
                //console.log('server result: ', result.locDTOList);
                setTTState(result.locDTOList);
            })
        ;
    },[]);

    return(<div>
        <div className="container" style={{margin: 10}}>
            <Paper style={{margin: 16}} sx={{width :160}}>
                <List>
                    {mvitem}
                </List>
            </Paper>
            <Paper style={{margin: 16}} sx={{alignContent:'center' ,width :160}}>
                <List>
                    {locitem}
                </List>
            </Paper>
            <Paper style={{margin: 16}} sx={{width :160}}>
                <List>
                    {thitem}
                </List>
            </Paper>
            <Show movie = {mvCdState} theater = {thState}/>
        </div>
    </div>)
}
export default TimeTable;