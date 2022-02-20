import appSaga from './app/saga';
import photoSaga from './photos/saga';
import authSaga from './auth/saga';
import {fork} from 'redux-saga/effects';

const sagas = function* () {
    yield fork(appSaga);
    yield fork(photoSaga);
    yield fork(authSaga);
}

export default sagas;