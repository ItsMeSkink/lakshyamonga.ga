import "../CSS/Detail_Template.scss"

import React from "react";
import { Link } from "react-router-dom";

export default function DetailTemplate(props) {
    return (
        <div id="detail">
            <div id="thumbnail-tags-spotify-share">
                <img src={props.thumbnail} id="thumbnail" alt="thumbnail" />
                <div id="tags-spotify-share">
                    <div id="tags">
                        <ul>
                            {(props.labels).map((item) => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>
                    <div id="spotify-share">
                        <span class="material-icons-outlined" id="spotify">
                            podcasts
                        </span>
                        <div id="share">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                                alt=""
                                id="instagram"
                            />
                            <img
                                src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                                alt=""
                                id="twitter"
                            />
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png"
                                alt=""
                                id="whatsapp"
                            />
                            <img
                                src="http://icons555.com/images/icons-black/image_icon_copy_link_pic_512x512.png"
                                alt=""
                                id="link"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="title-content">
                <h1 id="title">{props.title}</h1>
                <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
            </div>

            <Link to="/articles" id="back" key="articles">
                <img
                    src="https://github.com/ItsMeSkink/HostingForBlogSite/blob/master/Blog_Images/Complete%20Read.png?raw=true"
                    alt=""
                />
            </Link>
            {/* <DetailComments /> */}
        </div>
    );
}
