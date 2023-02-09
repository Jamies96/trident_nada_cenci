import React from "react";
import FormWeather from "../../components/FormWeather/FormWeather";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

function Weather(){
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-auto">
        <h1>Weather</h1>
            </div>
            </div>
                <div className="row">
                <div className="col">
        <FormWeather></FormWeather>
        <div className="row">
                <div className="col-2">
        <Link to={'/'}><button className='btn btn-link'>Go back to home</button></Link>
                </div>
                </div>
                </div>  
                </div>
        </div>
        </>
    )
}
export default Weather;