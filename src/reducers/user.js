import types from '../constants/types'

const initialState = {
  name: '',
  error: '',
  isFetching: false,
  isLogged: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '', isLogged: false }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        name: action.payload,
        isLogged: true,
      }
    case types.LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.message,
        isLogged: false,
      }
    default:
      return state
  }
}
