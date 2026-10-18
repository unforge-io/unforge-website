import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Company from './pages/Company'
import TechDocs from './pages/TechDocs'

function ConsoleRedirect() {
  useEffect(() => {
    window.location.replace('https://auth51.com/console')
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"         element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company"  element={<Company />} />
          <Route path="/docs"     element={<TechDocs />} />
        </Route>
        <Route path="/login"     element={<ConsoleRedirect />} />
        <Route path="/signup"    element={<ConsoleRedirect />} />
        <Route path="/dashboard" element={<ConsoleRedirect />} />
      </Routes>
    </BrowserRouter>
  )
}
