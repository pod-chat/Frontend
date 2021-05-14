import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getPodcastEpisode } from '../services/podcastServices';

//TODO: Add loading, error state logic to actions

export const popPostsSlice = createSlice({
    name: 'popPosts',
    initialState: {
        loading: false,
        errors: '',
        popularPosts: []
    },
    reducers: {
        addPopPost: (state, action) => {
            state.popularPosts = (action.payload)
        }
    }
});

export const { addPopPost } = popPostsSlice.actions;

export const getPopPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await axios.get('https://podchatapi.herokuapp.com/api/posts')
            // const postsWithPodData = posts.data.map(async (post) => {
            //     const podData = await getPodcastEpisode(post.podcast_episode_id)
            //     return {...post, podcast: podData ? podData : null}
            // })
            dispatch(addPopPost(posts.data))
        }
        catch(err) {
            console.log("getPopPosts Error", err)
        }
    }
};

export const popPosts = state => state.popPosts;
export default popPostsSlice.reducer;
