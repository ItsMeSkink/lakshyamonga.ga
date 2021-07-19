import "./CSS/RESPONSIVE.SCSS"
import React, { useState, useEffect } from "react";
import ArticleTemplate from "./COMPONENTS - TEMPLATES/Article_Template";

export default function Articles() {

    let [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        fetch("/articlesa")
            .then((res) => res.json())
            .then((data) => {
                setAllArticles(data)
            })
    }, []);
    return (
        <div id="articles">
            <title>Articles</title>
            {allArticles.map((item, index) => {
                return (
                    <ArticleTemplate title={item.Title} content={(item.Content).replace(/(<([^>]+)>)/g, "")} thumbnail={item.Thumbnail} id={`article${index}`} detail={item.URL} labels={item.Label} />
                )
            })}
        </div>
    );
}
