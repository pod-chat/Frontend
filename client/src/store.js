import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Authentication/Login/userSlice';


export default configureStore({
    
    reducer: { 
        user: userReducer,
    }
});