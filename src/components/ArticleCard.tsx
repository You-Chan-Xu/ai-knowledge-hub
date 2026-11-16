import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'
import { categories } from '../data/categories'

export default function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const category = categories.find((item) => item.id === article.category)
  return (
    <Link to={`/article/${article.slug}`} className={`article-card ${compact ? 'article-card-compact' : ''}`}>
      <div className="card-topline"><span className="category-chip">{category?.name ?? article.category}</span><span className="card-date">{article.date}</span></div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="card-footer"><div className="tag-list">{article.tags.slice(0, 2).map((tag) => <span key={tag}>#{tag}</span>)}</div><span className="card-arrow">↗</span></div>
    </Link>
  )
}
