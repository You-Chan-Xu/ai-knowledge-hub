import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Brand from './Brand'

type Props = { onMenu: () => void }

export default function Header({ onMenu }: Props) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  function submit(event: React.FormEvent) {
    event.preventDefault()
    navigate(`/search?q=${encodeURIComponent(query.trim())}`)
  }
  return (
    <header className="topbar">
      <button className="mobile-menu" onClick={onMenu} aria-label="開啟導覽">☰</button>
      <div className="mobile-brand"><Brand /></div>
      <form className="search-box" onSubmit={submit} role="search">
        <span className="search-symbol">⌕</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜尋 AI、Transformer、RAG..." aria-label="搜尋知識文章" />
        <kbd>ENTER ↵</kbd>
      </form>
      <div className="topbar-meta"><span className="topbar-pulse" /> KNOWLEDGE SYSTEM <span className="meta-version">/ 01</span></div>
    </header>
  )
}
