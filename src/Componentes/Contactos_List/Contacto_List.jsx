import React from 'react'
import ContactScreen  from '../ContactScreen/ContactScreen.jsx'
import Contacto from '../Contacto/Contacto.jsx'

export default function Contacto_List({ contactos }) {
    const contactoo = contactos.map((contacto) => (
        <Contacto
            key={contacto.id}
            id = {contacto.id}
            nombre={contacto.nombre}
            descripcion={contacto.descrip}
            last_connection={contacto.last_connection}
            avatar={contacto.avatar}
        />
    )
    )
    return (
        <div>{contactoo} </div>
    )
}
