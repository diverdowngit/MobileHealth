import { FETCH_API, FETCH_SINGLE_THERAPIST } from '../actions.js';

export default (state, action) => {
    switch(action.type) {
        case FETCH_API:
            return {
                ...state,
                data: action.payload
            }
    }
}