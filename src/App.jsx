import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Research from './pages/Research'
import Products from './pages/Products'
import Founders from './pages/Founders'
import Company from './pages/Company'
import ComingSoon from './pages/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"         element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/products" element={<Products />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/company"  element={<Company />} />
          <Route path="/docs"     element={<ComingSoon title="Documentation" desc="Our developer docs are coming soon." />} />
        </Route>
        <Route path="/login"     element={<ComingSoon title="Sign In" desc="The NovaAuth console is coming soon." />} />
        <Route path="/signup"    element={<ComingSoon title="Create Account" desc="Early access is invite-only for now." />} />
        <Route path="/dashboard" element={<ComingSoon title="Dashboard" desc="Your console is being built." />} />
      </Routes>
    </BrowserRouter>
  )
}
