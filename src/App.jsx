import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidadPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidadPresupuesto={isValidadPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>

    </>
  )
}

export default App
