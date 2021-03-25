import React from 'react'
import styled from 'styled-components'

//PostFeed Components Import


//Top Level Components Import
import PodcastTile from '../components/PodcastTile'
import EngagementOptions from '../components/EngagementOptions'


//Styling - Styled Components
const PostContainer = styled.div`
    background-color: white;
    padding: 10px;
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5px;
`
//Component
export default function View() {
    return(
        <PostContainer>
            <PodcastTile />
            <EngagementOptions/>
        </PostContainer>
    )
}