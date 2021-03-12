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
`
const Upvote = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid black;
    padding-right: 10px;
`
const DownVote = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
`

export default function VoteButtons() {

    return (
        <ButtonsDiv>
            <Upvote>
                <div>⬆</div>
                <div>23.4K</div>
            </Upvote>
            <DownVote>
                <div>⇩</div>
            </DownVote>
        </ButtonsDiv>
    )
}