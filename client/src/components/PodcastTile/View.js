import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPodcastEpisode} from '../../services/podcastServices'
import Play from './Play'
import Pause from './Pause'
import SkipBack from './SkipBack'
import SkipForward from './SkipForward'

// STYLING // Styled Components
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
const ProgressBar = styled.input`
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

const PlayerControls = styled.div`
    width: 40%;
    margin: 0 auto;
    height: 30px;
    display: flex;
    justify-content: space-around;
`



// ? may not be needed now. Refernecing this blog: https://www.erikverweij.dev/blog/building-a-minimal-audioplayer/


// COMPONENET //
export default function View() {
    const audioRef = React.useRef(null);
    const progBarRef = React.useRef(null);

    // STATE //
    const [pod, setPod] = useState({})
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false)
    const [isSeeking, setIsSeeking] = useState(false)

    // EFFECTS // 
    useEffect(()=> {
        getPodcastEpisode('d0becd4e21bc4349b21078236427b6d7') //TODO: hardcoded episode ID Needs changed
            .then(data => {
                setPod(data)
            })
            .catch(err => console.log(err))
    },[])
    
    // HELPLER FUNCTIONS //
    //Time: seconds -> H:mm:ss
    const formatTime = (seconds) => {
        return (
            new Date(seconds * 1000).toISOString().substr(12,7) //converts seconds to H:mm:ss
        )
    }

    const togglePlaybackStatus = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setIsPlaying(true);
            console.log(audioRef.current.paused)
        }
        else if (!audioRef.current.paused) {
            audioRef.current.pause();
            setIsPlaying(false);
            console.log(audioRef.current.paused)
        }
    }

    const playHead = (time) => {
        setIsSeeking(true)
        audioRef.current.currentTime = time
        setCurrentTime(time)
    }

    const skip = (value) => {
        audioRef.current.currentTime = (currentTime + value)
        setCurrentTime(currentTime + value)
    }

    // JSX //
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
                <audio 
                    id='player' 
                    ref={audioRef} 
                    onLoadedData={() => {
                        setIsPlaying(false)
                        setDuration(audioRef.current.duration);
                    }}
                    onTimeUpdate={() => {
                        // on update, retrieve currentTime from ref,
                        // store it in state
                        setCurrentTime(audioRef.current.currentTime);
                    }}  

                    onPlay={()=> setIsPlaying(true)} 
                    onPause={()=> setIsPlaying(false)} 
                    src={`${pod.audio}#t=1000,3000`} //TODO: set clip beginning and end times (in seconds) from stored data when user posts. Apply them here.
                /> 

                <TimeDisplay>
                    <TimeStamp>{formatTime(currentTime)}</TimeStamp>
                    <TimeStamp>{formatTime(duration)}</TimeStamp>
                </TimeDisplay>

                <ProgressBar ref={progBarRef} type='range' min='0' max={duration} step='0.25' value={isSeeking ? progBarRef.current.value : currentTime} onChange={()=> playHead(Number(progBarRef.current.value))} />

                <PlayerControls> 
                    <SkipBack skip={skip}/>
                    {isPlaying ? <Pause togglePlaybackStatus={togglePlaybackStatus}/> : <Play togglePlaybackStatus={togglePlaybackStatus}/>}
                    <SkipForward skip={skip}/>
                </PlayerControls>
            </div>
        </Container>
    )
}