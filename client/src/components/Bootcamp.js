import React from 'react'

function Bootcamp({ link, name, picture, description }) {
  return (
    <>
      <div className="d-flex mb-4 border-bottom pb-4">
        <img
          src={picture}
          style={{ height: 86 }}
          className="rounded border shadow"
          alt="bootcamp"
        />
        <div className="ml-4">
          <a
            href={link}
            style={{ fontSize: '1.6rem' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{name}</strong>
          </a>
          <div>{description}</div>
        </div>
      </div>
      <div className="d-inline-block h-1 position-relative ml-2 mb-3">
        <div
          className="h3 mb-0 position-relative"
          style={{ fontWeight: 200, zIndex: 1 }}
        >
          Projects
        </div>
        <div
          className="border-bottom position-absolute w-100"
          style={{ bottom: 3 }}
        />
      </div>
    </>
  )
}

export default Bootcamp
