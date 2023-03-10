import React from "react";
import { useState } from "react";
import uuid from "uuid";
// import { AppContext } from '../App';

function PatientDetails({onSubmit}) {

const [name,setName]=useState("");
const [date,setDate]=useState("");
const [age,setAge]=useState("");
const [gender,setGender]=useState("");
const [Preference,setPreferencee]=useState("");
const [contact,setContact]=useState("");
const [whatsappNumber,setWhatsappNumber]=useState("");
const [address,setAddress]=useState("");

const [opDetails, setOpDetails]=useState();





//   function handleChange(e) {
//     e.preventDefault();
//     const newPatientDetails = {
//       id: Math.round(Math.random() * 9999),
//         name:name.current.value,
//     };
    function handleSbumit(e){
        e.preventDefault();
        
        onSubmit({id:Math.round(Math.random() * 999),name:name})
        console.log("submit");
        // setOpDetails({
        //   ...opDetails,
        //   [e.target.name]: e.target.value
        // })
       
    }
  
  return (
    <div>
      <form className="row g-3" onSubmit={handleSbumit}>
        <div className="col-6">
          <label for="inputUserId" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="inputUserId"
            placeholder="InputUserId"
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success" type="submit">
            Save
          </button>
        </div>

        <div className="col-12">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            
            type="text"
            className="form-control"
            id="inputName`"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label className="form-label">Date</label>
          <input type="date" className="form-control" id="inputDate" 
          onChange={(e) => setDate(e.target.value)}
          value={date}/>
        </div>
        <div className="col-12">
          <label for="inputAge" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAge"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-6">
          <label for="inputState" className="form-label">
            Gender
          </label>
          <select id="inputGender" className="form-select">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        {/* <div className="col-md-6">
                              <label for="inputWeight" className="form-label">Weight</label>
                              <input type="number" className="form-control" id="inputWeight"/>
                            </div> */}
        <div className="col-md-6">
          <label for="inputPreference" className="form-label">
            Preference
          </label>
          <select id="inputPreference" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-12">
          <label for="phone" className="form-label">
            Contact
          </label>
          <input type="tel" className="form-control" id="phone" 
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        </div>
        <div className="col-md-12">
          <label for="phone" className="form-label">
            WhatsappNumber
          </label>
          <input type="tel" className="form-control" id="phone"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}/>
        </div>

        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input type="text" className="form-control" id="inputAddress" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}/>
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-success" type="button">
            Additional Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default PatientDetails;
