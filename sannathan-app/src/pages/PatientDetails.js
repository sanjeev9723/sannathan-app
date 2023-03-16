import React from "react";
import { useState, useEffect } from "react";
import Popup from "./Popup";
// import { AppContext } from '../App';
import validate from "./validate";
import PopupDetails from "./PopupDetails";
import Inputbox from "../components/inputbox";
import Select from "../components/controls/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PatientDetails({ onSubmit, handelClick, patients,values, setValues }) {
  // -----new form validation------>>>>
  // const initialvalues = {
  //   name: "",
  //   date: "",
  //   age: "",
  //   contact: "",
  //   whatsappnumber: "",
  //   address: "",
  // };
  // const [formValues, setFormValues] = useState(initialvalues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const [buttonPopup, setButtonPopup] = useState(false);


  
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(
      validate(
        values
        //     fetch("http://localhost:8000/profile", {
        //     method: "POST",
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(formValues)
        // }).then ((res) => {
        //   return
        //  res.json(initialvalues)
        // })
      )
    );
    // if (validate ()) {
    //   //console.log(regobj);
    //   fetch("http://localhost:8000/user", {
    //       method: "POST",
    //       headers: { 'content-type': 'application/json' },
    //       body: JSON.stringify(formValues)
    //   })}
    if (!values.name || !values.contact) return;
    onSubmit({
      id: Math.round(Math.random() * 999),
      name: values.name,
      age: values.age,
      contact: values.contact,
    });
    console.log("submit");
  };
  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  //   if (!formValues.name || !formValues.contact) return;
  //   onSubmit({ id: Math.round(Math.random() * 999), name: formValues.name });
  //   console.log("submit");

  // }, [formErrors]);




  return (
    <div>
      {/* <pre>{JSON.stringify(formValues, undefined,2)}</pre> */}
      <form className="row g-3" onSubmit={handleSubmit}>
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
          <button
            className="btn btn-success"
            type="submit"
            
            onClick={handelClick}
          >
            Save
          </button>
        </div>
        {/* <button onClick={() => setButtonPopup(true)}>POpup</button> */}
        <Popup
          className="pop-head"
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        >
          Registration Completed
          <PopupDetails patients={patients} />
        </Popup>

        <div className="col-12">
          <Inputbox
            label={"Date"}
            type={"date"}
            initialValue={""}
            
            
            change={(e) => console.log(e)}
          />

          {/* <DatePicker
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat = 'dd/MM/yyyy'

          /> */}

          <p className="valid">{formErrors.date}</p>
        </div>
        <div className="col-12">
          <Inputbox
            label={"Name"}
            type={"text"}
            initialValue={""}
            
            change={(e) => console.log(e)}
          />
        </div>
        <p className="valid">{formErrors.name}</p>

        <div className="col-12">
          <Inputbox
            label={"Age"}
            type ={"number"}
            initialValue={""}
            
           

            change={(e) => console.log(e)}
          />
        </div>
        <p className="valid">{formErrors.age}</p>

        <div className="col-6">
          {/* <label for="inputState" className="form-label">
            Gender
          </label>
          <select id="inputGender" className="form-select">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </select> */}
          < Select 
           label={"Gender"}
          inputArry = { [
            { label: "Male", value: "Male" },
        
            { label: "Female", value: "Female" },
          ]}
          
          

          />

        </div>

        <div className="col-md-6">
          {/* <label for="inputPreference" className="form-label">
            Preference
          </label>
          <select id="inputPreference" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select> */}
          < Select 
           label={"Preference"}
          

          />
        </div>
        <div className="col-md-12">
          <Inputbox
            label={"contact"}
            type={"contact"}
            initialValue={"+91"}
            change={(e) => console.log(e)}
          />
        </div>
        <p className="valid">{formErrors.contact}</p>

        <div className="col-md-12">
          <Inputbox
            label={"WhatsappNumber"}
            type={"contact"}
            initialValue={""}
            change={(e) => console.log(e)}
          />
        </div>
        <p className="valid">{formErrors.whatsappnumber}</p>

        <div className="col-12">
          <Inputbox
            label={"Address"}
            type={"text"}
            initialValue={""}
            change={(e) => console.log(e)}
          />
        </div>
        <p className="valid">{formErrors.address}</p>

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
