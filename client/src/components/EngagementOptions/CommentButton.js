import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const ButtonsDiv = styled.div`
    font-size: 13px;
    font-weight: 700;
    background-color: lightgray;
    border-radius: 8px;
    height: 30px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 10px;
`


export default function CommentButton() {

    return (
        <ButtonsDiv>
            💬  234
        </ButtonsDiv>
    )
}