import axios from 'axios';

export const FETCH_EPISODES_START = "FETCH_EPISODES_START"
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS"
export const FETCH_EPISODES_FAILURE = "FETCH_EPISODES_FAILURE"
export const fetchEpisodes = (query) => {
        const config = {
            method: 'get',
            url: `https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&language=English`,
            headers: {'X-ListenAPI-Key': 'cd746fdc5c714ca6989ec642497438d3'}
        }
        console.log(config.url)
    return (dispatch) => {
        dispatch({ type: FETCH_EPISODES_START});

        axios(config)
            .then((res) => {
                dispatch({ 
                  type: FETCH_EPISODES_SUCCESS, 
                  payload: res.data.results
                });
            })
            .catch((err) => {
                dispatch({ type: FETCH_EPISODES_FAILURE, payload: err.message })
            });
    };
};