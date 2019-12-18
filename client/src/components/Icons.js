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
      'https://drive.google.com/file/d/1qwaMvR7uCzyPML54YIuY2liKJm_IgyN_/view?usp=sharing',
    name: 'Resume'
  }
]

const opacity = '0.5'

const Icon = styled.img`
  background: white;
  opacity: ${opacity};
  transform: scale(1);
  transition: all 0.2s;
  height: 30px;
  width: 30px;
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
    opacity: 1;
    transform: scale(1.1);
  }
  &:hover ${Line} {
    width: 100%;
  }
`

function Icons() {
  return (
    <div className="d-flex ml-auto">
      {icons.map((icon, i) => (
        <Link
          key={`icon-${i}`}
          className="d-flex flex-column align-items-center mx-3"
        >
          <a href={icon.url} target="_blank" rel="noopener noreferrer">
            <Icon src={icon.image} alt="icon" className="img-fluid" />
          </a>
          <div
            style={{ fontSize: '.6rem', marginTop: 2 }}
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
