import React from 'react'

export default function validate(values) {
  
        const errors = {};
  
        if (!values.name) {
          errors.name = "Name is required!";
        }
        if (!values.date) {
          errors.date = "Date is required!";
        } 
        if (!values.age) {
          errors.age ="Age is required";
        }
        if (!values.contact) {
          errors.contact ="Contact number is required";
        } else if (values.contact.length !== 10) {
          errors.contact ="Invalid  required 10 digits";

        }
        if (!values.whatsappnumber) {
          errors.whatsappnumber ="whatsapp number is required";
        } else if (values.whatsappnumber.length !== 10) {
          errors.whatsappnumber ="Invalid required 10 digits";
        }
        if (!values.address) {
          errors.address ="Address is required"
        }
        return errors;
    
};
