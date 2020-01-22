import React from 'react'

import Project from './Project'
import Bootcamp from './Bootcamp'

import uciProjects from '../data/uci-projects'
import uci from '../images/uci.png'
import hr from '../images/hr.png'
import hrProjects from '../data/hr-projects'

function Projects() {
  return (
    <>
      <div className="d-inline-block h-1 position-relative mb-5">
        <div style={{ zIndex: 1 }} className="position-relative">
          Boot Camps
        </div>
        <div
          className="border-bottom position-absolute w-100"
          style={{ bottom: 3 }}
        />
      </div>
      <div>
        <div className="mb-5">
          <Bootcamp
            link="https://www.hackreactor.com/"
            name="Hack Reactor Software Engineer Immersive"
            picture={hr}
            description={`An advanced coding bootcamp focused on building autonomous software engineers. By the end, each individual is an expert software engineer, capable of tackling unique and unfamiliar problems, and building complex applications.`}
          />
          <div>
            {hrProjects.map((project, i) => (
              <Project key={`hr-project-${i}`} {...project} />
            ))}
          </div>
        </div>
        <div>
          <Bootcamp
            link="https://bootcamp.ce.uci.edu/coding/"
            name="UCI Coding Bootcamp"
            picture={uci}
            description="The Coding Boot Camp at UCI Continuing Education’s full stack web development program teaches the key skills for front-end and back-end development, all while preparing individuals for success in the professional world."
            projects={uciProjects}
          />
          <div>
            {uciProjects.map((project, i) => (
              <Project key={`uci-project-${i}`} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
