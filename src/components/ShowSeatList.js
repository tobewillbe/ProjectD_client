import React, {useState} from "react";
import {Button, ListItem} from "@mui/material";

const ShowSeatList = (item) => {

    const [seatState, setSeatState] =useState(item);
    //console.log(seatState);
    let {showSeatID, seatID, seatStatus, seatNum } = seatState.item;
    const [pushed,setpushed] = useState(false);

    const onClickHandler = e =>{
        //console.log("theaterID :", theaterID)
        setpushed(!pushed);
    }

    return (
        <ListItem>
            <Button sx={{width : 120}} onClick={onClickHandler}
            >
                {seatNum}
            </Button>
        </ListItem>
    );

};
export default ShowSeatList;