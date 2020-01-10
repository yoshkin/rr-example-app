import types from '../constants/types'

export function handleLogin(callback) {
  return function(dispatch) {
    dispatch({
      type: types.LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        console.log(r.session)
        let username = r.session.user.first_name

        dispatch({
          type: types.LOGIN_SUCCESS,
          payload: username,
        })
        localStorage.setItem('login', `${username}`)
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
