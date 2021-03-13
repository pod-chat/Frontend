import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPodcastEpisode} from '../../services/podcastServices'


//Styling - Styled Components
const Container = styled.div`
    height: 164px;
    border-radius: 8px;
    background-color: lightgray;
    margin-top: 10px;
    padding: 10px;
`

const PodImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 4px;
`

export default function View() {
    const [podcast, setPodcast] = useState({})
    useEffect(()=> {
        getPodcastEpisode('634ceb8f39f648e792ae2add00e084a1') //TODO: hardcoded episode ID Needs changed
            .then(data => {
                setPodcast(data)
            })
    },[])
    
    return(
        <Container>
            <div>
                <div>
                    <PodImage src={podcast.image} alt={`Podcast: ${podcast.title}`}/>
                </div>
                <div>
                    <div>{ podcast.title }</div>
                    <div>{ podcast.podcast.title }</div>
                </div>
            </div>
            <div>
            <audio controls="controls" src={podcast.audio}/>
            </div>
            <div>
                Player Control Buttons
            </div>
        </Container>
    )
}