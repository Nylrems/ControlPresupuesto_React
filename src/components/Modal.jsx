import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = (e) => {
        e.preventDefault();

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false);
        }, 500)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt='Cerrar modal'
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre gasto</label>

                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el nombre del gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>

                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Añade la cantidad'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Nombre gasto</label>

                    <select
                        id='categoria'
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorros">Ahorros</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Añadir gasto"
                />
            </form>
        </div>
    )
}

export default Modal