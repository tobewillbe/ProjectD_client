import React, {useState} from "react";
import {Button, ListItem, TableRow} from "@mui/material";

const ShowSeatList = (item) => {

    const [seatState, setSeatState] =useState(item);
    console.log(seatState);
    let {showSeatID, seatID, seatStatus, seatNum } = seatState.item;
    const [pushed,setpushed] = useState(false);

    const onClickHandler = e =>{
        //console.log("theaterID :", theaterID)
        setpushed(!pushed);
    }

    return (

            <Button sx={{width : 3}}>
            {seatNum}
            </Button>


    );

};
export default ShowSeatList;