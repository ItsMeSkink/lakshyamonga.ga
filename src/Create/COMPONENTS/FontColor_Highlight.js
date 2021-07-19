import React, { useState } from "react";
import $ from 'jquery'

export function FontColor() {
    return (
        <label htmlFor="fontColor" id="fontcolor">
            <h1>T</h1>
            <input
                type="color"
                name="fontColor"
                id="fontColor"
                onInput={() => {
                    $("#fontcolor h1").css("color", $("#fontColor").val());
                    document.execCommand("foreColor", false, $("#fontColor").val());
                }}
            />
        </label>
    );
}

export function Highlight() {
    return (
        <label htmlFor="hightlightColor" id="highlight">
            <h1>H</h1>
            <input
                type="color"
                name="hightlightColor"
                id="hightlightColor"
                onInput={() => {
                    $("#highlight h1").css(
                        "background-color",
                        $("#hightlightColor").val()
                    );
                    $("#highlight h1").css(
                        "border",
                        `1px solid ${$("#hightlightColor").val()}`
                    );

                    document.execCommand(
                        "hiliteColor",
                        false,
                        $("#hightlightColor").val()
                    );
                }}
            />
        </label>
    );
}