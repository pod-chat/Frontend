import React from 'react'
import styled from 'styled-components'

//Styling - Styled Components
const RankDiv = styled.div`
    height: 40px;
    font-size: 13px;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkgray;
`

export default function PostRank() {

    return (
        <RankDiv>
            <div>100</div>
            <div>20d</div>
        </RankDiv>
    )
}