import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

export function FontFamily() {
    return (
        <select
            name="fontfamily"
            id="fontfamily"
            onClick={() => {
                let fontfamily = $("#fontfamily").val();
                document.execCommand("fontName", true, fontfamily);
            }}
        >
            <option value="Cambria">Cambria</option>
            <option value="Arial">Arial</option>
            <option value="Cursive">Cursive</option>
            <option value="Garamond">Garamond</option>
            <option value="Sans Serif">Sans Serif</option>
        </select>
    );
}