/* eslint-disable */
import * as actions from '../actions/authActions';

export const initialState = {
    auth: "",
    loading : false,
    hasErrors: false
}

export default function hostsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_AUTH:
            return {
                ...state,
                loading: true
            };
            case actions.GET_AUTH_SUCCESS:
                return {
                    auth: action.payload,
                    loading:false,
                    hasErrors:false
                };
            case actions.GET_AUTH_FAILURE:
                return {
                    ...state,
                    loading:false,
                    hasErrors:false
                };
        default:
            return state
    }
}