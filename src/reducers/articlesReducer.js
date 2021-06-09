import { createSlice } from "@reduxjs/toolkit";
import { DATA_REQUESTED } from "../constants/action-types";

const articlesState = {
  articles: [{ title: "React Redux Tutorial for Beginners", id: 1 }],
  remoteArticles: [],
  error: null
};

export const getData = (url) => ({
  type: DATA_REQUESTED,
  payload: { url }
});

const articlesSlice = createSlice({
  name: "articles",
  initialState: articlesState,
  reducers: {
    addArticle: (state, action) => {
      state.articles = state.articles.concat(action.payload);
    },
    loadData: (state, action) => {
      state.remoteArticles = state.remoteArticles.concat(action.payload);
    },
    apiError: (state, action) => {
      state.remoteArticles = [];
      state.error = action.payload;
    }
  }
});

export const { addArticle, loadData, apiError } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
