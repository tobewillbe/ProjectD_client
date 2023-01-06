import {useState} from "react";
import {Button, ListItem} from "@mui/material";

const TheaterList = ({item,theater}) =>{

    const [thState, setThState] =useState(item);

    let {address, locationID, tell, theaterID, theaterNm} = thState;

    const onClickHandler = e =>{
        //console.log("theaterID :", theaterID)
        theater(theaterID);
    }

    return (
        <ListItem>
            <Button sx={{width : 100}} size = "small" onClick={onClickHandler}
            >
                {theaterNm}
            </Button>
        </ListItem>
    );
}
export default TheaterList;