import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    //Es una cpmponente creado por "React-Router"
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

