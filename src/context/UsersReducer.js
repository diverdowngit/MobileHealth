import { SET_USERS_CONTEXT, CLEAR_USERS_CONTEXT } from './actions';

export default (state, action) => {
    switch(action.type) {
        case SET_USERS_CONTEXT:
            return {
                ...state,
                usersContext: action.payload.data
            }
        case CLEAR_USERS_CONTEXT:
            return {
                ...state,
                usersContext: null
            }
    }
}