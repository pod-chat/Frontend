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

export default function View() {
    const [podcast, setPodcast] = useState({})
    useEffect(()=> {
        const newPodcast = getPodcastEpisode('ea09b575d07341599d8d5b71f205517b')
        setPodcast(newPodcast)
    },[])
    
    return(
        <Container>
            <div>
                <div>
                    Pic
                </div>
                <div>
                    <div>
                        Episode Title
                    </div>
                    <div>
                        Podcast Author
                    </div>
                </div>
            </div>
            <div>
                <audio src='https://www.listennotes.com/e/p/6b6d65930c5a4f71b254465871fed370/'></audio>
            </div>
            <div>
                Player Control Buttons
            </div>
        </Container>
    )
}