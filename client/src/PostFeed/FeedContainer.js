import React from 'react'
import styled from 'styled-components'

//Component Imports
import FeedPost from './FeedPost'

//Styling - Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function FeedContainer() {

    return (
        <Container>
             <FeedPost />
        </Container>
    )
}