import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";


export function Hyperlink() {
    const [hyperlink, setHyperlink] = useState(false);
    const [url, setUrl] = useState("");
    return (
        <div id="hyperlink">
            <span
                className="material-icons"
                onClick={(e) => {
                    const c = $("#hyperlink span").hasClass("active");
                    if (c === false) {
                        setHyperlink(true);
                        setTimeout(() => {
                            $(".url input").focus();
                        }, 100);
                    }
                    else if (c === true) {
                        setTimeout(() => {
                            $('#hyperlink span').removeClass('active')
                            document.execCommand('createLink', false, url)
                            $("#content a").attr("contenteditable", "false");
                        }, 1);
                    }
                }}
            >
                link
            </span>

            <Popover
                id="hyperlinkpopover"
                open={hyperlink}
                anchorEl={document.getElementById("hyperlink")}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                onClose={() => {
                    setHyperlink(false);
                    if (url !== "") {
                        $("#hyperlink span").addClass("active");
                        setInterval(() => {
                            $("#content").focus();
                        }, 100);
                    }
                }}
                classes={{
                    paper: "url",
                }}
                style={{ borderRadius: "20px", top: "5px", background: "transparent" }}
            >
                <input
                    type="url"
                    name="url"
                    id="url"
                    style={{
                        fontSize: "30px",
                        borderRadius: "10px",
                        padding: "5px 10px",
                    }}
                    placeholder="URL Here"
                    onInput={() => {
                        setUrl($("#url").val());
                        setInterval(() => { }, 1);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setHyperlink(false);
                            if (url !== "") {
                                $("#hyperlink span").addClass("active");
                                setInterval(() => {
                                    $("#content").focus();
                                }, 100);
                            }
                        }
                    }}
                />
            </Popover>
        </div>
    );
}