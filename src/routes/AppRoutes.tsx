import { Routes, Route } from 'react-router-dom'

import MainLayout from "../layouts/MainLayout";

import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Reservations from '../pages/Reservations'
import NotFound from '../pages/NotFound'

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/reservations" element={<Reservations />} />
    <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default AppRoutes
