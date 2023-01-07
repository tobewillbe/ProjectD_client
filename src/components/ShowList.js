import {useState} from "react";
import {ListItem, Button} from "@mui/material";

const ShowList = (item) =>{

    const [showState, setShowState] =useState(item);
    console.log(showState);
    let {movieNm, screenNm ,showDate, showId, showTime, theaterNm} = showState.item;
    console.log('showState:', showState);

    const reserve = "/reserve/"+showId;

    return (
        <ListItem>
            <Button sx={{width : 120}}  href={reserve}>
                {screenNm +'   ' + showTime}
            </Button>
        </ListItem>
    );
}
export default ShowList;