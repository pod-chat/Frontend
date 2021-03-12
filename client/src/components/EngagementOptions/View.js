import React from 'react'
import styled from 'styled-components'

//Component Import
import VoteButtons from './VoteButtons'
import CommentButton from './CommentButton'
import ShareButton from './ShareButton'
import OptionsButton from './OptionsButton'

//Styling - Styled Components
const EngOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const VoteCommentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

const ShareOptionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default function View() {
    return(
        <EngOptionsContainer>
            <VoteCommentContainer>
                <VoteButtons />
                <CommentButton />
            </VoteCommentContainer>
            <ShareOptionsContainer>
                <ShareButton />
                <OptionsButton />
            </ShareOptionsContainer> 
        </EngOptionsContainer>
    )
}