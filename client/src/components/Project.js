import React from 'react'
import styled from 'styled-components'

import githubPNG from '../images/github.png'

const Image = styled.img`
  opacity: 0.2;
  height: 16px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s;
  position: absolute;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`

function Project({ name, url, description, tools, github }) {
  return (
    <div className="px-3 mb-4">
      <div style={{ fontSize: '1.3rem' }}>
        <div className="d-flex mb-1">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <strong>{name}</strong>
          </a>
          <div className="d-flex align-items-center">
            <a
              style={{ width: 16, height: 16, marginLeft: 6 }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubPNG} alt="github" />
            </a>
          </div>
        </div>
        <div
          className="text-muted d-flex flex-wrap"
          style={{
            fontSize: '.9rem',
            marginLeft: -4,
            marginRight: 4,
            marginBottom: 6
          }}
        >
          {tools.map((tool, i) => (
            <div className="m-1" key={`project-tool-${i}`}>
              {tool}
              {i === tools.length - 1 ? '' : ','}
            </div>
          ))}
        </div>
      </div>
      <div
        className="d-inline-block"
        style={{
          lineHeight: 1.5,
          textJustify: 'inter-word',
          textAlign: 'justify'
        }}
      >
        - {description} <hr className="mt-1 mb-0" />
      </div>
    </div>
  )
}

export default Project
