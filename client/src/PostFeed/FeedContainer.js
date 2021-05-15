import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { popPosts } from './popPostsSlice';

//TODO: better loading state for when feedposts are loading

//Component Imports
import FeedPost from './FeedPost'

//Styling - Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`

export default function FeedContainer() {
    const posts = useSelector(popPosts).popularPosts;

    return (
        <Container>
            {
                posts ? posts.map(post => {
                    return <FeedPost key={post.post_id} post={post}/>
                }) : "Loading..." 
            }
        </Container>
    )
}