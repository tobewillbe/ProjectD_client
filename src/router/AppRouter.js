import React from "react";
import {Routes,Route} from "react-router-dom";
import App from "../App";
import Reserve from "../components/Reserve"
const AppRouter = () =>{

    return (
        <>
            <header/>
            <Routes>
                <Route path = "/" element= {<App/>}> </Route>
                <Route path = "/reserve/:ReserveId" element= {<Reserve/>}> </Route>
            </Routes>
        </>
    );
}
export default AppRouter