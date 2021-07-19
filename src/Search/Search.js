import Result_Tempate from "./COMPONENTS/Result_Tempate";
import Modal from "react-modal";
import "./CSS/Search.scss";
import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function Search(props) {
  $(window).keydown((e) => {
    if (e.key === "Tab") {
      $("#searchwhole #search #Search").focus();
    }
  });

  const [searchContent, setSearchContent] = useState([]);

  useEffect(() => {
    fetch("/articlesa")
      .then((res) => res.json())
      .then((data) => {
        setSearchContent(data);
      });
  }, []);

  let [searchResults, setsearchResults] = useState([]);
  let [showResults, SetshowResults] = useState(false);
  let [dummyArray, setDummyArray] = useState([]);
  let [showSearch, setShowSearch] = useState(false);

  function afterOpen() {
    function searchfunction() {
      let searchval = document.getElementsByName("Search")[1].value;

      searchContent.map((search) => {
        const content = search.Content.replace(/(<([^>]+)>)/g, " ").replace(
          /\&nbsp;/g,
          " "
        );

        var re = new RegExp(searchval, "i");
        var extract = re.exec(content);

        if (extract !== null) {
          var display =
            "..." +
            extract.input.slice(extract.index - 40, extract.index + 300) +
            "...";

          dummyArray.push({
            Content: display.replace(extract[0], `<u>${extract[0]}</u>`),
            Title: search.Title,
          });
        }
      });

      SetshowResults(true);

      setsearchResults(dummyArray);
      setTimeout(() => {
        dummyArray = [];
      }, 1);
    }

    $("#searchwhole #search i").click(() => {
      searchfunction();
    });

    $("input#Search").on("input", (e) => {
      searchfunction();
    });
  }

  return (
    <div>
      <Modal isOpen={props.show} onAfterOpen={afterOpen}>
        <div id="searchwhole">
          <i className="material-icons" id="back">
            cancel
          </i>
          <div id="search">
            <div id="searchinput">
              <input type="search" name="Search" id="Search" />
              <i className="material-icons">search</i>
            </div>
            <div id="seachresults">
              {showResults === true && (
                <>
                  {searchResults.map((item) => {
                    return (
                      <Result_Tempate
                        Title={item.Title}
                        Content={item.Content}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
