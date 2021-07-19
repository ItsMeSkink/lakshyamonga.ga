import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import "./Updates.scss";

export default function Update() {
  // localStorage.setItem("updateview", true);
  const lsupdate = JSON.parse(localStorage.getItem("updateview"));
  const [update, setUpdate] = useState(lsupdate);

  // const [lsUpdate, setLsUpdate] = useState(false)

  return (
    <div>
      <Modal isOpen={update}>
        <div id="updatescreen">
          <i
            className="material-icons"
            onClick={() => {
              // localStorage.setItem("updateview", false);
              setUpdate(localStorage.setItem("updateview", false));
            }}
          >
            cancel
          </i>

          <div id="updates">
            <h1>v2.2.0</h1>
            <div id="main">
              <div id="updates-now">
                <h2>What's New!</h2>
                <ol>
                  <li>Email and Phone</li>
                  <li>Search (both on home and Navigation Bar below)</li>
                </ol>
              </div>
              <div id="updates-upcoming">
                <h2>What's Upcoming!</h2>
                <ol>
                  <li>A Fun Podcast</li>
                  <li>Some insignificant updates</li>
                  <li>Now, it would be a time of <br /> writting Aritcles and not code.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
