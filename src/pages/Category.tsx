import { Link, useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'
import { categories } from '../data/categories'

export default function Category() {
  const { id = '' } = useParams()
  const category = categories.find((item) => item.id === id)
  const list = articles.filter((article) => article.category === id)
  if (!category) return <div className="page-wrap inner-page"><h1>找不到這個分類</h1><Link to="/categories" className="text-link">返回所有分類 ↗</Link></div>
  return <div className="page-wrap inner-page">
    <div className="page-kicker">KNOWLEDGE DIRECTORY / {category.english.toUpperCase()}</div>
    <div className="category-title-icon">{category.icon}</div><h1 className="page-title">{category.name}</h1><p className="page-lead">{category.description}</p>
    <div className="list-toolbar"><span>{String(list.length).padStart(2, '0')} 篇文章</span><Link to="/categories" className="text-link">← 所有分類</Link></div>
    {list.length ? <div className="article-grid">{list.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="empty-state"><span>◌</span><h3>內容正在整理中</h3><p>這個分類目前還沒有文章，之後會持續補充。</p></div>}
  </div>
}
