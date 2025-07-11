import React from 'react'
import Header from './Header'

const RemovePatient = () => {
  return (
    <div>
      <Header />  
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 p-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Patient Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="d-grid gap-2">
                                    <button class="btn btn-danger" type="button">DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
  )
}

export default RemovePatient