import React, { useState } from "react";
import "./appointment.css";
import PatientDetails from "./PatientDetails";
import OpDetails from "./OpDetails";
const Appointment = () => {
  const [patients, setPatients,] = useState([]);
  const onSubmit = (data) => {
    const UpdatedPatients = JSON.parse(JSON.stringify(patients));
    UpdatedPatients.push(data);
    setPatients(UpdatedPatients);
  };
  console.log(patients);
  const [count, setCount] = useState(0);
  const [buttonPopup, setButtonPopup] = useState(false);


  function handelClick() {
    // setButtonPopup(true)
    setCount(count + 1);
    setButtonPopup(true);
    console.log(buttonPopup);
  }

  return (
    <section className="section">
      <div className="grid-layouts container">
        <div className="row main">
          {/* OP-Details */}
          <div className="col-sm-6 bg ">
            <div className="col-sm-md-6 op">
              <h3>OP DETAILS</h3>
            </div>

            <OpDetails  count={count} patients={patients} />
          </div>

          {/* Patient-details */}
          <div className="col-sm-6 bg">
            <div className="nav-head">SANNATHAN JEEVAN</div>

      <PatientDetails patients={patients} handelClick={handelClick} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
