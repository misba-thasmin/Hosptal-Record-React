import React from 'react'
import Header from './Header'

const AddPatient = () => {
  return (
    <div>
<Header />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control" />

                </div>
                <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label htmlFor="" className="form-label">Age</label>
<input type="text" className="form-control" />

                </div>
               <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Gender</label>
<select name="" id="" className="form-control">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
</select>

                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Illness</label>
<textarea name="" id="" className="form-control"></textarea>
                </div>
                <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Room No</label>
<input type="text" className="form-control" />

                </div>
                 <div className="col co-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Admission date</label>
<input type="date" name="" id="" className="form-control" />


                </div>
                <div className="col co-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-warning">Submit</button>


                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default AddPatient