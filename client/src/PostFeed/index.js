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
        loadPosts()
    }, []);

    const loadPosts = () => {
        dispatch(getPopPosts())
    }
    console.log(posts) // fires after posts load
    
    return (
        <View posts={posts}/>
    )
}
