import React from 'react';
import Converter from '../Converter/Coverter';
import Weather from '../Weather/Weather';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Home(){

    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-auto">
        <h1>Home</h1>
            </div>
            </div>
            <div className="row">
            <div className="col-4">
       <Link to={'/converter'}>  <button className='btn btn-outline-primary'>Converter</button></Link>
       </div>
       <div className="col">
       <Link to={'/weather'}><button className='btn btn-outline-primary'> Weather Forecast</button></Link>
       
       </div>
       <div className="col">
       <Link to={'/signup'}><button className='btn btn-outline-primary'>Sign Up</button></Link>
       </div>
       </div>
       </div>
        </>
    )
}

export default Home;