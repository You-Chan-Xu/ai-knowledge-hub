import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { articles } from '../data/articles'

export default function Categories() {
  return <div className="page-wrap inner-page">
    <div className="page-kicker">KNOWLEDGE DIRECTORY / 02</div><h1 className="page-title">知識<span>分類</span></h1><p className="page-lead">六大領域，從基礎理論到實作應用，建立你的 AI 知識地圖。</p>
    <div className="category-grid directory-grid">{categories.map((category, index) => {
      const count = articles.filter((article) => article.category === category.id).length
      return <Link to={`/category/${category.id}`} className="category-card" key={category.id}><div className="category-card-top"><span className="category-symbol">{category.icon}</span><span className="category-index">0{index + 1} / {String(count).padStart(2, '0')} ARTICLES</span></div><h3>{category.name}</h3><div className="category-english">{category.english}</div><p>{category.description}</p><span className="category-open">瀏覽此分類　↗</span></Link>
    })}</div>
  </div>
}
