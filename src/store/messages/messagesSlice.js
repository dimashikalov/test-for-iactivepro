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
  },
});

export const {
  messagesFetching,
  messagesFetchingError,
  messagesFetchingSuccess,
} = messagesSlice.actions;

export default messagesSlice.reducer;
