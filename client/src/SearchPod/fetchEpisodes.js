import axios from 'axios';

const fetchEpisodes = (query) => {
    const config = {
        method: 'get',
        url: `https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&language=English`,
        headers: {'X-ListenAPI-Key': 'cd746fdc5c714ca6989ec642497438d3'}
    };

    return axios(config)
        .then(res => {
            return (
                {
                    episodes: res.data.results,
                    error: '',
                }
            )
        })
        .catch(err => {
            return (
                {
                    episodes: [],
                    error: err.message,
                }
            );
        })
};

export default fetchEpisodes;
