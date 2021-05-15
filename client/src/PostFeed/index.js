import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPopPosts, popPosts } from './popPostsSlice';

//Component Imports
import View from "./View";

export default function PostFeed() {
    //TODO: if new posts selected, useSelector would pick newPosts (not created yet)
    const posts = useSelector(popPosts).popularPosts;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPopPosts())
    }, []);
    
    return (
        <View posts={posts}/>
    )
}
