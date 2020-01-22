import React, { Component } from 'react'

import Icons from './components/Icons'
import Tools from './components/Tools'
import Projects from './components/Projects'

import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container px-3 px-lg-5 py-5 bg-white shadow">
          <div
            className="text-center display-4"
            style={{ fontWeight: 200, fontSize: 48 }}
          >
            Blake Mason
          </div>
          <div
            className="text-center mt-3 mb-5"
            style={{ fontWeight: 200, fontSize: 36 }}
          >
            Web Portfolio
          </div>
          <hr className="mb-3 mt-4" />
          <Icons />
          <hr className="mb-5 mt-3" />
          <Tools />
          <Projects />
        </div>
      </div>
    )
  }
}

export default App
