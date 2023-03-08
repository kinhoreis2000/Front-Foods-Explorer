import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <ThemeProvider theme = {theme}>
      <Router>
        <GlobalStyles/>
          <Home />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
