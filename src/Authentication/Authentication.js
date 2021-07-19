import "./Authentication.scss";

import React from "react";

export default function Authentication() {
  return (
    <div id="authentication">
      <input
        type="password"
        name="Password"
        id="Password"
        placeholder="Enter Password"
      />
      <button>Authenticate</button>
    </div>
  );
}
