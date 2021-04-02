import {
    FETCH_EPISODES_START,
    FETCH_EPISODES_SUCCESS,
    FETCH_EPISODES_FAILURE,
} from '../actions'

const initialState = {
    isLoading: false,
    error: '',
    searchResults: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EPISODES_START:
            return {
              ...state,
              isLoading: true
            };
        case FETCH_EPISODES_SUCCESS:
            return {
              ...state,
              searchResults: action.payload,
              isLoading: false,
              error: ''
            };
        case FETCH_EPISODES_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.payload
            };
        default: 
            return state;
    }
}