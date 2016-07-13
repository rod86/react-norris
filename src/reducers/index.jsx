import { combineReducers } from 'redux';
import JokeReducer from './joke';

const rootReducer = combineReducers({
	joke: JokeReducer
});

export default rootReducer;
