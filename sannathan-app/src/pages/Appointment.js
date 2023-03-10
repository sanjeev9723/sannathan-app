import React, { useState } from "react";
import "./appointment.css";
import PatientDetails from "./PatientDetails";
import OpDetails from "./OpDetails";
const Appointment = () => {
  const [patients, setPatients] = useState([]);
  const onSubmit = (data) => {
    const UpdatedPatients = JSON.parse(JSON.stringify(patients));
    UpdatedPatients.push(data);
    setPatients(UpdatedPatients);
  };
  console.log(patients);
    const [count, setCount] = useState(0);

    function handelClick() {
     (setCount(count + 1) )
   }

  return (
    <section className="section">
      <div className="grid-layouts container">
        <div className="row">
          {/* OP-Details */}
          <div className="col-sm-6 bg ">
            <div className="col-sm-md-6 op">
              <h3>OP DETAILS</h3>
            </div>

            <OpDetails count={count} patients={patients}  />
          </div>

          {/* Patient-details */}
          <div className="col-sm-6 bg">
            <div className="nav-head">SANNATHAN JEEVAN</div>

            <PatientDetails handelClick={handelClick} onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
