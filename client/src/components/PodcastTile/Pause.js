import React from 'react'
import styled from 'styled-components'

// STYLING //
const PauseButton = styled.svg`
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`

const Pause = ({togglePlaybackStatus}) => {
  return (
    <PauseButton viewBox="0 0 1 1" onClick={() => togglePlaybackStatus()}>
        <g>
            <path d="M.15.15h.262v.7H.15zM.588.15H.85v.7H.588z" />
        </g>
    </PauseButton>
  )
}

export default Pause