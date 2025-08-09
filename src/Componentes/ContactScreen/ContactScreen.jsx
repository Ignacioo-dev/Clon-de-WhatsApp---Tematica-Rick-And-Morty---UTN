import React, { useState } from 'react';
import Contacto_List from '../Contactos_List/Contacto_List';
import { getContactList } from '../../Servicios/JS_Servis_Contac';
import './ContactScreen.css'



const ContactScreen = () => {
    const contacts = getContactList();
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div>
            <div className="titulo">
                <h1>Contactos</h1>    
            </div>
            
            <div>
                <Contacto_List contactos={contactsState} />
            </div>
        </div>
    );
}

export default ContactScreen;
