/* eslint-disable */
import * as actions from '../actions/hostsActions';

export const initialState = {
    hosts: [],
    loading : false,
    hasErrors: false
}

export default function hostsReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_HOSTS:
            return {
                ...state,
                loading: true
            };
            case actions.GET_HOSTS_SUCCESS:
                return {
                    hosts: action.payload,
                    loading:false,
                    hasErrors:false
                };
            case actions.GET_HOSTS_FAILURE:
                return {
                    ...state,
                    loading:false,
                    hasErrors:false
                };
        default:
            return state
    }
}