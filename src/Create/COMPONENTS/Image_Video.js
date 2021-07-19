import React, { useState } from "react";
import $ from "jquery";
import Popover from "@material-ui/core/Popover";

export function Image() {
  const [image, setImage] = useState(false);
  const [imageReceive, setImageReceive] = useState("");
  const [receiving, setReceiving] = useState(false); // for loading button

  return (
    <div id="image">
      <span
        className="material-icons-outlined"
        onClick={(e) => {
          const activestate = $("#image span").hasClass("active");

          if (activestate === false) {
            setImage(true);
          } else if (activestate === true) {
            document.execCommand("insertImage", false, imageReceive);
            $("#image span").removeClass("active");
            $('#content img').attr('width', '600px')
            setImageReceive("");
          }
        }}
      >
        image
      </span>
      <Popover
        open={image}
        onClose={() => {
          setImage(false);

          if ($("#WebImage").val() !== "") {
            $("#image span").addClass("active");
            setImageReceive($("#WebImage").val());
          }
        }}
        anchorEl={document.getElementById("image")}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "image",
        }}
        style={{
          top: "10px",
        }}
      >
        {receiving === false ? (
          <>
            <form method="post" encType="multipart/form-data">
              <label htmlFor="LocalImage">
                <input
                  type="file"
                  name="LocalImage"
                  id="LocalImage"
                  hidden
                  accept="image/*"
                  onInput={() => {
                    const imagedata = new FormData($(".image form")[0]);
                    imagedata.append("image", imagedata);
                    setReceiving(true);

                    $.ajax({
                      url: "/imageupload",
                      data: imagedata,
                      type: "POST", //ADDED THIS LINE
                      // THIS MUST BE DONE FOR FILE UPLOADING
                      contentType: false,
                      processData: false,
                      // ... Other options like success and etc
                    }).then((res) => {
                      setImageReceive(res);
                      setTimeout(() => {
                        setImage(false);
                      }, 100);

                      $("#image span").addClass("active");
                      setReceiving(false);
                    });
                  }}
                />
                Chose Local Image
              </label>
              <button type="submit" hidden></button>
            </form>
            OR
            <input
              type="url"
              name="WebImage"
              id="WebImage"
              placeholder="Web Image Link"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setImage(false);
                  $("#image span").addClass("active");
                  setImageReceive(e.target.value);
                }
              }}
            />
          </>
        ) : (
          <div className="loading"></div>
        )}
      </Popover>
    </div>
  );
}

export function Video() {
  const [video, setVideo] = useState(false);
  const [videoRecieve, setVideoRecieve] = useState("");
  const [receiving, setReceiving] = useState(false); // for loading button

  return (
    <div id="video">
      <span
        className="material-icons-outlined"
        onClick={(e) => {
          const activestate = $("#video span").hasClass("active");

          if (activestate === false) {
            setVideo(true);
          } else if (activestate === true) {
            document.execCommand(
              "insertHTML",
              false,
              `
            <video width="400" controls>
  <source src="${videoRecieve}" type="video/mp4">
 
  Your browser does not support HTML video.
</video>`
            );
            $("#video span").removeClass("active");
            setVideoRecieve("");
          }
        }}
      >
        movie
      </span>
      <Popover
        open={video}
        onClose={() => {
          setVideo(false);

          if ($("#WebVideo").val() !== "") {
            $("#video span").addClass("active");
            setVideoRecieve($("#WebVideo").val());
          }
        }}
        anchorEl={document.getElementById("video")}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          paper: "video",
        }}
        style={{
          top: "10px",
        }}
      >
        {receiving === false ? (
          <>
            <form method="post" encType="multipart/form-data">
              <label htmlFor="LocalVideo">
                <input
                  type="file"
                  name="LocalVideo"
                  id="LocalVideo"
                  hidden
                  onInput={() => {
                    $(".video form button").click();
                  }}
                  accept="video/*"
                  onInput={() => {
                    const videodata = new FormData($(".video form")[0]);
                    videodata.append("video", videodata);
                    setReceiving(true);

                    $.ajax({
                      url: "/videoupload",
                      data: videodata,
                      type: "POST", //ADDED THIS LINE
                      // THIS MUST BE DONE FOR FILE UPLOADING
                      contentType: false,
                      processData: false,
                      // ... Other options like success and etc
                    }).then((res) => {
                      setVideoRecieve(res);
                      setTimeout(() => {
                        setVideo(false);
                      }, 100);

                      $("#video span").addClass("active");
                      setReceiving(false);
                    });
                  }}
                />
                Chose Local Video
              </label>
              <button type="submit" hidden></button>
            </form>
            OR
            <input
              type="url"
              name="WebVideo"
              id="WebVideo"
              placeholder="Web Video Link"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setVideo(false);
                  $("#video span").addClass("active");
                  setVideoRecieve(e.target.value);
                }
              }}
            />
          </>
        ) : (
          <div className="loading"></div>
        )}
      </Popover>
    </div>
  );
}
