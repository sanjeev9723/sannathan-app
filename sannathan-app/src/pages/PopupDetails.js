import React from 'react'

function PopupDetails({patients}) {
  return (
    <div>
      <table className=" table">
  <thead>
    <tr>
      
      <th scope="col">PatientID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
  {patients.forEach((item) => (
    
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.contact}</td>
                </tr>
              ))}
   
  </tbody>
</table>

    </div>
  )
}

export default PopupDetails
