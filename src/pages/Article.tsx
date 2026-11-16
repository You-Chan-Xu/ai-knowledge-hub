import { Link, useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { getArticleBySlug } from '../data/articles'
import { categories } from '../data/categories'

export default function Article() {
  const { slug = '' } = useParams()
  const article = getArticleBySlug(slug)
  if (!article) return <div className="page-wrap inner-page"><h1>找不到這篇文章</h1><Link to="/" className="text-link">返回首頁 ↗</Link></div>
  const category = categories.find((item) => item.id === article.category)
  return <div className="page-wrap article-page">
    <div className="breadcrumbs"><Link to="/">首頁</Link><span>/</span><Link to={`/category/${article.category}`}>{category?.name}</Link><span>/</span><span>{article.title}</span></div>
    <article className="article-layout">
      <div className="article-main">
        <div className="page-kicker">FIELD NOTES / {article.date}</div>
        <span className="category-chip article-chip">{category?.name}</span>
        <h1 className="article-title">{article.title}</h1><p className="article-lead">{article.description}</p>
        <div className="article-tags">{article.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        <div className="article-divider" />
        <MarkdownRenderer content={article.content} />
        <div className="article-end"><span>— END OF ARTICLE —</span><Link to={`/category/${article.category}`}>更多{category?.name}文章 ↗</Link></div>
      </div>
      <aside className="article-aside"><div className="aside-sticky"><div className="aside-label">ABOUT THIS NOTE</div><h3>持續累積，<br />逐步建立理解。</h3><p>這篇文章屬於「{category?.name}」，可從分類頁探索更多相關主題。</p><Link to={`/category/${article.category}`} className="aside-link">探索相關文章 ↗</Link><div className="aside-meta"><span>發布日期</span><strong>{article.date}</strong></div></div></aside>
    </article>
  </div>
}
