import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [gastos, setGastos] = useState([]);

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidadPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 300);
    }

    //console.log('Componente listo');
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true);
    }, 300);
  }

  const guardarGastos = (gasto) => {
    console.log(gasto)
    if (gasto.id) {
      //Actualizar el gasto
      const gastosActualizado = gastos.map(
        gastoState =>
          (gastoState.id === gasto.id) ?
            gasto :
            gastoState
      )
      gasto.fecha = Date.now()
      setGastos(gastosActualizado);

    } else {
      //Nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto]);
    }

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);

  }

  return (
    <>
      <div className={modal ? 'fijar' : ''}>
        <Header
          gastos={gastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidadPresupuesto={isValidadPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>
      {isValidadPresupuesto && (
        <>
          <main>
            <ListadoGastos
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              gastoEditar={gastoEditar}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt='Icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGastos={guardarGastos}
          gastoEditar={gastoEditar}
        />
      }
    </>
  )
}

export default App
