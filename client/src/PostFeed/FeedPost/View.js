import React from 'react'
import styled from 'styled-components'

//PostFeed Components Import
import PostRank from './PostRank'
import PostTitle from './PostTitle'
import PostBody from './PostBody'
import PostAuthor from '../../components/AuthorSmall'

//Top Level Components Import
import PodcastTile from '../../components/PodcastTile'
import EngagementOptions from '../../components/EngagementOptions'


//Styling - Styled Components
const PostContainer = styled.div`
    background-color: white;
    padding: 10px;
    max-width: 340px;
    border-radius: 6px;
    border-top: 8px solid #4E04E0;
    margin: 0 auto;
    margin-bottom: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const RankTitleDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`

export default function View(props) {
    const { post } = props;

    return(
        <PostContainer>
            <RankTitleDiv>
                <PostRank />
                <PostTitle title={post.post_title}/>
            </RankTitleDiv>
            <PostBody body={post.post_body}/>
            <PostAuthor displayName={post.user_display_name} handle={post.user_handle}/>
            <PodcastTile props={post.podcast}/>
            <EngagementOptions/>
        </PostContainer>
    )
}