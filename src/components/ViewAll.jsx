import React from 'react'
import Header from './Header'

const ViewAll = () => {
  return (
    <div>
        <Header />
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Patient name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Illness</th>
                                    <th scope="col">Doctor assigned</th>
                                    <th scope="col">Room number</th>
                                    <th scope="col">Admission date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>karthik</td>
                                    <td>28</td>
                                    <td>Male</td>
                                    <td>Cansor</td>
                                    <td>Dr. Neeraj</td>
                                    <td>A73</td>
                                    <td>6/6/2025</td>
                                </tr>
                                <tr>
                                    <td>Rahul</td>
                                    <td>42</td>
                                    <td>Male</td>
                                    <td>Fits</td>
                                    <td>Dr.Veena</td>
                                    <td>250</td>
                                    <td>18/9/2025</td>
                                </tr>
                                <tr>
                                    <td>Anu</td>
                                    <td>25</td>
                                    <td>Female</td>
                                    <td>Fever</td>
                                    <td>Dr. Vijay</td>
                                    <td>345</td>
                                    <td>13/1/2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewAll