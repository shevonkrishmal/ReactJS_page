import React from 'react'

export default function header() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img
                                src="../images/logo.png"
                                height="30"
                                alt=""
                                loading="lazy"
                            />
                        </a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Mobile store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Laptop Store</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                        </ul>

                    </div>



                    <div className="d-flex align-items-center">

                        <a className="text-reset me-3" href="#">
                            <i className="fas fa-shopping-cart" ></i>
                        </a>


                        <a
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>


                        <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                className="rounded-circle"
                                height="25"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </div>
    )
}
