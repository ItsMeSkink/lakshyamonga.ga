import React, {
    useEffect, useState
} from 'react'
import $ from 'jquery'
import Create_Space from './COMPONENTS/Create_Space'
import Text_Functions from './COMPONENTS/Text_Functions'
import "./CSS/Create.scss"
import Authentication from '../Authentication/Authentication'

export default function Create() {

    const [authentication, setAuthentication] = useState(false)

    function authenticate() {
        const password = $('#Password').val()

        fetch('/authenticate', {
            method: 'POST',
            body: password
        }).then(res => res.json()).then((res1) => {
            setAuthentication(res1)


            if (res1 === false) {
                $('#Password').css('border', '10px solid red')
            }
            else if (res1 === true) {
                function inputs() {
                    const content = $('#content').html()
                    const title = $('#title').val()

                    fetch('/autosave', {
                        method: 'POST',
                        body: JSON.stringify({
                            Title: title,
                            Content: content
                        })
                    })
                }
                $('#content').on('input', () => {
                    inputs()
                })
                $('#title').on('input', () => {
                    inputs()
                })
            }
        })

    }
    useEffect(() => {


        $('#authentication button').click(() => {
            authenticate()
        })
        $('#Password').keydown((e) => {
            if (e.key === 'Enter') {
                authenticate()
            }
        })

        // ----------------------------------------------------------------

    }, [])

    return (
        <>
            {authentication === true ?
                (<div id="create">
                    <Create_Space />
                    <Text_Functions />
                </div>) : <Authentication />
            }
        </>
    )
}
