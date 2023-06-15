import { NewsItem } from "./components/newsItem/NewsItem";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchAllMessage,
  fetchNewMessage,
} from "./store/messages/messagesActionCreators";

function App() {
  const dispatch = useDispatch();
  const { messages, isLoading, error } = useSelector((state) => state.messages);

  const messageTimeout = () => {
    setInterval(() => {
      let lastItem = messages[messages.length - 1];
      if (lastItem) {
        console.log("inner", lastItem);
        console.log("mmm", messages);
        dispatch(fetchNewMessage(lastItem.id));
      }
    }, 5000);
  };

  useEffect(() => {
    dispatch(fetchAllMessage());
  }, []);

  useEffect(() => {
    messageTimeout();
  }, []);

  return (
    <div className="app">
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка загрузки данных...</h1>}
      {messages &&
        messages.map((item) => <NewsItem message={item} key={item.id} />)}
    </div>
  );
}

export default App;
