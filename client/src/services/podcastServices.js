import axios from 'axios'

//TODO: replace with actual api link base url
const baseURL = 'https://listen-api-test.listennotes.com/api/v2'; //listenNotes base API url

export const getPodcastEpisode = (id) => { //Get podcast episode from ListenNotes.com through their /episodes/{id} endpoint
    axios.get(`${baseURL}/episodes/${id}`, {
        headers: {
            'X-ListenAPI-Key': 'cd746fdc5c714ca6989ec642497438d3'
          }
    })
        .then(res => {
            return(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}