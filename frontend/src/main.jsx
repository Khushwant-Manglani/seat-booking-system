import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css'
import App from './App.jsx'
import DialogBox from './components/DialogBox.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/book-seats' element={<DialogBox />} />
        </Route>    
      </Routes>
    </BrowserRouter>
)
