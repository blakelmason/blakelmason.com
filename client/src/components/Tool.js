import React from 'react'

function Tool({ name, url }) {
  return (
    <div className="d-inline-block m-1">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-light btn-sm"
      >
        {name}
      </a>
    </div>
  )
}

export default Tool
