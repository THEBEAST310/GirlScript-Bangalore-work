import { all, fork } from "redux-saga/effects";
import * as sampleSagas from "./sample";
function* mainSaga() {
  yield all(
    [...Object.values(sampleSagas)].map(fork)
  );
}

export default mainSaga;
