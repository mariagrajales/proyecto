
import { useState } from 'react'
import { MainPage } from './components/pages/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainPage />
  )
}

export default App
