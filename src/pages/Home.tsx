import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import { categories } from '../data/categories'

export default function Home() {
  const latest = articles.slice(0, 4)
  return (
    <div className="page-wrap">
      <section className="hero">
        <div className="hero-grid" />
        <div className="eyebrow"><span className="eyebrow-line" /> THE OPEN KNOWLEDGE SPACE</div>
        <h1>探索 AI 世界，<br /><span>建立你的知識座標。</span></h1>
        <p className="hero-description">從人工智慧基礎、深度學習架構，到大型語言模型與實務應用。<br className="desktop-break" />把複雜技術整理成清晰、可持續累積的知識。</p>
        <div className="hero-actions"><Link to="/categories" className="button-primary">探索知識分類 <span>↗</span></Link><a href="#latest" className="button-quiet">瀏覽最新文章 <span>↓</span></a></div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-core"><span>AI</span><small>KNOWLEDGE<br />NETWORK</small></div>
        <div className="hero-footnote">01 — KNOWLEDGE IS A NETWORK</div>
      </section>

      <section className="stats-row">
        <div><strong>{String(categories.length).padStart(2, '0')}</strong><span>知識分類</span></div>
        <div><strong>{String(articles.length).padStart(2, '0')}</strong><span>技術文章</span></div>
        <div><strong>∞</strong><span>持續擴充</span></div>
        <div className="stats-note">A growing library for curious minds.</div>
      </section>

      <section className="content-section">
        <div className="section-heading"><div><div className="eyebrow">EXPLORE BY TOPIC</div><h2>知識領域</h2><p>依照主題探索，建立完整的 AI 技術脈絡。</p></div><Link to="/categories" className="text-link">全部分類 <span>↗</span></Link></div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link to={`/category/${category.id}`} className="category-card" key={category.id}>
              <div className="category-card-top"><span className="category-symbol">{category.icon}</span><span className="category-index">0{index + 1}</span></div>
              <h3>{category.name}</h3><div className="category-english">{category.english}</div><p>{category.description}</p><span className="category-open">探索主題　↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section latest-section" id="latest">
        <div className="section-heading"><div><div className="eyebrow">LATEST KNOWLEDGE</div><h2>最新文章</h2><p>從核心概念開始，逐步深入技術細節。</p></div><span className="article-count">{articles.length} ARTICLES INDEXED</span></div>
        <div className="article-grid">{latest.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
      </section>
      <section className="bottom-cta"><div><div className="eyebrow">KEEP LEARNING</div><h2>知識不是終點，<span>而是連結的開始。</span></h2><p>持續探索、整理與分享，讓每一次學習都成為下一次理解的起點。</p></div><Link to="/about" className="button-outline">認識這個專案 ↗</Link></section>
    </div>
  )
}
