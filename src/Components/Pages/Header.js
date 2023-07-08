import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
  return (<section>
    <div className="container">
    <div className="container-fluid">
        <div className="row mt-2">
            <div className="col-4">
                <img src="./Images/logo.webp" alt="logo" />
            </div>
            <div className="col-8">
            <nav class="navbar">
                <div class="container-fluid text1">
                    <h5>Courses</h5>
                    <h5>Live Classes</h5>
                    <h5>Practice</h5>
                    <h5>Resource</h5>
                    <h5>Our Product</h5>
                </div>
            </nav>
        </div>    
        </div>
    </div>
    </div>
    <div className="rectangle mt-1">
    <div>
        <div>
            <img src="./Images/Header.webp" alt="container" style={{width: "80%", height: "25vh"}} />
        </div>   
    </div>
    </div>
    <div className='container-fluid'>
    <div className="row">
        <div>
            <nav class="navbar navbar-expand-lg">
                    <div class="collapse navbar-collapse justify-content-center align-item-center" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item text">
                               <Link to="/#" class="nav-link active" aria-current="page">All</Link>
                            </li>
                            <li class="nav-item text">
                                <Link class="nav-link" to="/full-stack-development">Full Stack Development</Link>
                            </li>
                            <li class="nav-item text">
                            <Link class="nav-link" to="/data-science">Data Science</Link>
                            </li>
                            <li class="nav-item text">
                            <Link class="nav-link" to="/cyber-security">Cyber Security</Link>
                            </li>
                            <li class="nav-item text">
                            <Link class="nav-link" to="/career">Career</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</section>
  );
}
