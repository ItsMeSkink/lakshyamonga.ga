import React, { useState } from "react";

export function alignment() {
    return (
        <div id="alignment">
            <span
                class="material-icons"
                onClick={() => {
                    document.execCommand("justifyLeft");
                }}
            >
                format_align_left
            </span>
            <span
                class="material-icons"
                onClick={() => {
                    document.execCommand("justifyCenter");
                }}
            >
                format_align_center
            </span>
            <span
                class="material-icons"
                onClick={() => {
                    document.execCommand("justifyRight");
                }}
            >
                format_align_right
            </span>
        </div>
    );
}