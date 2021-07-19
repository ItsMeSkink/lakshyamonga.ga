import React, { useEffect, useState } from "react";
import "./MainNavigation.scss";
import { Link } from "react-router-dom";
import $ from 'jquery'
import Search from "../Search/Search";

export default function MainNavigation() {
    useEffect(() => {

        setInterval(() => {


            if (window.location.pathname == '/') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #homeicon').css('color', 'white')
            }
            else if (window.location.pathname == '/articles') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #articleicon').css('color', 'white')
            }
            else if (window.location.pathname == '/shareideas') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #shareideasicon').css('color', 'white')
            }
            else if (window.location.pathname == '/signup') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #signupicon').css('color', 'white')
            }
            else if (window.location.pathname == '/friends') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #friendsicon').css('color', 'white')
            }
            else if (window.location.pathname == '/about') {
                $('#mainnavigation *').css('color', 'black')
                $('#mainnavigation #abouticon').css('color', 'white')
            }

        }, 1);
    }, window.location)

    const [showSearch, setShowSearch] = useState(false)



    return (
        <div id="mainnavigation">
            <Link
                className="material-icons"
                to="/"
                id="homeicon"
            >
                home
            </Link>
            <Link className="material-icons" to="/articles" id="articleicon">
                article
            </Link>
            <Link className="material-icons" to="/shareideas" id="shareideasicon">
                tips_and_updates
            </Link>
            <Link
                className="material-icons"
                style={{ fontSize: "60px", fontWeight: "bolder" }}
                to="signup"
                id="signupicon"
            >
                architecture
            </Link>
            <Link className="material-icons" to="/friends" id="friendsicon">
                people
            </Link>
            <Link className="material-icons" to="/about" id="abouticon">
                info
            </Link>

            <div id="search" onClick={
                () => {
                    setShowSearch(true)

                    setTimeout(() => {
                        $('#searchwhole #search input').focus()

                        $('#searchwhole #back').click(() => {
                            setShowSearch(false)
                            $('#mainnavigation #search input').blur()

                        })
                    }, 1)

                    setInterval(() => {

                        $('#seachresults').click(() => {
                            setShowSearch(false)
                        })
                    }, 100);

                }
            }>
                <input type="search" name="Search" id="Search" />
                <i className="material-icons">search</i>
                <Search show={showSearch} />
            </div>

        </div>
    );
}
