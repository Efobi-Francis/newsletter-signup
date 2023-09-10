import { createBrowserRouter,createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import Home from './pages/Home';
import Success from './pages/Success'

import RootLayout from './layouts/RootLayout';
import './App.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="success" element={<Success />} />
    </Route>
  )
);

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
