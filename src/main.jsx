import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router";
import 'aos/dist/aos.css';
import { router } from './Router/Router.jsx';
import Aos from 'aos';
Aos.init()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="font-urbanist max-w-7xl mx-auto">
      <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
