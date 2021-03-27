import React from 'react'
import styled from 'styled-components'

// Styling
const Reply = styled.div`
    padding: 0px 0px 6px 0px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    margin-left: 20px;
`

export default function CommentReply() {
    return (
        <Reply>
            <div>↪ Reply</div>
        </Reply>
    )
}