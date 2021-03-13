import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPodcastEpisode} from '../../services/podcastServices'


//Styling - Styled Components
const Container = styled.div`
    height: 164px;
    border-radius: 8px;
    background-color: #F6F6F6;
    margin-top: 10px;
    padding: 10px;
`

const PodInfoDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`

const PodTitleEpisodeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 255px;
`
const PodImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 4px;
    flex-basis: 70px;
    margin-right: 10px;
`
const EpisodeTitle = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 600;
    line-height: 18px;
    font-size: 15px;

`
const PodcastTitle = styled.div`
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
    font-weight: 400;
    line-height: 18px;
    font-size: 13px;
    color: darkgray;
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
            <PodInfoDiv>
                <div>
                    <PodImage src={pod.image} alt={`Podcast: ${pod.title}`}/>
                </div>
                <PodTitleEpisodeDiv>
                    <EpisodeTitle>{ pod.title }</EpisodeTitle>
                    <PodcastTitle>{ pod.podcast.title }</PodcastTitle>
                </PodTitleEpisodeDiv>
            </PodInfoDiv>
            <div>
                <audio id='player' src={pod.audio}/>
                <div> 
                    <button onClick={()=> document.getElementById('player').play()}>Play</button> 
                    <button onClick={()=> document.getElementById('player').pause()}>Pause</button> 
                </div>
            </div>
        </Container>
    )
}