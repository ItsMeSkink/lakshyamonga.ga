import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

export function Unorderedlist() {
    const [list, setList] = useState(false);

    setTimeout(() => {
        $('.unorderedlist ul').click(() => {
            setList(false)
        })
    }, 1);
    return (
        <div id="unorderedlists">
            <span
                id="normalul"
                className="material-icons"
                onClick={() => {
                    setList(true);
                }}
                onDoubleClick={() => {
                    document.execCommand('insertUnorderedList')
                }}
            >
                format_list_bulleted
            </span>

            <Popover
                id="otheruls"
                open={list}
                anchorEl={document.getElementById("unorderedlists")}
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
                    $('#normalul').removeClass('active')
                }}
                style={{ borderRadius: "20px", background: "transparent" }}
                classes={{
                    paper: "unorderedlist",
                }}
            >
                <ul
                    id="normalul"
                    style={{
                        lineHeight: "18px",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertUnorderedList')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ul>
                <ul
                    id="squareul"
                    style={{
                        lineHeight: "18px",
                        listStyle: "square",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertUnorderedList')
                        const ul = $(window.getSelection().anchorNode).closest('ul')
                        ul.css('list-style-type', 'square')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ul>
                <ul
                    id="cirlceul"
                    style={{
                        lineHeight: "18px",
                        listStyle: "circle",
                        color: "white",
                        marginLeft: "-10px",
                    }}
                    onClick={() => {
                        document.execCommand('insertUnorderedList')
                        const ul = $(window.getSelection().anchorNode).closest('ul')
                        ul.css('list-style-type', 'circle')
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ul>
                <ul
                    id="triangleul"
                    style={{
                        lineHeight: "24px",
                        listStyleImage:
                            "url(https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Create_Icons/Custom%20Triangle%20UL.png?raw=true)",
                        color: "black",
                        marginLeft: "-10px",
                        marginBottom: "0px",
                    }}
                    onClick={() => {
                        document.execCommand('insertUnorderedList')
                        const ul = $(window.getSelection().anchorNode).closest('ul')
                        ul.css('list-style-image', "url(https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Create_Icons/Custom%20Triangle%20UL.png?raw=true)")
                    }}
                >
                    <li>━━</li>
                    <li>━━</li>
                    <li>━━</li>
                </ul>
            </Popover>
        </div >
    );
}