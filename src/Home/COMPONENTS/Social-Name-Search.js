import $ from 'jquery'
import React, { useState } from "react";
import Search from '../../Search/Search';

export default function Social_Name_Search(props) {

    const [searchShow, setSearchShow] = useState(false)

    return (
        <div id="Social-Name-Search">
            <div id="Social">
                <span id="Instagram" onClick={() => {
                    window.location = 'https://instagram.com/lakshyamonga.io'
                }}>
                    <img src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Instagram.webp" />
                    <a>@lakshyamonga.io</a>
                </span>
                <span id="Twitter" onClick={() => {
                    window.location = 'https://twitter.com/Lakshya_Monga'
                }}>
                    <a>@Lakshya_Monga</a>
                    <img src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Twitter.webp" />
                </span>
            </div>

            <h1>Lakshya Pratap Monga</h1>

            <div id="search">
                <input type="search" id="Search" onClick={() => {
                    setSearchShow(true)
                    setTimeout(() => {
                        $('#searchwhole #search input').focus()

                        $('#searchwhole #back').click(() => {
                            setSearchShow(false)
                            $('#Social-Name-Search #search input').blur()
                        })
                    }, 1)
                }} />
                <i className="material-icons">search</i>
                <Search show={searchShow} />
            </div>
        </div>
    );
}
