import React from 'react'

const Play = ({togglePlaybackStatus}) => {
  return (
      <svg viewBox="0 0 60 60" onClick={()=> togglePlaybackStatus()}>
        <polygon points="0,0 50,30 0,60" />
      </svg>
  )
}

export default Play