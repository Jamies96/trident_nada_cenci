import React from "react";
import EurUsdConverter from "../../components/EurUsdConverter/EurUsdConverter";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Converter(){
    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-auto">
        <h1>Coverter</h1>
            </div>
            </div>
            <div className="row">
            <div className="col-auto">
        <EurUsdConverter></EurUsdConverter>
        </div>
        </div>
        <div className="row">
                <div className="col-2">
        <Link to={'/'}><button className='btn btn-link'>Go back to home</button></Link>
                </div>
                </div>
                </div>  
        </>
    )
}
export default Converter;