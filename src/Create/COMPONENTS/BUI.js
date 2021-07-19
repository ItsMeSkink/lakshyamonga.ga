import React, { useState } from "react";

export function bui() {
    return (
        <div id="bui">
            <b
                onClick={() => {
                    document.execCommand("bold");
                }}
            >
                B
            </b>
            <u
                onClick={() => {
                    document.execCommand("underline");
                }}
            >
                U
            </u>
            <i
                onClick={() => {
                    document.execCommand("italic");
                }}
            >
                I
            </i>
        </div>
    );
}