import React from 'react'

import Tool from './Tool'

import tools from '../data/toolList'

function Tools() {
  return (
    <div className="mb-5">
      <div
        className="d-inline-block h-1 position-relative"
        style={{ marginBottom: 28 }}
      >
        <div style={{ zIndex: 1 }} className="position-relative">
          Tools
        </div>
        <div
          className="border-bottom position-absolute w-100"
          style={{ bottom: 2 }}
        />
      </div>
      <div style={{ marginLeft: -4, marginRight: -4 }}>
        {tools.map((tool, i) => (
          <Tool key={`tool-${i}`} name={tool[0]} url={tool[1]} icon={tool[2]} />
        ))}
      </div>
    </div>
  )
}

export default Tools
