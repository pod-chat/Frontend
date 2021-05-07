import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user_id: null,
        user_display_name: '',
        user_email: '',
        user_handle: '',
        user_image: '',
        user_created_on: ''
    },
    reducers: {
        initializeUser: ( state, action ) => {
            const {
                user_id,
                user_display_name,
                user_email,
                user_handle,
                user_image,
                user_created_on } = action.payload;

            state.user_id = user_id;
            state.user_display_name = user_display_name;
            state.user_email = user_email;
            state.user_handle = user_handle;
            state.user_image = user_image;
            state.user_created_on = user_created_on;
        }
    }
});

export const {initializeUser} = userSlice.actions;
export default userSlice.reducer;
