import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./pages/Appointment";
import Appointment from "./pages/Appointment";
import { useState, createContext } from "react";
export const AppContext = createContext(null);

function App() {
  const [PatientDetails, setPatientDetails] = useState();
  // function handleSave(newCourse) {
  //   setPatientDetails([...PatientDetails, newPatientDetails]);
  // }
  return (
    <section className="section">
      <div className="App">
        <AppContext.Provider
          value={{
            // handleSave,
            PatientDetails,
            setPatientDetails,
          }}
        ></AppContext.Provider>
        <Appointment />
      </div>
    </section>
  );
}

export default App;
