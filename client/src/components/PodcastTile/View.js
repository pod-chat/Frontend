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



// ? may not be needed now. Refernecing this blog: https://www.erikverweij.dev/blog/building-a-minimal-audioplayer/


// COMPONENET //
export default function View() {
    const audioRef = React.useRef(null);

    const [pod, setPod] = useState({})
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0); 
    const [playbackStatus, setPlaybackStatus] = useState('pause')

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
        if (playbackStatus === 'play') {
            audioRef.current.pause();
            setPlaybackStatus('pause');
        }
        if (playbackStatus === 'pause') {
            audioRef.current.play();
            setPlaybackStatus('play');
        }
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
                <audio 
                    id='player' 
                    ref={audioRef} 
                    onLoadedData={() => {
                        setPlaybackStatus('pause')
                        setDuration(audioRef.current.duration);
                    }}
                    onLoadedMetadata={() => {
                        setDuration(audioRef.current.duration);
                        setProgress(audioRef.current.currentTime / duration);
                    }}
                    onTimeUpdate={() => {
                        // on update, retrieve currentTime from ref,
                        // store it in state
                        setCurrentTime(audioRef.current.currentTime);
                        setProgress(audioRef.current.currentTime / duration);
                    }}            
                    src={`${pod.audio}#t=1000,3000`} //TODO: set clip beginning and end times (in seconds) from stored data when user posts. Apply them here.
                /> 
                <TimeDisplay>
                    <TimeStamp>{formatTime(currentTime)}</TimeStamp>
                    <TimeStamp>{formatTime(duration)}</TimeStamp>
                </TimeDisplay>
                <ProgressBar id='seekbar' value={progress} max='1' />
                <div> 
                    <button onClick={()=> togglePlaybackStatus()}>{playbackStatus === 'play' ? '⏸' : '▶️'}</button> 
                </div>
            </div>
        </Container>
    )
}