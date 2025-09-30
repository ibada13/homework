import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Aurel from './Aurel'
import {  HashRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    <Aurel />
    </HashRouter>
  </StrictMode>,
)
