import styled from 'styled-components';
import { useState, useContext } from 'react';
import SearchContext from './searchContext';
import fetchEpisodes from './fetchEpisodes';


// STYLING //
const SearchForm = styled.form`
    margin: 0 auto;
    width: 40%;
    height: 66px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SearchInput = styled.input`
    height: 36px;
    border: 1px solid #D6D6D6;
    border-right: none;
    border-radius: 10px 0px 0px 10px;
    padding: 0px 15px;
    font-size: 15px;
    &:focus {
        outline: 0;
        box-shadow: 0 0 1pt 1pt inset darkblue; 
    }
`
const SearchButton = styled.button`
    border: 1px solid #D6D6D6;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    height: 38px;
    padding: 6px;
    &:focus {
        outline: 0;
    }
    svg {
        height: 22px;
        width: 22px;
    }

`


const SearchPodForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const {loading, errors, results} = useContext(SearchContext);
    const [, setIsLoading] = loading;
    const [, setError] = errors;
    const [, setSearchResults] = results;

    const onChange = evt => {
        setSearchValue(evt.target.value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        setIsLoading(true);
        const searchUrlString = encodeURIComponent(searchValue.trim())
        fetchEpisodes(searchUrlString)
            .then(res => {
                setSearchResults(res.episodes)
            })
            .catch(err => {
                setError(err.error)
            })
        setIsLoading(false);
    }

    return (
       <SearchForm onSubmit={onSubmit}>
           <SearchInput name='search' type='text' placeholder='Search Podcast Episodes...' value={searchValue} onChange={onChange}></SearchInput>
           <SearchButton>
               <svg x="0px" y="0px" width="30.239px" height="30.239px" viewBox="0 0 30.239 30.239">
                    <g>
                    <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
                        c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
                        c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
                        M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
                        C21.517,9.026,21.517,14.63,18.073,18.074z"/>
                    </g>
                </svg>
            </SearchButton>
       </SearchForm>
    )
}

export default SearchPodForm;
