import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const NavBar = styled.div`
    width: 100vw;
    height: 44px;
    background-color: lightgray;
`

export default function View() {
    return(
        <NavBar>
            Hello, World!
        </NavBar>
    )
}