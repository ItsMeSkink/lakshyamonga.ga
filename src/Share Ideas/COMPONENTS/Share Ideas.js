import React, { useEffect, useState } from "react";
import "../CSS/Share Ideas.scss";
import $ from "jquery";
import "jqueryui";

export default function Share_Ideas() {
  function deletion() {
    setInterval(() => {
      $(".idea").mousedown((e) => {
        $(".idea").css("z-index", "1");
        $(e.target).closest(".idea").css("z-index", "500");
      });
    }, 1);

    $(".idea #back").click((e) => {
      const clicked = $(e.target).closest(".idea");
      const ideas = JSON.parse(localStorage.getItem("ideas"));

      function delet(item) {
        return item != clicked.children("textarea").val();
      }

      const deletedvalues = ideas.filter(delet);
      localStorage.setItem("ideas", JSON.stringify(deletedvalues));

      clicked.remove();
    });

    $("#draghere").droppable({
      hoverClass: "hovering",
      activeClass: "activated",
      tolerance: "touch",
      drop: function (event, ui) {
        $(this).addClass("dropped").find("div").html("Dropped with a touch!");
        const dropped = $(event.originalEvent.originalEvent.path[0]).closest(
          ".idea"
        );
        const droppedvalue = $(dropped[0]).children("textarea").val();

        setTimeout(() => {
          dropped.remove();
        }, 2);
        // setTimeout(() => {
        const ideas = JSON.parse(localStorage.getItem("ideas"));
        const indexdelete = ideas.indexOf(droppedvalue);

        fetch("/ideashare", {
          method: "POST",
          body: droppedvalue,
        });
        ideas[indexdelete] = "";
        localStorage.setItem("ideas", JSON.stringify(ideas));
      },
    });
  }
  // ----------------------------------------------------

  if (!localStorage.getItem("ideas")) {
    localStorage.setItem("ideas", JSON.stringify([""]));
  }

  useEffect(() => {
    if (window.innerWidth > 1400) {
      setInterval(() => {
        let ideas = [];
        document.querySelectorAll("textarea").forEach((item, index) => {
          ideas.push($(item).val());

          item.addEventListener("input", (e) => {
            ideas[index] = $(item).val();
            localStorage.setItem("ideas", JSON.stringify(ideas));
          });
        });
      }, 1);
      if (localStorage.getItem("ideas")) {
        const ideas = JSON.parse(localStorage.getItem("ideas"));

        ideas.forEach((idea, index) => {
          if (idea != "") {
            const newideaelement = `<div class="idea ui-widget-content" id="idea${
              index + 1
            }"  style="top:${
              document.getElementsByClassName("idea").length * 30 + 50
            }px; left:${
              document.getElementsByClassName("idea").length * 30 + 50
            }px;">
                    <div id="number-buttons">
                    <span>Idea ${index + 1}</span>
                    <div>
                    <div id="back"></div>
                    <div id="shortlist"></div>
                    </div>
                    </div>
                    <textarea name="Idea" id="Idea${
                      index + 1
                    }" cols="30" rows="10" >${idea}</textarea >
                    </div > `;

            const newideadiv = document.createElement("div");
            newideadiv.innerHTML = newideaelement;

            document.getElementById("shareideas").appendChild(newideadiv);
            $(".idea").draggable({
              containment: "#shareideas",
            });
          }

          deletion();
        });
      }

      $(window).dblclick(() => {
        if ($(".idea").length < 5) {
          const newideaelement = `<div class="idea ui-widget-content" id="idea${
            $(".idea").length + 1
          }"
                    style="top:${
                      document.getElementsByClassName("idea").length * 30 + 50
                    }px; left:${
            document.getElementsByClassName("idea").length * 30 + 50
          }px;"
                    >
                    <div id="number-buttons">
                    <span>Idea ${$(".idea").length + 1}</span>
                    <div>
                    <div id="back"></div>
                    <div id="shortlist"></div>
                    </div>
                    </div>
                    <textarea name="Idea" id="Idea${
                      $(".idea").length + 1
                    }" cols="30" rows="10" >${
            JSON.parse(localStorage.getItem("ideas"))[
              document.getElementsByClassName("idea").length
            ]
          }</textarea >
                    </div > `;
          // ${JSON.parse(localStorage.getItem('ideas'))[$('.idea').length]}

          const newideadiv = document.createElement("div");
          newideadiv.innerHTML = newideaelement;

          document.getElementById("shareideas").appendChild(newideadiv);
          $(".idea").draggable({
            containment: "#shareideas",
          });

          $(".idea").css("z-index", "1");
          $(".idea").last().css("z-index", "1000");
          if ($(".idea textarea").last().val() === "undefined") {
            const clicked = $(".idea textarea").last().val("");
          }

          deletion();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1400) {
      // setInterval(() => {
      $("*").on("input", () => {
        let ideas = [];
        document.querySelectorAll("textarea").forEach((item, index) => {
          ideas.push($(item).val());

          item.addEventListener("input", (e) => {
            ideas[index] = $(item).val();
            localStorage.setItem("ideas", JSON.stringify(ideas));
          });
        });
      });
      // }, 1);

      // ----------------------------

      if (localStorage.getItem("ideas")) {
        const ideas = JSON.parse(localStorage.getItem("ideas"));

        ideas.forEach((idea, index) => {
          if (idea != "") {
            const newideaelement = `<div class="idea ui-widget-content" id="idea${
              index + 1
            }">
                    <div id="number-buttons">
                    <span>Idea ${index + 1}</span>
                    <div>
                    <div id="back"></div>
                    <div id="shortlist"></div>
                    </div>
                    </div>
                    <textarea name="Idea" id="Idea${
                      index + 1
                    }" cols="30" rows="10" >${idea}</textarea >
                    </div > `;

            const newideadiv = document.createElement("div");
            newideadiv.innerHTML = newideaelement;

            document.getElementById("shareideas").appendChild(newideadiv);
          }

          deletion();
        });
      }

      function shortlist() {
        $(".idea #shortlist").click((e) => {
          const shortlisted = $(e.target).closest(".idea");
          shortlisted.addClass("shortlisted");

          let slarray = [];

          document
            .querySelectorAll(".shortlisted textarea")
            .forEach((item, index) => {
              const shortlistedvalue = $(item).val();

              slarray.push(shortlistedvalue);

              item.addEventListener("input", (e1) => {
                slarray[index] = shortlistedvalue;
              });

              $("#add-submit span").click(() => {

                fetch("/ideashare", {
                  method: "POST",
                  body: JSON.stringify(slarray),
                });

                setTimeout(() => {
                  // now comes the removal from localStorage part.
                  const ls = JSON.parse(localStorage.getItem("ideas"));

                  const slindex = ls.indexOf(shortlistedvalue);

                  function filtered(item) {
                    return item != shortlistedvalue;
                  }

                  const filteredvalues = ls.filter(filtered);
                  localStorage.setItem(
                    "ideas",
                    JSON.stringify(ls.filter(filtered))
                  );

                  $(".shortlisted").remove();
                }, 2);
              });
            });
        });
      }

      $("#add-submit b").click(() => {
        if ($(".idea").length < 5) {
          const newideaelement = `<div class="idea ui-widget-content" id="idea${
            $(".idea").length + 1
          }">
                    <div id="number-buttons">
                    <span>Idea ${$(".idea").length + 1}</span>
                    <div>
                    <div id="back"></div>
                    <div id="shortlist"></div>
                    </div>
                    </div>
                    <textarea name="Idea" id="Idea${
                      $(".idea").length + 1
                    }" cols="30" rows="10" >${
            JSON.parse(localStorage.getItem("ideas"))[
              document.getElementsByClassName("idea").length
            ]
          }</textarea >
                    </div > `;

          const newideadiv = document.createElement("div");
          newideadiv.innerHTML = newideaelement;

          document.getElementById("shareideas").appendChild(newideadiv);

          if ($(".idea textarea").last().val() === "undefined") {
            const clicked = $(".idea textarea").last().val("");
          }

          shortlist();
          deletion();
        }
      });

      shortlist();
    }
  }, []);

  return (
    <div id="shareideas">
      <h1 id="major">Double Click for New Idea (5 Maximum)</h1>
      <h1 id="minor">Click "+" to add idea (5 Maximum)</h1>
      <div id="draghere">Drop Your Idea here</div>
      <div id="add-submit">
        <div>
          <b>+</b> <span>Click here to Submit the selected ones</span>
        </div>
      </div>
    </div>
  );
}
