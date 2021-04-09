import {useContext} from 'react';
import SearchContext from './searchContext';
import PodResult from './PodResult'

const SearchPodResults = () => {
    const {loading, errors, results} = useContext(SearchContext);
    const [isLoading, setIsLoading] = loading;
    const [error, setError] = errors;
    const [searchResults, setSearchResults] = results;

    return (
        <div>
            {isLoading ? <h3>Searching...</h3> : null}
            {error ? <p style={{ color: "red" }}>{error}</p> : null}
            {
                searchResults.map((pod) => (
                    <PodResult key={pod.id} pod={pod}/>
                ))
            }
        </div>
    )
}

export default SearchPodResults;
