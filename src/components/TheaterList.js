import {useState} from "react";
import {Button, ListItem} from "@mui/material";

const TheaterList = ({item,theater}) =>{

    const [thState, setThState] =useState(item);

    let {address, locationID, tell, theaterID, theaterNm} = thState;
    console.log('thState:',thState);

    const onClickHandler = e =>{
        theater(theaterID);
    }

    return (
        <ListItem>
            <Button size = "small" onClick={onClickHandler}
            >
                {theaterNm}
            </Button>
        </ListItem>
    );
}
export default TheaterList;