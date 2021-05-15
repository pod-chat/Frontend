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
            state.popularPosts.push(action.payload)
        }
    }
});

export const { addPopPost } = popPostsSlice.actions;

export const getPopPosts = () => {
    return (dispatch) => {
        axios.get('https://podchatapi.herokuapp.com/api/posts')
            .then(res => {
                const postsWithoutPod = res.data
                for (const i in postsWithoutPod) {
                    const post = postsWithoutPod[i]
                    getPodcastEpisode(post.podcast_episode_id)
                        .then(res => {
                            const postWithPod = {...post, podcast: res}
                            dispatch(addPopPost(postWithPod))
                        })
                }
            })
            .catch(err => {
                console.log("getPodData Error", err)
            });
    }
};

export const popPosts = state => state.popPosts;
export default popPostsSlice.reducer;
