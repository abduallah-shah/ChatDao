import { createAsyncThunk } from "@reduxjs/toolkit";
import { SetLoading } from "../userSlice";
import axios from "../../../utils/axios";
import { socket } from "../../../utils/socket";
import { closeActiveConversation } from "../chatSlice";

// ------------- Get Conversation Thunk -------------
export const GetConversations = createAsyncThunk(
  "conversation/get-conversations",
  async (arg, { rejectWithValue, dispatch }) => {
    try {
      dispatch(SetLoading(true));
      const { data } = await axios.get("/conversation/get-conversations/");
      dispatch(SetLoading(false));
      return data;
    } catch (error) {
      dispatch(SetLoading(false));
      return rejectWithValue(error.error);
    }
  }
);

// ------------- Create or Open Conversation -------------
export const CreateOpenConversation = createAsyncThunk(
  "conversation/create-open-conversation",
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(
        "/conversation/create-open-conversation",
        {
          receiver_id: value,
        }
      );

      dispatch(closeActiveConversation());
      socket.emit("join_conversation", data.conversation._id);
      return data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  }
);

// ------------- Get Messages -------------
export const GetMessages = createAsyncThunk(
  "message/get-messages",
  async (convoId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/message/get-messages/${convoId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  }
);

// ------------- Send Message -------------
export const SendMessage = createAsyncThunk(
  "message/send-message",
  async (messageData, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.post("/message/send-message", messageData);

      if (!getState().chat.isOptimistic) {
        socket.emit("send_message", data.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.error);
    }
  }
);