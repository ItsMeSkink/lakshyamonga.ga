import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

export function Translate() {

    return (
        <div id="translate">
            <span className="material-icons-outlined">translate</span>
        </div>
    );
}

export function Dictate() {
    return (
        <div id="dictate">
            <span className="material-icons-outlined">mic</span>
        </div>
    );
}