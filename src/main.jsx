import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom';
import Homepage from './Pages/Homepage.jsx';
import Books from './Pages/Books/Books.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import { router } from './routes/Routes.jsx';
import BookProvider from './context/BookContext.jsx';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
    <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer />
  </StrictMode>,
)
