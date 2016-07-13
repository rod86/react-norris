import { FETCH_JOKE } from '../actions/index';

const INITIAL_STATE = { currentJoke: null };

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_JOKE:
            return { ...state, currentJoke: action.payload.data.value };
        default:
            return state;
    }
}
