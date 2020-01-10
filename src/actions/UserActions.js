import types from '../constants/types'

export function handleLogin(callback) {
  return function(dispatch) {
    dispatch({
      type: types.LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        const username = r.session.user.first_name

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: username,
        })
        callback()
      } else {
        dispatch({
          type: types.LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}

export function checkLogin() {
  return function(dispatch) {
    dispatch({
      type: types.LOGIN_CHECK,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.getLoginStatus(r => {
      if (r.session) {
        const username = r.session.user.first_name
        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: types.LOGIN_NEEDED,
          payload: '',
        })
      }
    }, 4)
  }
}
