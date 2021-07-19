import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Email.scss";
import $ from "jquery";

export default function Email(props) {
  const [emailState, setEmailState] = useState(props.EmailState);

  function email() {
    const Name = document.getElementById("Name").value;
    const Content = document.getElementById("Content").value;

    const emailcontent = {
      Name: Name,
      Content: Content,
    };

    fetch("/emailto", {
      method: "POST",
      body: JSON.stringify(emailcontent),
    }).then((result) => {return result});

  }

  return (
    <div>
      <Modal isOpen={
        props.EmailState
      } ariaHideApp={false}>
        <div id="emailwhole">
          <i
            className="material-icons"
            id="back"
            onClick={() => {
              setEmailState(false);
            }}
          >
            cancel
          </i>
          <form
            id="email"
            onSubmit={(e) => {
              e.preventDefault();
              email();
            }}
          >
            <input
              type="text"
              name="Name"
              id="Name"
              placeholder="Your Name"
              required
            />
            <textarea
              name="Content"
              id="Content"
              placeholder="What do you want to email about?"
            ></textarea>
            <button
              onClick={() => {
                $("form button").addClass("submitted");
                $('#emailwhole #back').click()
              }}

            >
              {" "}
              <i className="material-icons">email</i> Email
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
