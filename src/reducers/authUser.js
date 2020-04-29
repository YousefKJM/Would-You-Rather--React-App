import { SET_AUTH_USER } from '../actions/actionTypes';

export default function authUser(state = null, action) {
    if (action.type === SET_AUTH_USER) {
        return action.id;
    }
    return state;
    // switch (action.type) {
    //     case SET_AUTH_USER:
    //         return action.id
    //     default:
    //       return state
    // }
}