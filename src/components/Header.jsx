import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({
    gastos,
    presupuesto,
    setPresupuesto,
    isValidadPresupuesto,
    setIsValidPresupuesto
}) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>

            {isValidadPresupuesto ?
                (
                    <ControlPresupuesto
                        gastos={gastos}
                        presupuesto={presupuesto}
                    />
                ) :
                (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )
            }
        </header>
    )
}

export default Header