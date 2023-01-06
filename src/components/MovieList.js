import {Button, ListItem} from "@mui/material";
import {useState} from "react";

const MovieList = ({item,movie}) =>{

    const [mvState, setMvState] =useState(item);

    let {movieCd, movieNm} = mvState;

    const onClickHandler = e =>{
        console.log("movieCd :", movieCd)
        movie(movieCd);
    }

    return (
        <ListItem>
            <Button sx={{width : 100}} onClick={onClickHandler} >
                {movieNm}
            </Button>
        </ListItem>
    );
}
export default MovieList;