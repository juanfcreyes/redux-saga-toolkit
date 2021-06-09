import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { articlesReducer } from "./articlesReducer";

const rootReducer = combineReducers({
  articles: articlesReducer,
  auth: authReducer
});

export default rootReducer;
