import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ChairIcon from '@mui/icons-material/Chair';
import ShowSeatList from "./ShowSeatList";
import {List, Paper, Table, TableBody, TableCell, TableRow} from "@mui/material";

const API_BASE_URL="http://localhost:8080/api";
const Reserve = () =>{
    const {ReserveId} = useParams();
    const [seatState, setSeatState] = useState([]);
    const [rowState,setRowState] =useState();
    const [lengthState,setLengthState] = useState(0);

    const lastItem = (result) =>{
        return result[result.length-1].seatNum.substring(1);
    };


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
                            setRowState(lastItem(result));
                            setSeatState(result);
                            setLengthState(result.length);
                    })
        }, []);

    console.log ("rowState: ", rowState, "length:", lengthState);
    console.log("seatState:", seatState);
    const seatItem = seatState.map(item => <ShowSeatList key={item.showSeatID} item={item}/>);


    const tables = (col) => {
        const row = parseInt(rowState);
        const array=[];

        for (let i = 0; i<row; i++){
            array.push(<TableCell>{seatItem[i+col*row]}</TableCell>)
        }
        return array;
    };

    const table_two =() =>{
        const col =lengthState/ parseInt(rowState);
        const array=[];
        console.log(col);
        for (let i = 0; i<col; i++){
            array.push(<TableRow>{tables(i)}</TableRow>)
        }
        return array;
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
            <div>
                <table>
                    <TableBody sx={{size:50}}>
                        <TableRow sx={{size:8, margin:2}}>
                            {table_two()}
                        </TableRow>

                    </TableBody>
                </table>
            </div>
            <div>아아</div>
        </div>

    );
}

export default Reserve;