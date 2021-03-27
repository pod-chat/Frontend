import React from 'react'
import styled from 'styled-components'

//PostFeed Components Import
import Comments from '../components/Comments'

//Top Level Components Import
import PodcastTile from '../components/PodcastTile'
import EngagementOptions from '../components/EngagementOptions'
import FullPostAuthor from './FullPostAuthor'
import FullPostTitle from './FullPostTitle'
import FullPostBody from './FullPostBody'


//Styling - Styled Components
const PostContainer = styled.div`
    background-color: white;
    padding: 10px;
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5px;
`
const CommentContainer = styled.div`
    background-color: #f8f8f8;
    padding: 10px;
    max-width: 375px;
    margin: 0 auto;
    margin-bottom: 5px;
`
//Component
export default function View() {
    return(
        <>
            <PostContainer>
                <FullPostAuthor />
                <FullPostTitle />
                <PodcastTile />
                <FullPostBody />
                <EngagementOptions/>
            </PostContainer>
            <CommentContainer>
                <Comments />
            </CommentContainer>
        </>

    )
}