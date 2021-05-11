import axios from 'axios'

export const getPodcastEpisode = (id) => { //Get podcast episode from ListenNotes.com through their /episodes/{id} endpoint

    //TODO: replace with actual api link base url and put key in .env file 
    const config = {
        method: 'get',
        url: `https://listen-api.listennotes.com/api/v2/episodes/${id}`,
        headers: {
            'X-ListenAPI-Key': 'cd746fdc5c714ca6989ec642497438d3'
        }
    }
    
    return axios(config)
        .then(res => {
            return(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}
