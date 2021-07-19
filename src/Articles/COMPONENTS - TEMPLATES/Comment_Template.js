import "../CSS/Comment_Template.scss"
import React from "react";
import "./DetailComments.css";

export default function DetailComments() {
    return (
        <div id="comments">
            <div id="commentbutton">
                Comment
                <i className="material-icons">comment</i>
            </div>
            <div id="commentsection">
                <div id="displaycomments">
                    <div id="comment">
                        <img
                            src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
                            alt=""
                            id="profilepic"
                        />
                        <span id="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptas earum assumenda aliquam, voluptate in beatae a minus
                                voluptatum esse laborum.
                            </p>
                            <i>Lorem Ipsum</i>
                        </span>
                    </div>
                    <div id="comment">
                        <img
                            src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
                            alt=""
                            id="profilepic"
                        />
                        <span id="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptas earum assumenda aliquam, voluptate in beatae a minus
                                voluptatum esse laborum.
                            </p>
                            <i>Lorem Ipsum</i>
                        </span>
                    </div>
                    <div id="comment">
                        <img
                            src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
                            alt=""
                            id="profilepic"
                        />
                        <span id="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptas earum assumenda aliquam, voluptate in beatae a minus
                                voluptatum esse laborum.
                            </p>
                            <i>Lorem Ipsum</i>
                        </span>
                    </div>
                    <div id="comment">
                        <img
                            src="https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
                            alt=""
                            id="profilepic"
                        />
                        <span id="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptas earum assumenda aliquam, voluptate in beatae a minus
                                voluptatum esse laborum.
                            </p>
                            <i>Lorem Ipsum</i>
                        </span>
                    </div>
                </div>
                <div id="docomment">
                    <input type="text" name="Comment" id="Comment" placeholder="Place your Thoughts here!" />
                    <i className="material-icons">comment</i>
                </div>
            </div>
        </div>
    );
}
