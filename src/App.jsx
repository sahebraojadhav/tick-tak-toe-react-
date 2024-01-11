import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from './components/Icon/Icon'
import Card from './components/card/card'
import Grid from './components/Grid/Grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Grid numberOfCards={9}/>

    </>
  )
}

export default App;
