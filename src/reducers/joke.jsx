import { FETCH_JOKE } from '../actions/index';

const INITIAL_STATE = { current: null, history: [] };

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_JOKE:
            return { ...state, current: { joke: 'lorem ipsum'} };//action.payload.data.value
        default:
            return state;
    }
}
