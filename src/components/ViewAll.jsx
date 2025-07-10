import React from 'react'
import Header from './Header'

const ViewAll = () => {
  return (
    <div>
        <Header />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">


<table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">DR.Name</th>
      <th scope="col">Branch</th>
      <th scope="col">Service</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Dr. Anjali Sharma</td>
      <td>Cardiology</td>
      <td>Heart disease diagnosis & treatment</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>DR.Sreelakshmi</td>
      <td>Neurology</td>
      <td>Brain & nervous system specialist</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Dr. Priya Nair</td>
      <td>Pediatrics</td>
      <td>Child healthcare & vaccination</td>
    </tr>
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default ViewAll