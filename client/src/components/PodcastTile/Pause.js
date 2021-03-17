import React from 'react'

const Pause = ({togglePlaybackStatus}) => {
  return (
    <svg viewBox="0 0 60 60" onClick={() => togglePlaybackStatus()}>
      <polygon points="0,0 15,0 15,60 0,60" />
      <polygon points="25,0 40,0 40,60 25,60" />
    </svg>
  )
}

export default Pause