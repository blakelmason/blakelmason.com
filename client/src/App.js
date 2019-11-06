import React, { Component } from 'react'
import Tool from './components/Tool'
import Project from './components/Project'

import './App.scss'

import toolList from './toolList'
import projects from './projects'

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="mb-5 mt-sm-5"
          style={{
            background: 'rgb(0,0,0,.5)',
            paddingTop: 22,
            paddingBottom: 37,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="text-white display-4"
                  style={{ marginBottom: 25 }}
                >
                  Blake Mason - Web Portfolio
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: 1,
                  }}
                >
                  <div
                    className="text-white display-4 mr-2 ml-1 my-1 position-relative"
                    style={{
                      height: 31,
                      fontSize: '1.6rem',
                      bottom: 2,
                    }}
                  >
                    Tools :
                  </div>
                  {toolList.map((tool, index) => (
                    <Tool
                      text={tool[0]}
                      link={tool[1]}
                      key={tool[0]}
                      time={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3 mb-sm-5">
          <div className="row">
            <div className="col">
              <div
                style={{
                  display: 'grid',
                  gridGap: 30,
                  gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
                }}
              >
                {projects.map(project => (
                  <Project key={project.name} {...project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App