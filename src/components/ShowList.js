import {useEffect, useState} from "react";
import {ListItem,ListItemText,InputBase,ListItemSecondaryAction,IconButton} from "@mui/material";


const ShowList = (item) =>{

    const [showState, setShowState] =useState(item);
    console.log(showState);
    let {movieNm, screenNm ,showDate, showId, showTime, theaterNm} = showState.item;
    console.log('showState:', showState);

    return (
        <ListItem>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={showId}
                    name={showId}
                    value={screenNm + '    ' + showTime}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            {/* 삭제 버튼 */}
            <ListItemSecondaryAction>

            </ListItemSecondaryAction>
        </ListItem>
    );
}
export default ShowList;