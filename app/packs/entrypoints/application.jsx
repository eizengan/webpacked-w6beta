import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../components/hello_component'

document.addEventListener('turbolinks:load', () => {
  const container = document.getElementById('hello-component-container')
  ReactDOM.render(<Hello names={['Aaron','AJ','Mark','Mitch','Nate']} />, container)
})
