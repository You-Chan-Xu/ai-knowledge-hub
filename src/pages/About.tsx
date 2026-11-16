import { Link } from 'react-router-dom'

export default function About() {
  return <div className="page-wrap inner-page about-page">
    <div className="page-kicker">ABOUT THE PROJECT / 06</div><h1 className="page-title">關於<span>知識庫</span></h1>
    <p className="page-lead">一個持續生長的 AI 技術知識空間，結合技術百科、個人學習筆記與教學講義。</p>
    <div className="about-panel"><div className="about-mark">AI<span>.</span></div><div><div className="eyebrow">LEARN · CONNECT · BUILD</div><h2>把知識整理成可以持續前進的路徑。</h2><p>AI Knowledge Hub 希望降低理解 AI 技術的門檻。內容從基礎概念開始，逐步延伸至模型架構、LLM 應用與實作經驗。每篇文章都以 Markdown 維護，讓知識內容與網站介面分離，方便長期更新。</p></div></div>
    <div className="about-columns"><div><span className="eyebrow">01 / PRINCIPLE</span><h3>清楚而有脈絡</h3><p>用分類、標籤與文章結構串起相關概念，避免知識只成為零散片段。</p></div><div><span className="eyebrow">02 / FORMAT</span><h3>內容與介面分離</h3><p>文章以 Markdown 儲存，新增內容不必重新撰寫頁面元件。</p></div><div><span className="eyebrow">03 / GROWTH</span><h3>持續擴充</h3><p>從課堂筆記、論文閱讀到程式實作，逐步累積自己的技術知識庫。</p></div></div>
    <div className="about-note"><strong>內容聲明</strong><p>本網站為學習與知識整理用途。技術文章應盡可能附上原始論文、官方文件或可信來源；模型與工具資訊可能隨版本更新，閱讀時請留意資料日期。</p></div>
    <Link to="/categories" className="button-primary">開始探索知識 <span>↗</span></Link>
  </div>
}
