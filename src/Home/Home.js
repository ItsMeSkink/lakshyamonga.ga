import "./CSS/RESPONSIVE.scss"
import "./CSS/Home.scss"

import React, { useState } from "react";
import Contact from "./COMPONENTS/Contact";
import Social_Name_Search from "./COMPONENTS/Social-Name-Search";
import Tagline_Spotify from "./COMPONENTS/Tagline-Spotify";
import Navigation from "./COMPONENTS/Navigation";

export default function Home() {

    return (
        <div id="home">
            <title>Home</title>
            <Contact />
            <img
                src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Profile%20Image.webp"
                id="ProfileImage"
            />
            <Social_Name_Search />
            <Navigation />
            <Tagline_Spotify />
        </div>
    );
}
