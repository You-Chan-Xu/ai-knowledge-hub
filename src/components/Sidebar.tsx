import { NavLink } from 'react-router-dom'
import { categories } from '../data/categories'
import Brand from './Brand'

type Props = { open: boolean; onClose: () => void }

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {open && <button className="mobile-scrim" aria-label="關閉導覽" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-brand"><Brand /><button className="close-sidebar" onClick={onClose} aria-label="關閉選單">×</button></div>
        <div className="side-label">DISCOVER</div>
        <nav className="side-nav">
          <NavLink to="/" end onClick={onClose} className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">⌂</span> 知識首頁
          </NavLink>
          <NavLink to="/categories" onClick={onClose} className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">▦</span> 所有分類
          </NavLink>
        </nav>
        <div className="side-label category-label">KNOWLEDGE BASE</div>
        <nav className="side-nav">
          {categories.map((category) => (
            <NavLink key={category.id} to={`/category/${category.id}`} onClick={onClose} className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
              <span className="nav-icon">{category.icon}</span><span>{category.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="status-dot" />
          <span>持續更新中的知識庫</span>
          <small>VERSION 1.0</small>
        </div>
      </aside>
    </>
  )
}
