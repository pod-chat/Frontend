import React, {useState, createContext} from 'react';

//Import Components
import View from './View'

// CONTEXT 
import SearchContext from './searchContext'

export default function SearchPod() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <SearchContext.Provider value={{loading: [isLoading, setIsLoading], errors: [error, setError], results: [searchResults, setSearchResults]}} >
            <View />
        </SearchContext.Provider>
    )
}

