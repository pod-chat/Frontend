import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const ButtonsDiv = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
    padding: 0px 5px;
`


export default function ShareButton() {

    return (
        <ButtonsDiv>
            📲
        </ButtonsDiv>
    )
}