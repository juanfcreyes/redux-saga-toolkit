import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";
import rootReducer from "../reducers/rootReducer";

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [
  forbiddenWordsMiddleware,
  initialiseSagaMiddleware,
  ...getDefaultMiddleware()
];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware
});

initialiseSagaMiddleware.run(apiSaga);

export default store;
