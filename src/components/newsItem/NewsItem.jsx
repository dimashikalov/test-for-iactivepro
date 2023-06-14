import React from "react";
import "./newsItem.css";

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

export const NewsItem = () => {
  const date = new Date(testItem.date);
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
            <div className="author">
              <h6>{testItem.author}</h6>
            </div>
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
        </div>
      </div>
    </div>
  );
};
