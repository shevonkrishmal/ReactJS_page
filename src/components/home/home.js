import React from 'react';




export default function home() {
    return (
        <div>
            <div className="row">

                <div className="col-md-6 offset-md-3">
                    <h2 className="header-1">ROG - Republic of Gamers</h2>
                    <p className="para-1">
                        ROG was founded with the goal of creating the world’s most powerful and versatile gaming laptops in the industry. Our premium devices elevate gaming experiences with best-in-className displays, top tier graphics, and innovative cooling solutions that take performance to new heights.
                    </p>
                    <input className="form-control" type="text" placeholder="Readonly input here..." aria-label="readonly input example" />


                    <br></br>
                    <div className="d-grid gap-2 col-4 mx-auto">
                        <button type="button" className="btn btn-primary">Search</button>


                    </div>

                </div>

            </div>

            <br></br>
            <hr></hr>
            <br></br>

            <div className="row">
                <div className='container-sm'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="../images/p3.jpg" className="d-block w-100" alt="p3" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/p1.jpg" className="d-block w-100" alt="p1" />
                            </div>
                            <div className="carousel-item">
                                <img src="../images/p2.jpg" className="d-block w-100" alt="p2" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <div className="row">
                <div className="col-sm-5 col-md-6">
                    <h3>About Us</h3>
                    <p>
                        ASUS is a Taiwan-based, multinational computer hardware and consumer electronics company that was established in 1989. Dedicated to creating products for today’s and tomorrow’s smart life, ASUS is the world’s No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor.
                    </p>
                    <p>
                        ASUS became widely known in North America when it revolutionized the PC industry in 2007 with its Eee PC™. Today, the company is pioneering new mobile trends with the ASUS ZenFone™ series, and it is rapidly developing virtual and augmented reality products as well as IOT devices and robotics technologies. Most recently, ASUS introduced Zenbo, a smart home robot designed to provide assistance, entertainment, and companionship to families.
                    </p>
                    <button type="button" className="btn btn-primary btn-sm">More information</button>

                </div>
                <br></br>

                <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                    <hr></hr>
                    <img src="../images/p4.jpg" className="d-block w-100" alt="p2" />
                </div>
            </div>
            <br></br><br></br>

        </div>

    )
}
