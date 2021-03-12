import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const Container = styled.div`
    height: 164px;
    border-radius: 8px;
    background-color: lightgray;
    margin-top: 10px;
    padding: 10px;
`

export default function View() {
    return(
        <Container>
            Podcast Tile
        </Container>
    )
}