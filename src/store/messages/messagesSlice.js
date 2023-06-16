import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: {},
  isLoading: false,
  error: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    messagesFetching(state) {
      state.isLoading = true;
    },

    messagesFetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = "";
      state.messages = action.payload;

      for (let item of Object.values(state.messages)) {
        state.messages = {
          ...state.messages,
          [item.id]: { ...item, like: false },
        };
      }
    },
    messagesFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    messageNewFetchingSuccess(state, action) {
      let actionArray = action.payload;
      for (let item of actionArray) {
        state.messages = {
          ...state.messages,
          [item.id]: { ...item, like: false },
        };
      }
    },

    messageToggleLike(state, action) {
      let message = action;
      state.messages = {
        ...state.messages,
        [message.payload.id]: message.payload,
      };

      // let ls = JSON.parse(localStorage.getItem("messages") || "[]");
      // if (ls.find((item) => item.id === message.payload.id)) {
      //   ls = ls.filter((item) => item.id !== message.payload.id);
      // } else {
      //   ls.push(message.payload);
      // }

      // localStorage.setItem("messages", JSON.stringify(ls));
    },
  },
});

export const {
  messagesFetching,
  messagesFetchingError,
  messagesFetchingSuccess,
  messageNewFetchingSuccess,
  messageToggleLike,
} = messagesSlice.actions;

export default messagesSlice.reducer;
