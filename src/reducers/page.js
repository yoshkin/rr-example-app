import types from "../constants/types";
import { getCurrentYear } from "../utils/date";

const initialState = {
    year: getCurrentYear(),
    photos: [],
    isFetching: false,
    error: '',
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true, error: '' };
        case types.GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false, error: '' };
        case types.GET_PHOTOS_FAIL:
            return { ...state, isFetching: false, error: action.payload.message };
        default:
            return state;
    }
}