import React from 'react'

function Bootcamp({ link, name, picture, description }) {
  return (
    <>
      <div className="mb-4 border-bottom pb-1">
        <div className="d-flex align-items-center">
          {/* <img
            src={picture}
            style={{ height: 40 }}
            className="rounded border shadow"
            alt="bootcamp"
          /> */}
          <div className="mb-2">
            <a
              href={link}
              style={{ fontSize: '1.6rem' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{name}</strong>
            </a>
          </div>
        </div>
        <div
          style={{
            fontSize: 16,
            lineHeight: 1.5,
            textJustify: 'inter-word',
            textAlign: 'justify'
          }}
        >
          {description}
        </div>
      </div>
      <div className="d-inline-block h-1 position-relative ml-2 mb-3">
        <div
          className="h3 mb-0 position-relative"
          style={{ fontWeight: 300, zIndex: 1 }}
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
