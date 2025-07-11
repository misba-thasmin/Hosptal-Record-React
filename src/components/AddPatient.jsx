import React from 'react'
import Header from './Header'

const AddPatient = () => {
  return (
    <div>
<Header />
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Gender</label>
                 <select name="" id="" className="form-control">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                 </select>
                            
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Illness</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Doctor Assigned</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">Room Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <label htmlFor="" className="form-label">Admission Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-success" type="button">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddPatient