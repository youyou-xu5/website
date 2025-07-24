import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.scss"
import './App.scss'
import App from './App.jsx'
import './lang/i18n';  // 引入 i18n 配置

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
