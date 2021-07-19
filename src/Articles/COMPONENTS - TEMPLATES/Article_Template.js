import "../CSS/Article_Template.scss"

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function ArticleTemplate(props) {
    useEffect(() => {
        let articles = document.getElementsByClassName("article");

        $(articles[0]).addClass("major");
        $(articles[0]).removeClass("minor");
        // $('.article #brief #content:first-child').addClass('major')
        // $('.article #brief #content:first-child').removeClass('minor')
        let articlenumber = articles.length;
        let i = 0;
        if (window.innerWidth > 1400) {
            $(window).on("wheel", (e) => {
                const scroll = e.originalEvent.deltaY;
                if (scroll > 0) {
                    if (i < articlenumber - 1 || (i === articlenumber && i > 0)) {
                        ++i;
                        $(articles[i]).addClass("major");
                        $(articles[i]).removeClass("minor");

                        $(articles[i - 1]).removeClass("major");
                        $(articles[i - 1]).addClass("minor");
                        $(articles[i - 1]).addClass("scrolled");
                    }
                }

                if (scroll < 0) {
                    if (i < articlenumber + 2 && i > 0) {
                        --i;
                        $(articles[i + 1]).removeClass("major");
                        $(articles[i + 1]).addClass("minor");
                        // $(articles[i + 1]).addClass('toscroll')

                        $(articles[i]).addClass("major");
                        $(articles[i]).removeClass("minor");
                        $(articles[i + 1]).removeClass("scrolled");
                        $(articles[i]).removeClass("scrolled");
                    }
                }
            });
        }
        function getRandomDarkColor() {
            var letters = "0123456A";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            return color;
        }
        function getRandomLightColor() {
            var letters = "456BCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            return color;
        }

        for (let article = 0; article < $(".article").length; article++) {
            $(".article")[
                article
            ].style.backgroundImage = `linear-gradient( ${getRandomDarkColor()}, black)`;

            for (let quarter = 0; quarter < $(".article").length; quarter++) {
                $(".quarter")[quarter].style.backgroundColor = getRandomLightColor();
            }
        }
    }, []);

    return (
        <Link
            to={"/articles/" + props.detail.toString().toLowerCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            id={props.id}
            className="article minor"
            key={props.key1}
        >
            <span id="title-content_spotify">
                <h4>{props.title}</h4>

                <span id="content-spotify">
                    <p>{props.content}</p>

                    {props.showSpotify ? (
                        <a href={props.spotifyLink}>
                            <img
                                src="https://logodownload.org/wp-content/uploads/2020/03/listen-on-spotify-1.png"
                                alt="spotify"
                            />
                        </a>
                    ) : (
                        "Coming Soon.."
                    )}
                </span>
            </span>

            <img src={props.thumbnail} alt="thumbnail" id="thumbnail" />

            <div className="quarter"></div>
        </Link>
    );
}

ArticleTemplate.defaultProps = {
    showSpotify: true,
};
