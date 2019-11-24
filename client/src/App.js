import React, { Component } from 'react'
import Icons from './components/Icons'
import Tools from './components/Tools'
import Projects from './components/Projects'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <div
          className="container border-right border-left p-5 bg-white shadow"
          style={{ minWidth: 1140, minHeight: '100vh' }}
        >
          <div className="d-flex align-items-end">
            <div
              className="display-4"
              style={{ lineHeight: 1, fontWeight: 200 }}
            >
              Blake Mason - Web Portfolio
            </div>
            <Icons />
          </div>
          <hr className="mb-5 mt-1" />
          <Tools />
          <Projects />
        </div>
      </div>
    )
  }
}

export default App
