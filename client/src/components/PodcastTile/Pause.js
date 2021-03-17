import React from 'react'

const Pause = ({togglePlaybackStatus}) => {
  return (
    <svg viewBox="0 0 1 1" onClick={() => togglePlaybackStatus()}>
        <g>
            <path d="M.15.15h.262v.7H.15zM.588.15H.85v.7H.588z" />
        </g>
    </svg>
  )
}

export default Pause