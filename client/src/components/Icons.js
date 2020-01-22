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
    url: 'https://github.com/blakelmason/resume/raw/master/resume.pdf',
    name: 'Resume'
  }
]

const Icon = styled.img`
  background: white;
  transform: scale(1);
  transition: all 0.2s;
  height: 40px;
  width: 40px;
  border-radius: 4px;
`

const Line = styled.div`
  width: 0%;
  border-top: 1px solid #dee2e6;
  transition: all 0.3s ease-in-out;
`

const Link = styled.div`
  cursor: pointer;
  &:hover ${Icon} {
    transform: scale(1.1);
  }
  &:hover ${Line} {
    width: 100%;
  }
`

function Icons() {
  return (
    <div className="d-flex justify-content-around">
      {icons.map((icon, i) => (
        <Link
          key={`icon-${i}`}
          className="d-flex flex-column align-items-center mx-3"
        >
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <Icon src={icon.image} alt="icon" className="img-fluid" />
          </a>
          <div
            style={{ fontSize: 12, marginTop: 6 }}
            className="text-center d-flex flex-column align-items-center"
          >
            <div>{icon.name}</div>
            <div style={{ width: '105%' }}>
              <Line />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Icons
