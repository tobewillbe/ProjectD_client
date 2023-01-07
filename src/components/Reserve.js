import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ChairIcon from '@mui/icons-material/Chair';

const API_BASE_URL="http://localhost:8080/api";
const Reserve = () =>{
    const {ReserveId} = useParams();
    const [seatState, setSeatState] = useState([]);

        const showSeats = target => {
                console.log(API_BASE_URL+'/ShowSeats/'+ {ReserveId});
                fetch(API_BASE_URL+'/ShowSeats/'+ {ReserveId})
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
        }
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
        </div>

    );
}

export default Reserve;