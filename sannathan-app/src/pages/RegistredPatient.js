// import React from "react";
// import { useState, useEffect } from "react";
// // import { AppContext } from '../App';
// import validate from "./validate";


// function PatientDetails({ onSubmit, handelClick,patients }) {
 

//   // -----new form validation------>>>>
//   const initialvalues = {
//     name: "",
//     date: "",
//     age: "",
//     contact: "",
//     whatsappnumber: "",
//     address: "",
//   };
//   const [formValues, setFormValues] = useState(initialvalues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
  
//   const handleChange = (e) => {
    
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//     console.log(formValues);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setFormErrors(validate(formValues));
    
//   };
//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//     if (!formValues.name || !formValues.contact) return;
//     onSubmit({ id: Math.round(Math.random() * 999), name: formValues.name });
//     console.log("submit");
    
//   }, [formErrors]);


//   return (
//     <div>
//       {/* <pre>{JSON.stringify(formValues, undefined,2)}</pre> */}
//       <form className="row g-3" onSubmit={handleSubmit}>
//         <div className="col-6">
//           <label for="inputUserId" className="form-label"></label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputUserId"
//             placeholder={patients.name}
//           />
//         </div>
//         <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//           <button
//             className="btn btn-success"
//             type="submit"
//             onClick={handelClick}
//           >
//             Save
//           </button>
//         </div>

//         <div className="col-12">
//         <div className="col-12">
//           <label className="form-label">Date</label>
//           <input
//             type="date"
//             className="form-control"
//             name="date"
//             id="inputDate"
//             onLoad= 'getDate( )'
//             onChange={handleChange}
//             value={formValues.date}
//           />
        
//           <p className="valid">{formErrors.date}</p>
//         </div>
//           <label for="name" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             id="inputName"
//             value={formValues.name}
//             onChange={handleChange}
//             // required
//           />
//         </div>
//         <p className="valid">{formErrors.name}</p>
       

//         <div className="col-12">
//           <label for="inputAge" className="form-label">
//             Age
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="inputAge"
//             name="age"
//             value={formValues.age}
//             onChange={handleChange}
//           />
//         </div>
//         <p className="valid">{formErrors.age}</p>

//         <div className="col-6">
//           <label for="inputState" className="form-label">
//             Gender
//           </label>
//           <select id="inputGender" className="form-select">
//             <option selected>Choose...</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>
//         </div>
      
//         <div className="col-md-6">
//           <label for="inputPreference" className="form-label">
//             Preference
//           </label>
//           <select id="inputPreference" className="form-select">
//             <option selected>Choose...</option>
//             <option>...</option>
//           </select>
//         </div>
//         <div className="col-md-12">
//           <label for="phone" className="form-label">
//             Contact
//           </label>
//           <input
//             type="tel"
//             className="form-control"
//             id="phone"
//             name="contact"
//             value={formValues.contact}
//             onChange={handleChange}
//           />
//         </div>
//         <p className="valid">{formErrors.contact}</p>
      
//         <div className="col-md-12">
//           <label for="phone" className="form-label">
//             WhatsappNumber
//           </label>
//           <input
//             type="tel"
//             className="form-control"
//             id="phone"
//             name="whatsappnumber"
//             value={formValues.whatsappnumber}
//             onChange={handleChange}
//           />
//         </div>
//         <p className="valid">{formErrors.whatsappnumber}</p>

//         <div className="col-12">
//           <label for="inputAddress" className="form-label">
//             Address
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputAddress"
//             name="address"
//             value={formValues.address}
//             onChange={handleChange}
//           />
//         </div>
//         <p className="valid">{formErrors.address}</p>

//         <div className="d-grid gap-2">
//           <button className="btn btn-success" type="button">
//             Additional Details
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default PatientDetails;

