import React from "react";
import {useParams} from "react-router-dom";
const Reserve = () =>{
    const {ReserveId} = useParams();
    return(
        <div>
            <h1> {ReserveId} 테스트</h1>
        </div>

    );
}

export default Reserve;