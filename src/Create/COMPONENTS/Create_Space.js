import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function Create_Space() {
  const [autosaveReceive, setAutosaveReceive] = useState({});

  useEffect(() => {
    fetch("/createa")
      .then((res) => res.json())
      .then((data) => {
        setAutosaveReceive(data[data.length - 1]);
        return data[data.length - 1];
      })
      .then((dr) => {
        $("#title").val(dr.Title);
        $("#content").html(dr.Content);
      });
  }, []);

  return (
    <form action="/upload" method="POST" id="titleandcontent">
      <div
        id="content"
        contentEditable={true}
        name="Content"
        placeholder="Content"
        onInput={() => {
          setTimeout(() => {
            $("#FakeContent").val($("#content").html());
          }, 1);
        }}
      ></div>
      <textarea name="Content" id="FakeContent" hidden></textarea>
      <input type="text" name="title" id="title" placeholder="Title" />
      <button>UPLOAD</button>
    </form>
  );
}
