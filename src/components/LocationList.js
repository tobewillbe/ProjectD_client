import {useState} from "react";
import {ListItem, Button} from "@mui/material";

const LocationList = ({item,location}) =>{

    const [locState, setLocState] =useState(item);

    let {locationID, locationNm} = locState;
    //console.log('locState:',locState);

    const onClickHandler = e =>{
        location(locationID);
    }

    return (
        <ListItem>
            <Button sx={{textAlign:'center', width : 100}} onClick={onClickHandler}>
                {locationNm}
            </Button>
        </ListItem>
    );
}
export default LocationList;