import React from 'react'
import styled from 'styled-components'

// Styling
const Upvote = styled.div`
    padding: 0px 0px 6px 0px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
`

export default function CommentUpvote() {
    return (
        <Upvote>
            <div>⬆ Upvote · <span style={{fontWeight: 300}}>23.4k</span></div>
        </Upvote>
    )
}