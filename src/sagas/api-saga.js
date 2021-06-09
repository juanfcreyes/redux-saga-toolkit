import { DATA_REQUESTED } from "../constants/action-types";
import { takeEvery, call, put } from "redux-saga/effects";
import { loadData, apiError } from "../reducers/articlesReducer";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload.url);
    yield put(loadData(payload));
  } catch (e) {
    yield put(apiError(e));
  }
}

const getData = (url) => fetch(url).then((response) => response.json());
