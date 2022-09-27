import React, { Component } from 'react'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import BadgeComponent from './components/BadgeComponent'

export class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarComponent/>
        <FormComponent/>
        <BadgeComponent/>
      </div>
    )
  }
}

export default App
