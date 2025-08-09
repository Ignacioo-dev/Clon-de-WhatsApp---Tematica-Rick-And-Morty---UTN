import React from 'react';
import './Menssage.css';

export const Menssage = ({ emisor, hora, id, texto, status, deleteMenssageBy_id }) => {
    const styls_mensggaje = emisor === "OTRO"
        ? "contenedor derecha"
        : "contenedor izquierda"

    return (
        <div className="contenedor">

            <div className={styls_mensggaje}>

                <div className="mensaje">
                    <p>{texto}</p>
                </div>
                <div className="datos">
                    <button onClick={() => deleteMenssageBy_id(id)}>Borrar</button>
                    <span>{hora}</span>
                </div>
            </div>

        </div>
    );
};
