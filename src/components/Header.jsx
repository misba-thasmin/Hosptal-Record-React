import React from 'react'
import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Hospital App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="http://localhost:3001/Home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="http://localhost:3001/#">Add Patient</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="http://localhost:3001/Search">Search Patient</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="http://localhost:3001/Remove">Delete Patient</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="http://localhost:3001/View">View</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </div>
  )
}

export default Header