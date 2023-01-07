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
        <ListItem alignItems='flex-start'>
            <Button sx={{textAlign:'center', width : 120}} onClick={onClickHandler}>
                {locationNm}
            </Button>
        </ListItem>
    );
}
export default LocationList;