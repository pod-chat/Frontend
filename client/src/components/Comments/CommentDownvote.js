import React from 'react'
import styled from 'styled-components'

// Styling
const Downvote = styled.div`
    padding: 0px 0px 6px 0px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    margin-left: 20px;
`

export default function CommentDownvote() {
    return (
        <Downvote>
            <div>⬇</div>
        </Downvote>
    )
}