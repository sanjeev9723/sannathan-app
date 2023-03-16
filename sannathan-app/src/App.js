import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./pages/Appointment";
import Appointment from "./pages/Appointment";
import { useState, createContext } from "react";
import RegistredPatient from "./pages/RegistredPatient";
export const AppContext = createContext(null);

function App() {
  // const [PatientDetails, setPatientDetails] = useState();
  // function handleSave(newCourse) {
  //   setPatientDetails([...PatientDetails, newPatientDetails]);
  // }
  return (<div className="container-main">
    <section className="section">
      <div className="App">
        <AppContext.Provider
          value={{
            // handleSave,
            // PatientDetails,
            // setPatientDetails,
          }}
        >
        <Appointment />
     
        </AppContext.Provider>
      </div>
    </section>
    </div>
  );
}

export default App;
