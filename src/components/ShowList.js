import {useEffect, useState} from "react";
import {ListItem,ListItemText,InputBase,ListItemSecondaryAction,IconButton} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";

const ShowList = (item) =>{

    const [itemState, setItemState] =useState(item);

    let {movieNm, screenNm ,showDate, showId, showTime, theaterName} = itemState.item;
    console.log('itemState:',itemState);

    return (
        <ListItem>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label" : "naked"}}
                    type="text"
                    id={showId}
                    name={showId}
                    value={theaterName+ '     ' + screenNm + '    ' + movieNm + '    ' + showTime + '    '}
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