import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Authentication/Login/userSlice';
import popPostsReducer from './PostFeed/popPostsSlice'


const store = configureStore({
    reducer: { 
        user: userReducer,
        popPosts: popPostsReducer
    }
});

export default store;
