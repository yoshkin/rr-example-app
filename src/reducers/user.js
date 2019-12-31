import types from '../constants/types'

const initialState = {
    name: '',
    error: '',
    isFetching: false,
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, isFetching: true, error: '' };
        case types.LOGIN_SUCCESS:
            return { ...state, isFetching: false, name: action.payload };
        case types.LOGIN_FAIL:
            return { ...state, isFetching: false, error: action.payload.message };
        default:
            return state
    }
}