import React, { useEffect, useRef, useState } from "react";
import "./newsItem.css";
import { VideoItem } from "./VideoItem";
import { ImageItem } from "./ImageItem";
import defaultImage from "./../../static/images/defaultImage.png";

export const NewsItem = ({ message }) => {
  const date = new Date(message.date);
  let [typeFile, setTypeFile] = useState("");
  const file = message.attachments;

  useEffect(() => {
    if (file.length) {
      if (file[0].type === "video") {
        setTypeFile("video");
      } else {
        setTypeFile("image");
      }
    } else {
      setTypeFile("image");
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="leftInfo">
          <div className="avatar" />
          <div className="createTime">
            {date.getHours()} : {date.getMinutes()}
          </div>
        </div>

        <div className="textContent">
          <div className="textContentHeader">
            <div className="author">{message.author}</div>
            <div className="icons">
              <div className="arrow" />
              <div className="hide" />
              <div className="setting" />
              <div className="favorites" />
            </div>
          </div>
          <div className="content">
            <p>{message.content}</p>
          </div>
          <div>
            <a href="#" className="link">
              Далее
            </a>
          </div>
          <div className="mediaContent">
            {typeFile === "image" &&
              (file[0] ? (
                <ImageItem url={file[0].url} />
              ) : (
                <ImageItem url={defaultImage} />
              ))}
            {typeFile === "video" && <VideoItem url={file[0].url} />}
          </div>
        </div>
      </div>
    </div>
  );
};
