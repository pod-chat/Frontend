import React from 'react'

const Play = ({togglePlaybackStatus}) => {
  return (
      <svg viewBox="0 0 1.25 1.25" onClick={()=> togglePlaybackStatus()}>
        <path d="M.25.125l1 .5-1 .5z" />
      </svg>
  )
}

export default Play