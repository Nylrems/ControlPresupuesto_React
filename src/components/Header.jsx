import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'


const Header = ({
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
                    <p>Control Presupuesto</p>
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