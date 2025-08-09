import React, { useState } from 'react'
import ChatScreen from './Componentes/ChatScreen/ChatScreen.jsx'
import "./styls.css"
import { Route, Routes, useParams } from 'react-router'
import ContactScreen from './Componentes/ContactScreen/ContactScreen.jsx'
import Inicio from './Componentes/Pantalla_Inicio/Inicio.jsx'

const App = () => {
    const [activeContact, setActiveContact] = useState(null);
    return (
        <div className='App'>
            <div className="pantalla_dividida">
                <div className="contacts-column">
                    <ContactScreen
                        onContactSelect={setActiveContact} // Pasamos función para actualizar el contacto activo
                    />
                </div>
                <div className="chat">
                    <Routes>
                        <Route className='ContactScreen'
                            path='/'
                            element={<Inicio />}
                        />
                        <Route
                            path='/contact/:contact_id/messages'
                            //Para comprobar si la ruta funciona seguido al "Localhost" pega el path asingado

                            /*/:contac_Id <- Es un parametro de busqueda* /
        
                            /* Ponemos /:contac_Id para indicar que el valor es variable */
                            element={<ChatScreen />}
                        />
                    </Routes>
                </div>

            </div>
        </div>
    )
}



export default App