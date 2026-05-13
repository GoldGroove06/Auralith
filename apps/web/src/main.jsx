import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radui/ui/themes/default.css";
import Theme from "@radui/ui/Theme";
import Navabar from './components/ui/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Theme appearance="dark" accentColor="teal">
      <Navabar />
            <App />
        </Theme>
  </StrictMode>,
)
