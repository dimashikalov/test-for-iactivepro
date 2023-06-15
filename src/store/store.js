import { combineReducers, configureStore } from "@reduxjs/toolkit";
import messagesSlice from "./messages/messagesSlice";

export const rootReducer = combineReducers({
  messages: messagesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
