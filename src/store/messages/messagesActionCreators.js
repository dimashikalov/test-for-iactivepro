import {
  messagesFetching,
  messagesFetchingError,
  messagesFetchingSuccess,
  messageNewFetchingSuccess,
} from "./messagesSlice";
import axios from "axios";

const apiUrl = "http://a0830433.xsph.ru";

export const fetchAllMessage = () => async (dispatch) => {
  try {
    dispatch(messagesFetching());
    const formData = { actionName: "MessagesLoad" };

    const responce = await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    });

    const messages = responce.data.Messages.reduce((acc, el) => {
      acc[el.id] = el;
      return acc;
    }, {});
    dispatch(messagesFetchingSuccess(messages));
  } catch (error) {
    dispatch(messagesFetchingError(error));
  }
};

export const fetchNewMessage = (messageId) => async (dispatch) => {
  try {
    const formData = { actionName: "MessagesLoad", messageId: messageId };

    const responce = await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    });
    if (responce.data === "no message") {
      return;
    }
    dispatch(messageNewFetchingSuccess(responce.data.Messages));
  } catch (error) {
    dispatch(messagesFetchingError(error));
  }
};
