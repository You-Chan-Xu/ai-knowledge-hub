import { Link } from 'react-router-dom'

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="AI Knowledge Hub 首頁">
      <span className="brand-mark">A<span>I</span></span>
      <span className="brand-copy"><strong>KNOWLEDGE HUB</strong><small>LEARN · CONNECT · BUILD</small></span>
    </Link>
  )
}
