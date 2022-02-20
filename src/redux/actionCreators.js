import {bindActionCreators} from "redux";
import {Action as AppAction} from './app/redux'
import {Action as photoAction} from './photos/redux'
import {Action as AuthAction} from './auth/redux';
import store from "./store";

export const useActionCreators = () => {

    const {dispatch} = store;

    const appActions = bindActionCreators(AppAction.Creators, dispatch);
    const photoActions = bindActionCreators(photoAction.Creators, dispatch);
    const authActions = bindActionCreators(AuthAction.Creators, dispatch);

    return {
        appActions,
        photoActions,
        authActions
    }
}