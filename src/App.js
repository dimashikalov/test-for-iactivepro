import { NewsItem } from "./components/newsItem/NewsItem";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
  fetchAllMessage,
  fetchNewMessage,
} from "./store/messages/messagesActionCreators";

function App() {
  const dispatch = useDispatch();
  const { messages, isLoading, error } = useSelector((state) => state.messages);

  const messageTimeout = () => {
    let lastItem = Object.keys(messages)[Object.keys(messages).length - 1];
    console.log("last", lastItem);
    console.log("messageArray", messages);
    if (lastItem) {
      dispatch(fetchNewMessage(lastItem));
    }
  };

  useEffect(() => {
    dispatch(fetchAllMessage());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      messageTimeout();
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div className="app">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка загрузки данных...</h1>}
      {messages &&
        Object.values(messages).map((item) => (
          <NewsItem message={item} key={item.id} />
        ))}
    </div>
  );
}

export default App;
