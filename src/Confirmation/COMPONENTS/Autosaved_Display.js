import React, { useEffect, useState } from "react";
import $ from "jquery";

export default function Autosaved_Display() {
  useEffect(() => {
    fetch("/createa")
      .then((res) => res.json())
      .then((data) => {
        return data[data.length - 1];
      })
      .then((dr) => {
        $("#titlead").html(dr.Title);

        if (dr.Content === "") {
          $("#contentad").html("You haven't written anything in Content.");
        } else {
          $("#contentad").html(dr.Content);
        }
      });
  }, []);

  return (
    <div id="autosavedDisplay">
      <h1 id="titlead"></h1>
      <div id="contentad"></div>
      <button
        onClick={() => {
          if ($("img#thumbnailoi")[0] !== undefined) {
            let labelarray = [];

            document.querySelectorAll(".Labels").forEach((item, index) => {
              labelarray.push($(item).val());

              item.addEventListener("input", (e) => {
                labelarray[index] = $(item).val();
              });
            });
            const thumbnail = $(" img#thumbnailoi")[0].currentSrc;
            const finalarray = {
              Thumbnail: thumbnail,
              Labels: labelarray,
            };

            fetch("/finalpost", {
              method: "POST",
              body: JSON.stringify(finalarray),
            });

            setTimeout(() => {
              window.location = "/articles";
            }, 1);
          } else {
            alert("CHOSE A THUMBNAIL!!");
          }
        }}
      >
        POST
      </button>
    </div>
  );
}
