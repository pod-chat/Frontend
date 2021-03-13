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
    height: 25px;
`
const TimeDisplay = styled.div`
    display: flex;
    justify-content: space-between;
`
const TimeStamp = styled.div`
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    margin-bottom: -5px;
`

//HELPER FUNCTION
// const audioProgress = () => {
//     const currentTime = document.querySelector('#player').currentTime
//     const duration = document.querySelector('#player').duration
//     document.querySelector('#seekbar').setAttribute("value", currentTime / duration)
// } 
// ? may not be needed now. Refernecing this blog: https://www.erikverweij.dev/blog/building-a-minimal-audioplayer/

export default function View() {
    const audioRef = React.useRef(null);

    const [pod, setPod] = useState({})
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(()=> {
        getPodcastEpisode('d0becd4e21bc4349b21078236427b6d7') //TODO: hardcoded episode ID Needs changed
            .then(data => {
                setPod(data)
            })
            .catch(err => console.log(err))
        setProgress(audioRef.current.currentTime / duration)
    },[])
    
    //! HELPLER FUNCTIONS 1//
    //Time: seconds -> mm:ss
    //TODO: make it to hh:mm:ss
    // 90 => "01:30"
    const formatTime = (seconds) => {
        return (
            [
                Math.floor(seconds / 60), // minutes
                Math.floor(seconds % 60), // remaining seconds
            ]
                .map(x => x.toString())
        
                // we want double digits, prepend a "0"
                // if necessary
                .map(x => (x.length === 1 ? `0${x}` : x))
        
                // join the result with a colon
                .join(":")
        );
    }

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
                {/* //TODO: figure out how to change the audio playback range from user input */}
                <audio 
                    id='player' 
                    ref={audioRef} 
                    onLoadedData={() => {
                        setDuration(audioRef.current.duration);
                        setProgress(audioRef.current.currentTime / duration);
                    }}
                        
                    onTimeUpdate={() => {
                        // on update, retrieve currentTime from ref,
                        // store it in state
                        setCurrentTime(audioRef.current.currentTime);
                        setProgress(audioRef.current.currentTime / duration);
                    }}            
                    src={`${pod.audio}#t=1000,3000`}
                /> 
                <TimeDisplay>
                    <TimeStamp>{formatTime(currentTime)}</TimeStamp>
                    <TimeStamp>{formatTime(duration)}</TimeStamp>
                </TimeDisplay>
                <ProgressBar id='seekbar' value={progress} max='1' />
                <div> 
                    <button onClick={()=> document.getElementById('player').play()}>▶️</button> 
                    <button onClick={()=> document.getElementById('player').pause()}>⏸</button> 
                </div>
            </div>
        </Container>
    )
}