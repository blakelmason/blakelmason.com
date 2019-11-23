import React from 'react'
import uciProjects from '../data/uci-projects'
import uci from '../images/uci.png'

function Projects() {
  return (
    <div>
      <div
        className="d-inline-block h-1 position-relative"
        style={{ marginBottom: 36 }}
      >
        <div style={{ zIndex: 1 }} className="position-relative">
          Projects
        </div>
        <div
          className="border-bottom position-absolute w-100"
          style={{ bottom: 2 }}
        />
      </div>
      <div>
        <div>
          <div className="d-flex mb-3">
            <img
              src={uci}
              style={{ height: 75 }}
              className="rounded border shadow"
              alt="uci"
            />
            <div className="ml-2">
              <div>
                <a
                  href="https://bootcamp.ce.uci.edu/coding/"
                  style={{ fontSize: '1.6rem', lineHeight: 1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>UCI Coding Bootcamp</strong>
                </a>
              </div>
              <div>
                The Coding Boot Camp at UCI Continuing Education’s full stack
                web development program teaches the key skills for front-end and
                back-end development, all while preparing individuals for
                success in the professional world.
              </div>
            </div>
          </div>
          <div>
            {uciProjects.map((project, i) => (
              <Project key={`uci-project-${i}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Project({ name, url, description, tools }) {
  return (
    <div className="mx-3" style={{ marginTop: 36, marginBottom: 36 }}>
      <div style={{ fontSize: '1.3rem', lineHeight: 1 }} className="mb-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <strong>{name}</strong>
        </a>
        <div
          className="text-muted mt-2"
          style={{ fontSize: '.9rem', marginLeft: -4, marginRight: 4 }}
        >
          {tools.map((tool, i) => (
            <span className="m-1" key={`project-tool-${i}`}>
              {tool}
              {i === tools.length - 1 ? '' : ','}
            </span>
          ))}
        </div>
      </div>
      <div>{description}</div>
      <hr className="mt-0" />
    </div>
  )
}

export default Projects
