import React, { Component } from 'react'
import Icons from './components/Icons'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="bg-light">
        <div
          className="container border-right border-left p-5 bg-white shadow"
          style={{ minWidth: 1000, minHeight: '100vh' }}
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
      </div>
    )
  }
}

export default App
