import React from "react";
import FormWeather from "../../components/FormWeather/FormWeather";
import { PersonFill } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h1>Sign Up</h1>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-3">
              <label htmlFor="inputValue">Name</label>
              <input className="form-control" type="text" id="inputValue" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="inputValue">Surname</label>
              <input className="form-control" type="text" id="inputValue" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="inputValue">Email</label>
              <input className="form-control" type="email" id="inputValue" />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <label className="active" htmlFor="dateStandard">
                Birthday date
              </label>
            </div>
            </div>
            <div className="row">
            <div className="col-1">
              <input type="date" id="dateStandard" name="dateStandard"></input>
            </div>
            <div className="offset-1 col-1">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="offset-0 col">
            <Link to={"/"}>
              <button className="btn btn-link">Go back to home</button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
