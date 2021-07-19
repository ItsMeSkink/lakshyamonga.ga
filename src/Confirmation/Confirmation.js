import React from 'react'
import Options_Inputs from './COMPONENTS/Options_Inputs'
import Autosaved_Display from './COMPONENTS/Autosaved_Display'
import "./CSS/Confirmation.scss"

export default function Confirmation() {
    return (
        <div id="confirmation" >
            <Options_Inputs />
            <Autosaved_Display />
        </div>
    )
}
