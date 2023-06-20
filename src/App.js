import { NewsItem } from "./components/newsItem/NewsItem";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchAllMessage,
  fetchNewMessage,
} from "./store/messages/messagesActionCreators";
import { messagesFetchingSuccess } from "./store/messages/messagesSlice";

function App() {
  const dispatch = useDispatch();
  const { messages, isLoading, error } = useSelector((state) => state.messages);
  const [selectSort, setSelectSort] = useState("sortDown");
  const favorites = JSON.parse(localStorage.getItem("messages"));
  const [sortArray, setSortArray] = useState([]);

  const messageTimeout = () => {
    let lastItem = Object.keys(messages)[Object.keys(messages).length - 1];
    if (lastItem) {
      dispatch(fetchNewMessage(lastItem));
    }
  };

  const getMessageFromLocalStorageOrServer = () => {
    if (!favorites) {
      dispatch(fetchAllMessage());
    } else {
      let lsData = JSON.parse(localStorage.getItem("messages"));
      console.log("data", lsData);
      dispatch(messagesFetchingSuccess(lsData));
    }
  };

  useEffect(() => {
    getMessageFromLocalStorageOrServer();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      messageTimeout();
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  const handleSortArray = (type, messages) => {
    if (type === "sortUp") {
      setSortArray(Object.values(messages).toReversed());
    }
    if (type === "sortDown") {
      setSortArray(Object.values(messages));
    }
  };

  useEffect(() => {
    handleSortArray(selectSort, messages);
  }, [selectSort, messages]);

  return (
    <div className="app">
      <label>
        {" "}
        Показывать:
        <select
          className="select"
          value={selectSort}
          onChange={(e) => setSelectSort(e.target.value)}
        >
          <option value="sortDown">Сначала старые</option>
          <option value="sortUp">Сначала новые</option>
        </select>
      </label>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка загрузки данных...</h1>}
      {sortArray.map((item) => {
        return <NewsItem message={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
