import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGastos }) => {

    const [mensaje, setMensaje] = useState('');
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [gastos, setGastos] = useState([])

    const ocultarModal = (e) => {
        e.preventDefault();

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false);
        }, 500)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son necesarios...');

            setTimeout(() => {
                setMensaje('');
            }, 3000)
            return;
        }

        guardarGastos({ nombre, cantidad, categoria })

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
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje &&
                    <Mensaje tipo="error">{mensaje}</Mensaje>
                }
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre gasto</label>

                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>

                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Añade la cantidad'
                        value={cantidad}
                        onChange={e => setCantidad(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Nombre gasto</label>

                    <select
                        id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
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