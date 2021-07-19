
import React, { useState, useEffect } from "react";
import "react-dom";
import Email from "../../Email/Email";
import $ from 'jquery'

export default function Contact(props) {
    const [modal, setModal] = useState(false);

    setTimeout(() => {

        $('#back').click(() => {
            setModal(false)
        })
    }, 2);


    return (
        <div id="contact">
            <span
                id="email"
                onClick={() => {
                    setModal(true);
                }}
            >
                <i className="material-icons">email</i>
                <h2>lakshyamonga.io@gmail.com</h2>
            </span>
            <Email EmailState={modal} />
            <span id="phone">
                <h2>+91 9810030316</h2>
                <i className="material-icons">phone </i>
            </span>
            {/* <Email EmailState={modal} /> */}
        </div>
    );
}
