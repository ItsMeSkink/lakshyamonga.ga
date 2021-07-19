import "../CSS/About.scss";
import "../CSS/RESPONSIVE.scss"
import React from "react";

export default function About() {
    return (
        <div id="about">
            <title>About</title>
            <div id="profileimage-name">
                <img
                    src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Profile%20Image.webp"
                    alt=""
                    id="profileimage"
                />
                <h1>Lakshya Pratap Monga</h1>
            </div>

            <div id="navigationdefault-socials-aboutcontent-spotify">
                <div id="navigationdefault-socials">
                    {" "}
                    <a href="https://github.com/ItsMeSkink" id="github">
                        <img
                            src="https://image.flaticon.com/icons/png/512/25/25231.png"
                            alt=""
                        />
                    </a>
                    <div id="socials">
                        <a href="https://instagram.com/lakshyamonga.io">
                            <img
                                src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Instagram.webp"
                                alt=""
                                id="Instagram"
                            />
                        </a>
                        <a href="http://twitter.com/Lakshya_Monga">
                            <img
                                src="https://raw.githubusercontent.com/ItsMeSkink/HostingForBlogSite/master/Blog_Images/WebP_Images/Twitter.webp"
                                alt=""
                                id="Twitter"
                            />
                        </a>
                    </div>
                </div>

                <div id="aboutcontent">
                    Hello World, this is Lakshya here, just a combination of approximately
                    7 x 10<sup>27</sup> atoms. If you stick here most of the topics here
                    would talk about Physics, World Development, the Education System and
                    some which are changing the world. I propogate through the space-time
                    continum believing that we all have the ability to change the world
                    along with the people in it. Along with this belief, I also believe
                    that within the next 2 decades, we would be an interplanetary species
                    and would successfully have humans land on Mars. To know more except
                    what is written in this blog, tune in at "
                    <a
                        href="https://open.spotify.com/show/3m880Lk4YKalgFzFonQFaV"
                    >
                        The Knoate Podcast
                    </a>
                    " which stands for Knowledge + Innovation.
                    <br />
                    <br />
                    If you want to make your own blog like this, you can make one by
                    clicking on the "<b> &#60;&#47;&#62; </b>" button on the left of this.
                    Some of the other people who have created one can be seen by clicking
                    on the " " icon on left or on the bottom navigation button.
                </div>

                <a href="https://open.spotify.com/show/3m880Lk4YKalgFzFonQFaV">
                    <img
                        src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/ListenOnSpotify_BlackBG.png?raw=true"
                        alt=""
                        id="spotify"
                    />
                </a>
            </div>
        </div>
    );
}
