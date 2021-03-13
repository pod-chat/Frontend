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
const ProgressBar = styled.progress`
    width: 100%;
    margin: 0 auto;
`

//HELPER FUNCTION
const audioProgress = () => {
    const currentTime = document.querySelector('#player').currentTime
    const duration = document.querySelector('#player').duration
    document.querySelector('#seekbar').setAttribute("value", currentTime / duration)
}

export default function View() {
    const [pod, setPod] = useState({})
    useEffect(()=> {
        getPodcastEpisode('d0becd4e21bc4349b21078236427b6d7') //TODO: hardcoded episode ID Needs changed
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
                    {
                        pod.title ? 
                        <><EpisodeTitle>{ pod.title }</EpisodeTitle>
                        <PodcastTitle>{ pod.podcast.title }</PodcastTitle></> : <div>loading...</div>
                    }
                </PodTitleEpisodeDiv>
            </PodInfoDiv>
            <div>
                <audio id='player' onTimeUpdate={()=> audioProgress()} src={`${pod.audio}#t=1000,3000`}/>
                <ProgressBar id='seekbar' value="0" max='1' />
                <div> 
                    <button onClick={()=> document.getElementById('player').play()}>▶️</button> 
                    <button onClick={()=> document.getElementById('player').pause()}>⏸</button> 
                </div>
            </div>
        </Container>
    )
}