import { useState, useEffect } from 'react'
import Filtros from './components/Filtros';
import Header from './components/Header'
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import { generarId } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );

  const [isValidadPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('');
    useEffect(() => {
      if (Object.keys(gastoEditar).length > 0) {
        setModal(true);

        setTimeout(() => {
          setAnimarModal(true);
        }, 300);
      }

      //console.log('Componente listo');
    }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? 0)
  }, [gastos])

  //Este useEffect es para pasarte a la ventana de gastos si hay un presupuesto válido en el localStorage
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  });

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
      setGastoEditar({})

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

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id)

    setGastos(gastosActualizados);
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
            <Filtros

            />
            <ListadoGastos
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              gastoEditar={gastoEditar}
              eliminarGasto={eliminarGasto}
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
          setGastoEditar={setGastoEditar}
        />
      }
    </>
  )
}

export default App
