import * as Types from './types'
import Axios from 'axios'

export const register = (user, history) => dispatch => {
    Axios.post('./api/users/register', user)
        .then(res => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: { 
                    error: {}
                }
            })
            console.log(res)
            history.push('./login')
        })
        .catch(error => {
            dispatch({
                type: Types.USERS_ERROR,
                payload: {
                    error: error.response.data
                }
            })
        })
}