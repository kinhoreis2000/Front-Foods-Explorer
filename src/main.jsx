import React from 'react'
import ReactDOM from 'react-dom/client'
import {MealDetails} from './pages/MealDetails'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode >
    <ThemeProvider theme = {theme}>
      <Router>
        <GlobalStyles/>
          <MealDetails />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
