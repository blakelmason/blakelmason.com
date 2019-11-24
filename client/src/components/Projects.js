import React from 'react'
import uciProjects from '../data/uci-projects'
import uci from '../images/uci.png'
import hr from '../images/hr.png'
import hrProjects from '../data/hr-projects'
import githubPNG from '../images/github.png'
import styled from 'styled-components'

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
          <Bootcamp
            link="https://www.hackreactor.com/"
            name="Hack Reactor Software Engineer Immersive"
            picture={hr}
            description={`An advanced coding bootcamp focused on building autonomous 
            software engineers. By the end, each individual is an expert software engineer, 
            capable of tackling unique and unfamiliar problems, and building 
            complex applications.`}
          />
          <div>
            {hrProjects.map((project, i) => (
              <Project key={`hr-project-${i}`} {...project} />
            ))}
          </div>
        </div>
        <div className="border-bottom border-dark my-5" />
        <div>
          <Bootcamp
            link="https://bootcamp.ce.uci.edu/coding/"
            name="UCI Coding Bootcamp"
            picture={uci}
            description="The Coding Boot Camp at UCI Continuing Education’s full stack
                web development program teaches the key skills for front-end and
                back-end development, all while preparing individuals for
                success in the professional world."
            projects={uciProjects}
          />
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

function Bootcamp({ link, name, picture, description }) {
  return (
    <div className="d-flex mb-3">
      <img
        src={picture}
        style={{ height: 75 }}
        className="rounded border shadow"
        alt="bootcamp"
      />
      <div className="ml-2">
        <div>
          <a
            href={link}
            style={{ fontSize: '1.6rem', lineHeight: 1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{name}</strong>
          </a>
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}

const Image = styled.img`
  opacity: 0.2;
  height: 16px;
  bottom: 1px;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`

function Project({ name, url, description, tools, github }) {
  return (
    <div className="mx-3" style={{ marginTop: 36, marginBottom: 36 }}>
      <div style={{ fontSize: '1.3rem', lineHeight: 1 }} className="mb-2">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <strong>{name}</strong>
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src={githubPNG}
            alt="github"
            className="ml-1 position-relative"
          />
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
