import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

export function Orderedlist() {
    const [list, setList] = useState(false);
    setTimeout(() => {
        $('.orderedlist ol').click(() => {
            setList(false)
        })
    }, 1);
    return (
        <div id="orderedlists">
            <span
                id="normalol"
                className="material-icons"
                onClick={() => {
                    setList(true);
                }}
            >
                format_list_numbered
            </span>

            <Popover
                id="otheruls"
                open={list}
                anchorEl={document.getElementById("orderedlists")}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                onClose={() => {
                    setList(false);
                }}
                classes={{
                    paper: "orderedlist",
                }}
                style={{ borderRadius: "20px", background: "transparent" }}
            >
                <ol
                    id="123ol"
                    style={{
                        lineHeight: "25px",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertOrderedList')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ol>
                <ol
                    id="abcol"
                    style={{
                        lineHeight: "25px",
                        listStyle: "lower-alpha",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertOrderedList')
                        const ol = $(window.getSelection().anchorNode).closest('ol')
                        ol.css('list-style-type', 'lower-alpha')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ol>
                <ol
                    id="iol"
                    style={{
                        lineHeight: "25px",
                        listStyle: "lower-roman",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertOrderedList')
                        const ol = $(window.getSelection().anchorNode).closest('ol')
                        ol.css('list-style-type', 'lower-roman')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ol>
                <ol
                    id="ABCol"
                    style={{
                        lineHeight: "24px",
                        listStyle: "lower-greek",
                        marginLeft: "-10px",
                        color: "white",
                        marginBottom: "0px",
                    }}
                    onClick={() => {
                        document.execCommand('insertOrderedList')
                        const ol = $(window.getSelection().anchorNode).closest('ol')
                        ol.css('list-style-type', 'lower-greek  ')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ol>
            </Popover>
        </div>
    );
}