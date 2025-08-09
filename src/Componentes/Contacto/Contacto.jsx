import React from 'react'
import './Contacto.css'
import { Link } from 'react-router';

function Contacto({ id, nombre, descripcion, last_connection, avatar }) {
    return (
        <Link to={`/contact/${id}/messages`} style={{ textDecoration: 'none', color: 'inherit' }} >
            <div className="contenedor">
                <div className="contacto">
                    <div className="avatar">
                        <img src={avatar} alt={`${nombre} avatar`}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '2px solid white'
                            }} />
                    </div>
                    <div className="datos">
                        <div className="nombre">
                            <p>{nombre}</p>
                            <span> {descripcion} </span>
                            
                            <div className='detalles'>
                                <span>{last_connection}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Link>
    )
}

export default Contacto