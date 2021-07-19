import React, { useState } from "react";

let fontsize = 4;
export function DecreaseFontSize() {
    return (
        <button
            id="dfs"
            onClick={() => {
                if (fontsize > 1 || fontsize === 1) {
                    document.execCommand("fontsize", false, --fontsize - 1);
                }
            }}
        >
            <span>A</span>
            <i></i>
        </button>
    );
}

export function IncreaseFontSize() {
    return (
        <button
            id="ifs"
            onClick={() => {
                if (fontsize < 7 || fontsize === 7) {
                    document.execCommand("fontsize", false, fontsize++);
                }
            }}
        >
            <span>A</span>
            <i></i>
        </button>
    );
}

export function ManualFontSize() {
    return (
        <input
            type="number"
            name="ManualFontSize"
            id="ManualFontSize"
            max="7"
            min="1"
            value={fontsize}
        />
    );
}