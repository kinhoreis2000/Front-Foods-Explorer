import React from 'react'
import ReactDOM from 'react-dom/client'
import {NewMeal} from './pages/NewMeal'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <ThemeProvider theme = {theme}>
      <Router>
        <GlobalStyles/>
          <NewMeal />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
