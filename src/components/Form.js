import React from "react";
import axios from "axios";
import { FirstName } from "./firstName";
import { LastName } from "./lastName";
import { Email } from "./email";
import { Telephone } from "./contactNumber";
import { Device } from "./deviceType";
import { Model } from "./deviceModel";
import { SerialNumber } from "./serialNumber";
import { PurchaseDate } from "./purchaseDate";
import { Problem } from "./problemDescription";
import { Attach } from "./attachFile";
import { Submit } from "./submit";

class Form extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    tel: null,
    device: "",
    model: "",
    serial: null,
    purchaseDate: "",
    problem: "",
    upload: null
  };
  //function that saves data if offline and sends it when connected-not working!!!
  /*
  handleSubmit(e) {
    e.preventDefault();
    if (!navigator.onLine) {
      alert("You are curently offline. Your data will be stored");
      localStorage.setItem("formData", JSON.stringify(this.state));
    } else {
      if (localStorage.getItem("formData") !== null) {
        const data = JSON.parse(localStorage.getItem("formData"));
        var formData = new FormData();
        for (var key in data) {
          formData.append(key, data[key]);
        }
        axios
          .post(
            "https://demo.bfxsolutions.com:8080/tests/Danijela/assets/api/danijelatestapi.php",
            formData,
            //localStorage.getItem("formData"),
            { headers: { "Content-Type": "multipart/form-data" } }
          )

          .then(response => {
            const action =element.action;

            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
*/
  handleChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(this.state));
    var formData = new FormData();
    for (var key in this.state) {
      formData.append(key, this.state[key]);
    }
    axios
      .post(
        "https://demo.bfxsolutions.com:8080/tests/Danijela/assets/api/danijelatestapi.php",
        formData,
        //localStorage.getItem("formData"),
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const style = {
      backgroundColor: "#ffffff"
    };
    return (
      <div className="row">
        <div className="col-12">
          <div className="card-box">
            <form
              className="form-horizontal  p-3"
              style={style}
              // onSubmit={e => this.handleSubmit(e)}--if called there is no redirect to api, but response is status 200
              action="https://demo.bfxsolutions.com:8080/tests/Danijela/assets/api/danijelatestapi.php"
              method="POST"
            >
              <p className="text-secondary font-weight-bold">WARRANTY FORM</p>
              <FirstName handleChange={e => this.handleChange(e)} />
              <LastName handleChange={e => this.handleChange(e)} />
              <Email handleChange={e => this.handleChange(e)} />
              <Telephone handleChange={e => this.handleChange(e)} />
              <Device handleChange={e => this.handleChange(e)} />
              <Model handleChange={e => this.handleChange(e)} />
              <SerialNumber handleChange={e => this.handleChange(e)} />
              <PurchaseDate handleChange={e => this.handleChange(e)} />
              <Problem handleChange={e => this.handleChange(e)} />
              <Attach handleChange={e => this.handleChange(e)} />
              <Submit />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
