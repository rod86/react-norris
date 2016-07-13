import axios from 'axios';

export const FETCH_JOKE = 'FETCH_JOKE';

const ROOT_URL = 'http://api.icndb.com/jokes/';

export function fetchJoke(options = {}) {
    const request = axios.get(`${ROOT_URL}random/`, { params: options });

    return {
        type: FETCH_JOKE,
        payload: request
    };
}
