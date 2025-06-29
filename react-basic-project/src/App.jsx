import { useState } from 'react'
import Login from './components/form-practice/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Login/>
    </div>
    </>
  )
}

export default App
