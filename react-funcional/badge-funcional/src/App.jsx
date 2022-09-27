import React, { useState } from 'react'
import BadgeComponent from './components/BadgeComponent'
import FormComponent from './components/FormComponent'
import Navbar from './components/Navbar'


function App() {
  const [form, setForm] =useState({
    firstName: '',
    lastName: '',
    username: '',
    jobTitle: '',
  })

  const handleChange =(event)=>{
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="App">
      <Navbar/>
      <FormComponent handleChange={handleChange}/>
      <BadgeComponent form={form}/>
    </div>
  )
}

export default App
