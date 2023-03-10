import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, gastoEditar, eliminarGasto }) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'Aún no hay gastos'}</h2>

            {gastos.map((gasto) => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                />
            ))}
        </div>
    )
}

export default ListadoGastos