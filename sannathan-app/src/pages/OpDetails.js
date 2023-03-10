import React, { useState } from 'react'
import { AppContext } from '../App';

function OpDetails({patients}) {
    console.log(patients);
  return (
    <div>
      <div className="row count">
                    <div className="col-sm-6">
                        <label for="fname">Reg.Count</label>
                      
                        <input className="reg-count" type="text" id="count" maxlength="4" size="4"/>
                      
                      </div>
                      <div className="col-sm-6">
                        <label for="fname">Checked Count</label>
                        <input className="check-count" type="text" id="count" maxlength="4" size="4"/>

                      </div>
                </div>
                <div className="row">
                    <h4> Register Patient Details</h4>
                    <div className="col-sm-md-4 tab">
                        <table className="table table-borderless ">
                            <thead className="table-light">
                              <tr>
                                
                                <th scope="col-1">PatientID</th>
                                <th scope="col-1">Name</th>
                              
                              </tr>
                            </thead>
                            <tbody className="table-group-divider">
                             {patients?.map((item)=>(
                               <tr key={item.id}>
                                
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                
                              </tr>
                             ))}
                             
                              {/* <tr>
                        
                                <td>Jacob</td>
                                <td>Thornton</td>
                              
                              </tr>
                              <tr>
                               
                               
                                <td>@twitter</td>
                                <td>Jacob</td>
                              </tr> */}
                            </tbody>
                          </table>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button className="btn btn-success view" type="button">View all</button>
                      </div>
                    
                </div>
    </div>
  )
}

export default OpDetails
