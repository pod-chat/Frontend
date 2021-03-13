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
    const [pod, setPod] = useState({})
    useEffect(()=> {
        getPodcastEpisode('634ceb8f39f648e792ae2add00e084a1') //TODO: hardcoded episode ID Needs changed
            .then(data => {
                setPod(data)
            })
            .catch(err => console.log(err))
    },[])
    
    return(
        <Container>
            <div>
                <div>
                    <PodImage src={pod.image} alt={`Podcast: ${pod.title}`}/>
                </div>
                <div>
                    <div>{ pod.title }</div>
                    <div>{ pod.podcast.title }</div>
                </div>
            </div>
            <div>
                <audio id='player' src={pod.audio}/>
                <div> 
                    <button onClick={()=> document.getElementById('player').play()}>Play</button> 
                    <button onClick={()=> document.getElementById('player').pause()}>Pause</button> 
                </div>
            </div>
            <div>
                Player Control Buttons
            </div>
        </Container>
    )
}