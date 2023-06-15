import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
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
      //   state.messages = state.messages.map(
      //     (card) => (card = { ...card, like: false })
      //   );
    },
    messagesFetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    messageNewFetchingSuccess(state, action) {
      state.messages = [...state.messages, ...action.payload];
      console.log("state 111", state.messages);
    },
  },
});

export const {
  messagesFetching,
  messagesFetchingError,
  messagesFetchingSuccess,
  messageNewFetchingSuccess,
} = messagesSlice.actions;

export default messagesSlice.reducer;
