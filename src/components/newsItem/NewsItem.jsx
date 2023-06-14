import React, { useEffect, useRef } from "react";
import "./newsItem.css";

import defaultImage from "./../../static/images/defaultImage.png";

const testItem = {
  author: "Хорошие новости",
  content:
    "Кубанские токари давно научились изготавливать то, что все привыкли ждать из-за границы. Небольшой токарный цех выполняет заказы по замене деталей на импортной технике — что не только дешевле, но и быстрее в производстве⚙️",
  channel: "telegrambot",
  id: "2682",
  date: "2022-04-03 20:51:03",
  attachments: [
    {
      type: "video",
      url: "https://media.iactive.pro/ZLmYglhqeDD/messages_videos/telegram/hnCxaYpiDAVI4Pdb6CLB7sTbE8E0P5tb.mp4",
    },
  ],
  senderNumber: "1001692672105",
  region: "",
};

const ImageItem = ({ url }) => {
  return <img style={{ width: "100%", height: "100%" }} src={url} alt="img" />;
};
const VideoItem = ({ url }) => {
  return (
    <video style={{ width: "100%", height: "100%" }} controls>
      <source src={url} type="video/mp4" />
    </video>
  );
};

export const NewsItem = () => {
  const date = new Date(testItem.date);
  let typeFile = useRef("image");
  let showFile;
  const file = testItem.attachments;

  useEffect(() => {
    // mediaFile();
    console.log("file ", file);

    if (file[0].type === "video") {
      console.log("video ", file[0].url);
      typeFile = "video";
    }
    console.log("typeFile", typeFile);
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
            <div className="author">{testItem.author}</div>
            <div className="icons">
              <div className="arrow" />
              <div className="hide" />
              <div className="setting" />
              <div className="favorites" />
            </div>
          </div>
          <div className="content">
            <p>{testItem.content}</p>
          </div>
          <div>
            <a href="#" className="link">
              Далее
            </a>
          </div>
          <div className="mediaContent">
            {typeFile === "image" ? (
              file[0] ? (
                <ImageItem url={file[0].url} />
              ) : (
                <ImageItem url={defaultImage} />
              )
            ) : (
              <VideoItem url={file[0].url} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
