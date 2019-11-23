import React from 'react'
import styled from 'styled-components'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import resume from '../images/resume.png'

const icons = [
  { image: github, url: 'https://github.com/blakelmason', name: 'Github' },
  {
    image: linkedin,
    url: 'https://www.linkedin.com/in/blakelmason/',
    name: 'LinkedIn'
  },
  {
    image: resume,
    url:
      'https://drive.google.com/file/d/1PCrxfltb_yVgxU4xOWQYHRP-yP5Y2psp/view?usp=sharing',
    name: 'Resume'
  }
]

const Icon = styled.img({
  background: 'white',
  opacity: '.2',
  transform: 'scale(1)',
  ':hover': {
    opacity: '1',
    transform: 'scale(1.1)'
  },
  transition: 'all .2s',
  height: 40,
  width: 40,
  cursor: 'pointer',
  borderRadius: '4px'
})

function Icons() {
  return (
    <div className="d-flex ml-auto">
      {icons.map((icon, i) => (
        <div
          key={`icon-${i}`}
          className="d-flex flex-column align-items-center mx-3"
        >
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <Icon src={icon.image} alt="icon" className="img-fluid" />
          </a>
          <div
            style={{ fontSize: '.7rem' }}
            className="text-center mt-1 d-flex flex-column align-items-center"
          >
            {icon.name}
            <div style={{ width: '110%' }}>
              <div className="border-top" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Icons
