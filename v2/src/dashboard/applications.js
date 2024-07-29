// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const Applications = () =>{

    // return(
    //     <div className='mainContainer'>
    //         <input
    //         className={"inputButton"}
    //         type="button"
    //         // onClick={onButtonClickSignUp}
    //         value={"Apply Now"}
    //         />

    //     </div>
    // )

// };

// export default Applications;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import "./dashboard.css"
    

const LeadDashboard = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <ul className="navbar-nav d-flex flex-column">
                    <li className="nav-item"><a className="nav-link" href="/dashboard">Dashboard</a></li>
                    <li className="nav-item"><a className="nav-link" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfPn1hyLZe9tfC8KfdicjaNDEuiyPm9Fw_-keaVZSh91YzdtA/viewform">Apply Now!</a></li>
                    <li className="nav-item"><a className="nav-link" href="/applications">Applications</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                </ul>
            </nav>
        <div>
            <input
            className={"inputButton"}
            type="button"
            // onClick={onButtonClickSignUp}
            value={"Apply Now"}
            />

        </div>
        </div>
        
    );
};

export default LeadDashboard;