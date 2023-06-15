import { messagesFetching, messagesFetchingSuccess } from "./messagesSlice";
import axios from "axios";

const apiUrl = "http://a0830433.xsph.ru";

export const fetchAllMessage = () => async (dispatch) => {
  try {
    dispatch(messagesFetching);
    const formData = { actionName: "MessagesLoad" };

    const responce = await axios.post(apiUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: false,
    });

    dispatch(messagesFetchingSuccess(responce.data.Messages));
  } catch (error) {
    console.log("err", error);
  }
};
