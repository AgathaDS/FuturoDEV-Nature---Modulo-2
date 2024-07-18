import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import FormContato from './components/FormContato'
import TituloContato from './components/TituloContato'

function App() {

  return (
    <div>
      <Header/>
      <TituloContato/> 
      <FormContato/> 
      <Footer/>
    </div>
  )
}

export default App
