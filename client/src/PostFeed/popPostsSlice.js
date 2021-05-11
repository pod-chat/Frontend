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
            state.popularPosts = action.payload
        }
    }
});

export const { addPopPost } = popPostsSlice.actions;

export const getPopPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await axios.get('https://podchatapi.herokuapp.com/api/posts')
            const postsWithPodData = posts.data.map(post => {
                const podData = getPodcastEpisode(posts.podcast_episode_id)
                return {...post, podcast: podData.data}
            })
            dispatch(addPopPost(postsWithPodData))
        }
        catch(err) {
            console.log("getPopPosts Error", err)
        }
    }
};

// export const getPodData = (posts) => {
//     return async (dispatch) => {
//         try {
//             for (let i = 0; i < posts.length(); i++) {
//                 const podData = await getPodcastEpisode(posts[i].podcast_episode_id)
//                 dispatch(addPodData({index: i, podData: podData.data}))
//             }
//         }
//         catch (err) {
//             console.log("getPodData Error", err)
//         }
//     }
// }


export const popPosts = state => state.popPosts;
export default popPostsSlice.reducer;
