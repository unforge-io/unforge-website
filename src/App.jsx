import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Company from './pages/Company'
import TechDocs from './pages/TechDocs'
import ComingSoon from './pages/ComingSoon'

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
        <Route path="/login"     element={<ComingSoon title="Sign In" desc="The Auth51 console is coming soon." />} />
        <Route path="/signup"    element={<ComingSoon title="Create Account" desc="Early access is invite-only for now." />} />
        <Route path="/dashboard" element={<ComingSoon title="Dashboard" desc="Your console is being built." />} />
      </Routes>
    </BrowserRouter>
  )
}
