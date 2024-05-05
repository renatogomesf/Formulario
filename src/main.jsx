import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { theme } from './styles/theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)