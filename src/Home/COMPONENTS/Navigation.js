import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <div id="Navigation">
            <div id="Home-Articles-Suggestions">
                <span>
                    <h1>
                        <u>Home</u> - You are Here
                    </h1>
                    <Link className="material-icons" to="/">
                        home
                    </Link>
                </span>
                <span>
                    <h1>
                        {" "}
                        <u>Articles</u> - This is where you have to Go!
                    </h1>
                    <Link to="/articles" className="material-icons">
                        article
                    </Link>
                </span>
                <span>
                    <h1>
                        {" "}
                        <u>Suggestions</u> -This is where you and me can Suggest other
                        Texts!
                    </h1>
                    <Link className="material-icons" to="/shareideas">
                        tips_and_updates
                    </Link>
                </span>
            </div>
            <div id="MYO-Friends-About">
                <span>
                    <Link
                        className="material-icons"
                        style={{ fontSize: "60px", fontWeight: "bolder" }}
                        to="signup"
                    >
                        architecture
                    </Link>
                    <h1>
                        {" "}
                        <u>Build</u> Your Own Blog
                    </h1>
                </span>
                <span>
                    <Link className="material-icons" to="/friends">
                        people
                    </Link>
                    <h1>
                        {" "}
                        <u>Friends</u> -Others who have joined
                    </h1>
                </span>
                <span>
                    <Link className="material-icons" to="/about">
                        info
                    </Link>
                    <h1>
                        Know More <u>About</u> Me
                    </h1>
                </span>
            </div>
        </div>
    );
}
