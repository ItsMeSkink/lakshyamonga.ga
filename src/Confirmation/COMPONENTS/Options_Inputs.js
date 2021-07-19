import React, { useState, useEffect } from "react";
import $ from "jquery";

export default function Options_Inputs() {
  const [image, setImage] = useState(false);
  const [thumbnail, setThumbnail] = useState("");
  const [receiving, setReceiving] = useState(false);

  return (
    <div id="optionInputs">
      {image === false ? (
        <div id="thumbnailoi">
          {receiving === false ? (
            <>
              <form method="post" encType="multipart/form-data">
                <label htmlFor="LocalThumbnail">
                  <input
                    type="file"
                    name="LocalThumbnail"
                    id="LocalThumbnail"
                    hidden
                    accept="image/*"
                    onInput={() => {
                      const imagedata = new FormData(
                        $("#optionInputs form")[0]
                      );
                      imagedata.append("image", imagedata);
                      setReceiving(true);

                      $.ajax({
                        url: "/thumbnailupload",
                        data: imagedata,
                        type: "POST",
                        contentType: false,
                        processData: false,
                      }).then((res) => {
                        setThumbnail(res);
                        setTimeout(() => {
                          setImage(true);
                        }, 100);
                      });
                    }}
                  />
                  Chose Local Image
                </label>
                <button type="submit" hidden></button>
              </form>
              OR
              <div id="webimage">
                <input
                  type="url"
                  name="WebThumbnail"
                  id="WebThumbnail"
                  placeholder="Web Image for Thumbnail"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setImage(true);
                      setThumbnail($("#WebThumbnail").val());

                    }
                  }}
                />
                <span
                  class="material-icons-outlined"
                  onClick={() => {
                    setImage(true);
                    setThumbnail($("#WebThumbnail").val());

                  }}
                >
                  done
                </span>
              </div>
            </>
          ) : (
            <div class="loading"></div>
          )}
        </div>
      ) : (
        <img src={thumbnail} alt="" id="thumbnailoi" />
      )}
      <div id="labels-podcast-socials">
        <div id="labels">
          <input
            type="text"
            name="Label1"
            id="Label1"
            placeholder="Label 1"
            className="Labels"
          />
          <input
            type="text"
            name="Label2"
            id="Label2"
            placeholder="Label 2"
            className="Labels"
          />
          <input
            type="text"
            name="Label3"
            id="Label3"
            placeholder="Label 3"
            className="Labels"
          />
          <input
            type="text"
            name="Label4"
            id="Label4"
            placeholder="Label 4"
            className="Labels"
          />
          <input
            type="text"
            name="Label5"
            id="Label5"
            placeholder="Label 5"
            className="Labels"
          />
          <input
            type="text"
            name="Label6"
            id="Label6"
            placeholder="Label 6"
            className="Labels"
          />
        </div>

        <div id="podcast-socials">
          <span class="material-icons-outlined" id="podcast">
            podcasts
          </span>
          <div id="socials">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
              alt=""
              id="instagram"
            />
            <img
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
              alt=""
              id="twitter"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/whatsapp.png"
              alt=""
              id="whatsapp"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/share-512.png"
              alt=""
              id="link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
