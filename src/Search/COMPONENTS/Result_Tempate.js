import React from "react";
import Modal from "react-modal";
import "../CSS/Result_Template.scss";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Result_Tempate(props) {
  return (
    <Link
      to={
        "/articles/" +
        props.Title.toString()
          .toLowerCase()
          .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
          .replace(/\s/g, "")
      }
      id="searchresult"
    >
      <p dangerouslySetInnerHTML={{__html: props.Content}}>
      </p>
      <h3>{props.Title}</h3>
    </Link>
  );
}
