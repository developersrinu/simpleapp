import React, { useState } from "react";
import './nav.css';
import { Link } from "react-router-dom";


export default function Nav() {

    return (
        <>
            <div className="nav">
                <h1>Dictionary App</h1>
                <div className="link">


                    <Link to='/'>Home</Link>
                    <Link to='/history'>History</Link>
                </div>
            </div>


        </>
    );
}
