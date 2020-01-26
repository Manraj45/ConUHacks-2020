import React from 'react'

const Patients = ({ patients }) => {
  return (
    <div>
      <center><h1>Patients List</h1></center>
      {patients.map((patient) => (
        <div class="card">
           <div class="card-body">
              <h5 class="card-title">{patient.resource.name[0].given}</h5>
            </div>
        </div>
        ))}
    </div>
  )
};

export default Patients