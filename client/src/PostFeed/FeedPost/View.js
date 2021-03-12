import React from 'react'
import styled from 'styled-components'

//PostFeed Components Import
import PostRank from './PostRank'
import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostAuthor from './PostAuthor'

//Top Level Components Import
import PodcastTile from '../../components/PodcastTile'
import EngagementOptions from '../../components/EngagementOptions'


//Styling - Styled Components
const PostContainer = styled.div`
    background-color: white;
    padding: 10px;
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5px;
`

const RankTitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`

export default function View() {
    return(
        <PostContainer>
            <RankTitleDiv>
                <PostRank />
                <PostTitle />
            </RankTitleDiv>
            <PostBody />
            <PostAuthor />
            <PodcastTile />
            <EngagementOptions/>
        </PostContainer>
    )
}