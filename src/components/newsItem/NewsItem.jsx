import React, { useEffect, useRef, useState } from "react";
import "./newsItem.css";
import { VideoItem } from "./VideoItem";
import { ImageItem } from "./ImageItem";
import defaultImage from "./../../static/images/defaultImage.png";
import { useDispatch } from "react-redux";
import { messageToggleLike } from "../../store/messages/messagesSlice";

export const NewsItem = ({ message }) => {
  const date = new Date(message.date);
  let [typeFile, setTypeFile] = useState("");
  const file = message.attachments;

  const dispatch = useDispatch();

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

  function addZero(num) {
    if (num >= 0 && num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }

  const handleFavoritesClick = () => {
    const changeMessage = { ...message, like: !message.like };
    dispatch(messageToggleLike(changeMessage));
    let ls = JSON.parse(localStorage.getItem("messages"));
    // if (ls.find((item) => item.id === changeMessage.id)) {
    //   ls = ls.filter((item) => item.id !== changeMessage.id);
    // } else {
    //   ls.push(changeMessage);
    // }
    console.log("ls", ls);
    // localStorage.setItem("messages", JSON.stringify(ls));
  };

  // useEffect(() => {
  //   let ls = JSON.parse(localStorage.getItem("messages"));
  //   if (ls) {
  //     if (ls.find((item) => item.id === message.id)) {
  //       let changeMessage = { ...message, like: true };
  //       dispatch(messageToggleLike(changeMessage));
  //     }
  //   }
  // }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="leftInfo">
          <div className="avatar" />
          <div className="createTime">
            {addZero(date.getHours())} : {addZero(date.getMinutes())}
          </div>
        </div>

        <div className="textContent">
          <div className="textContentHeader">
            <div className="author">{message.author}</div>
            <div className="icons">
              <div className="arrow" />
              <div className="hide" />
              <div className="setting" />
              <div
                className={message.like ? "favorites like" : "favorites"}
                onClick={handleFavoritesClick}
              />
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
