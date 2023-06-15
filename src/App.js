import { NewsItem } from "./components/newsItem/NewsItem";
import "./app.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllMessage } from "./store/messages/messagesActionCreators";

function App() {
  const dispatch = useDispatch();
  const { messages, isLoading, error } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchAllMessage());
  }, []);

  return (
    <div className="app">
      {messages &&
        messages.map((item) => <NewsItem message={item} key={item.id} />)}
    </div>
  );
}

export default App;
