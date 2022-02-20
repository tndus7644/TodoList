import {takeLatest, call, put} from "redux-saga/effects";
import API from "../../api";
import {Action} from "./redux";

const saga = function* () {
    yield takeLatest(Action.Types.GET_PHOTOS, function* ({payload}){
        const result = yield call(API.getPhotos, payload)
        if(result.data){
            yield put(Action.Creators.updateState({
                photos: result.data
            }))
        }
    })
    yield takeLatest(Action.Types.SEARCH_PHOTO, function* ({payload}){
        const result = yield call(API.searchPhotos, payload)
        if(result.data){
            yield put(Action.Creators.updateState({
                searchResult: result.data
            }))
        }
    })
}

export default saga;