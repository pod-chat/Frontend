import React from 'react'
import styled from 'styled-components'

// STYLING //
const PlayButton = styled.svg`
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`

const Play = ({togglePlaybackStatus}) => {
  return (
    <PlayButton viewBox="0 0 1.25 1.25" onClick={()=> togglePlaybackStatus()}>
      <path d="M.25.125l1 .5-1 .5z" />
    </PlayButton>
  )
}

export default Play