import React from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'

const Project = ({ name, d1, d2, tools, github, url }) => {
  return (
    <Card
      style={{
        boxShadow: '.2rem .2rem 1rem rgba(0,0,0,.6)',
        background: 'rgba(0,0,0,.8)',
      }}
      className="text-light hover animated fadeIn slow"
    >
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="mb-1">{name}</Card.Title>
        <Card.Subtitle
          className="text-muted mt-0"
          style={{
            marginBottom: 12,
          }}
        >
          {tools.map((tool, index) => {
            if (index + 1 === tools.length) return tool
            else return `${tool}, `
          })}
        </Card.Subtitle>
        <Card.Text
          className="mb-3 h-100 d-flex flex-column justify-content-between"
          style={{
            whiteSpace: 'pre-wrap',
          }}
        >
          
          <span>{d1}</span>
          {d2 &&
            <span>
              <span className="d-block" style={{height: '1px', background: 'white', opacity: '.5', marginTop: '10px', marginBottom: '10px'}}/>
              <span>{d2}</span>
            </span>
          }
        </Card.Text>
        <ButtonGroup className="w-100" size="sm">
          <Button
            className="w-50"
            variant="outline-primary"
            onClick={() => window.open(url, '_blank')}
          >
            App
          </Button>
          <Button
            className="w-50"
            variant="outline-primary"
            onClick={() => window.open(github, '_blank')}
          >
            Github
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  )
}

export default Project
