import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import store from '@/stores/store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
//import './index.css'
import theme from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <Provider store={store}>
      <App />
      </Provider>
  </BrowserRouter>
</ThemeProvider>
</React.StrictMode>,
 
)
