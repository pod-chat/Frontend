import React from 'react';
import styled from 'styled-components';

//Component Imports
import NewPostForm from './NewPostForm';

//Styling
const NewPostContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

//Component
export default function View() {
    return(
        <NewPostContainer>
            <NewPostForm />
        </NewPostContainer>

    )
}
