import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom' 
import Router from './routes/routes'
import Global from './style/GlobalStyled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Router />
    </BrowserRouter>
    <Global/>
  </React.StrictMode>,
)
