import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidadPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);
  }

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
      {isValidadPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt='Icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <p>Desde el modal</p>}
    </>
  )
}

export default App
