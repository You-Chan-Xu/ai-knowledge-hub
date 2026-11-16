import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import { articles } from '../data/articles'

export default function Search() {
  const [params] = useSearchParams()
  const query = (params.get('q') ?? '').trim()
  const results = useMemo(() => {
    if (!query) return []
    const q = query.toLocaleLowerCase()
    return articles.filter((article) => [article.title, article.description, article.content, ...article.tags].join(' ').toLocaleLowerCase().includes(q))
  }, [query])
  return <div className="page-wrap inner-page"><div className="page-kicker">SEARCH / KNOWLEDGE INDEX</div><h1 className="page-title">搜尋<span>結果</span></h1><p className="page-lead">{query ? <>「{query}」的搜尋結果：{results.length} 篇文章</> : '請在上方搜尋欄輸入關鍵字。'}</p>
    {results.length ? <div className="article-grid">{results.map((article) => <ArticleCard key={article.slug} article={article} />)}</div> : query ? <div className="empty-state"><span>⌕</span><h3>沒有找到符合的文章</h3><p>試試其他關鍵字，例如 Transformer、Mamba、RAG 或 Token。</p><Link to="/categories" className="text-link">瀏覽知識分類 ↗</Link></div> : null}
  </div>
}
