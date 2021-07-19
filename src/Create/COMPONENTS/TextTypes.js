import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";


export function TextTypes() {
    const [texttype, setTexttype] = useState(false);

    setTimeout(() => {

        $('.texttypes *').click(() => {
            setTexttype(false)
        })
    }, 1);

    function defaulttext() {
        setTimeout(() => {


            $('#content').focus()
            $('#content').keydown((e) => {
                if (e.key === 'Enter') {
                    const bold = document.queryCommandState('bold')
                    const italic = document.queryCommandState('italic')
                    const underline = document.queryCommandState('underline')

                    document.execCommand('fontSize', false, 3)
                    if (bold === true) {
                        document.execCommand('bold')
                    }
                    if (underline === true) {
                        document.execCommand('underline', false, true)
                    }
                    if (italic === true) {
                        document.execCommand('italic', false, false)
                    }

                }
            })
        }, 100);
    }
    return (
        <div id="texttypes">
            <span
                id="heading"
                onClick={() => {
                    setTexttype(true);
                    $(".MuiPaper-root").css("background-color", "yellow");
                }}
            >
                <u>
                    {" "}
                    <b>Heading</b>{" "}
                </u>{" "}
                <i>&#9660;</i>
            </span>

            <Popover
                id="texttypesdropdown"
                anchorEl={document.getElementById("texttypes")}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                open={texttype}
                onClose={() => {
                    setTexttype(false);
                }}
                classes={{
                    paper: "texttypes",
                }}
            >
                <div
                    id="heading"
                    style={{
                        fontSize: '60px'
                    }}
                    onClick={() => {
                        document.execCommand('fontSize', false, 6)
                        document.execCommand('underline')
                        document.execCommand('bold')

                        defaulttext()

                    }}
                >
                    <u>
                        <b>Heading</b>
                    </u>
                </div>
                <h2
                    onClick={() => {
                        document.execCommand('fontSize', false, 5)
                        defaulttext()

                    }}
                >Sub-Heading 1</h2>
                <h3
                    onClick={() => {
                        document.execCommand('fontSize', false, 4)
                        document.execCommand('underline')
                        defaulttext()

                    }}
                >
                    <i>Sub-Heading 2</i>
                </h3>
                <p
                    onClick={() => {
                        document.execCommand('fontSize', false, 3)
                        document.execCommand('italic')
                        setTimeout(() => {
                            const font = $(window.getSelection().anchorNode).closest('i')
                            font.addClass('quote')
                            defaulttext()
                        }, 1);

                    }}
                >
                    <i>"Statement"</i>
                </p>
            </Popover>
        </div>
    );
}