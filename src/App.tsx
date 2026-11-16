import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Category from './pages/Category'
import Article from './pages/Article'
import Search from './pages/Search'
import About from './pages/About'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="app-shell">
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    <div className="main-shell"><Header onMenu={() => setMenuOpen(true)} />
      <main><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div className="page-wrap inner-page"><h1>頁面不存在</h1></div>} />
      </Routes></main>
      <footer className="site-footer"><span>© 2026 AI KNOWLEDGE HUB</span><span>BUILT FOR CURIOUS MINDS <b>✳</b></span><a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB ↗</a></footer>
    </div>
  </div>
}
