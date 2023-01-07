import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ChairIcon from '@mui/icons-material/Chair';
import ShowSeatList from "./ShowSeatList";
import {List, Paper, Table} from "@mui/material";

const API_BASE_URL="http://localhost:8080/api";
const Reserve = () =>{
    const {ReserveId} = useParams();

    const [seatState, setSeatState] = useState([],[]);
    let{showSeatID, seatID, seatStatus, seatNum } = seatState;
        useEffect(() => {
                fetch(API_BASE_URL+'/reserve/showseat/'+ {ReserveId}.ReserveId)
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
                            setSeatState(result);
                    })
        }, []);

    //     const lastItem = () =>{
    //         return seatState[seatState.length-1].seatNum.slice(1);
    //     };
    //     const itemLength = () =>{
    //         console.log(seatState.length);
    //         return seatState.length;
    //     };
    //
    // setTimeout(lastItem,1000);
    // setTimeout(itemLength,1000);
    // console.log (lastItem(),itemLength());
    const seatItem = seatState.map(item => <ShowSeatList key={item.showSeatID} item={item}/>);
    return(
        <div>

            <ChairIcon color='' sx={{fontsize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='primary' sx={{fontSize:60}}></ChairIcon>
            <ChairIcon color='error' sx={{fontSize:60}}></ChairIcon>
            <h1> {ReserveId}  테스트</h1>
            <div>
                <Table>
                    <tr>
                        <td> {seatItem[0]}</td>
                        <td> {seatItem[1]}</td>
                    </tr>
                </Table>
            </div>
        </div>

    );
}

export default Reserve;