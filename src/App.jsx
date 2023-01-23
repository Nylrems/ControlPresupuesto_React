import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidadPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 300)
  }

  const guardarGastos = (gasto) => {
    console.log(gasto);
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

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
        />
      }
    </>
  )
}

export default App
