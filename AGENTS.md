# AGENTS.md — AI Knowledge Hub

## 1. 專案目的
AI Knowledge Hub 是以繁體中文為主的 AI 技術百科、個人學習筆記與教學講義整合型 Wiki。
目標是建立可長期維護的知識平台，讓使用者能由基礎概念逐步學到模型架構、LLM 應用與實作。

## 2. 技術架構
- Vite + React + TypeScript：前端與建置。
- React Router（HashRouter）：頁面導覽，避免 GitHub Pages SPA 重新整理 404。
- Markdown：文章內容來源，集中放在 `content/`。
- gray-matter：解析 Markdown frontmatter。
- react-markdown、remark-gfm、remark-math、rehype-katex、rehype-highlight：文章呈現。
- GitHub Actions：自動建置並部署至 GitHub Pages。

## 3. 資料夾規則
- `content/<category>/`：知識文章，只放 `.md`。
- `src/components/`：可重用 UI 元件。
- `src/pages/`：路由頁面。
- `src/data/`：分類與文章資料處理。
- `src/styles/`：全站樣式。
- `public/`：靜態圖片、圖示等資產。
- `.github/workflows/`：部署流程。

## 4. 內容分類
分類 ID 必須使用以下 slug；新增分類時要同步更新 `src/data/categories.ts` 與 Sidebar：
1. `ai-basics` — AI 基礎知識
2. `deep-learning` — 深度學習架構
3. `llm` — 大型語言模型
4. `model-architecture` — 新興模型架構
5. `applications` — LLM 應用技術
6. `implementation` — AI 實作與應用

## 5. Markdown 文章格式
每篇文章必須使用 YAML frontmatter，欄位如下：
```yaml
---
title: "文章標題"
description: "一句話摘要"
category: "llm"
date: "2026-11-16"
tags: ["LLM", "AI"]
---
```
- `title`、`description`、`category`、`date` 為必要欄位。
- `category` 必須是 `src/data/categories.ts` 中存在的 ID。
- 文章檔名使用英文小寫 kebab-case，例如 `retrieval-augmented-generation.md`。
- 文章正文建議包含：背景、核心概念、運作方式／架構、應用情境、優缺點或限制、總結、參考資料。
- 技術內容以繁體中文撰寫；重要專有名詞保留英文。
- 研究結果、論文資訊、版本與數據不可捏造；無法確認時應明確標示。
- 參考資料優先使用原始論文、官方文件及可信技術文件。

## 6. UI 與設計規範
- 深色科技風：深藍黑背景、低對比網格／光暈、青藍與紫色作為少量強調色。
- 維持高可讀性；正文行長、字級、行距需適合長篇閱讀。
- 桌面版使用側邊導覽；手機版需可開關導覽。
- 共用元件優先放入 `src/components/`，避免重複實作。
- 所有按鈕與搜尋欄都必須有實際功能。
- 保持鍵盤可操作、語意化 HTML 與足夠色彩對比。
- 不可只為了視覺效果加入沒有功能的控制項。

## 7. AI 修改規則
1. 開始工作前先閱讀本文件及相關既有程式。
2. 修改前確認現有資料流、元件與路由，不可假設不存在的 API。
3. 新增文章時只新增 Markdown，不要把文章全文硬編碼在 React 元件中。
4. 新增分類時同步更新分類設定、導覽與必要的首頁呈現。
5. 不可任意更換技術堆疊、刪除使用者內容或覆蓋既有文章。
6. 保持 TypeScript 型別安全；避免使用 `any`。
7. 任何新增功能都要提供真實可用的互動，並考慮手機版。
8. 修改完成後執行 `npm run build`；若環境無法執行，需清楚說明。
9. 若新增外部套件，更新 `package.json` 並說明用途。
10. 不得將 API Key、密碼或個人憑證提交到 Git。

## 8. 新增文章流程
1. 確認文章所屬分類。
2. 在對應 `content/<category>/` 建立 kebab-case `.md` 檔。
3. 填寫完整 frontmatter。
4. 以繁體中文撰寫，使用 H2/H3 建立清楚層級。
5. 加入可靠參考資料。
6. 本網站使用 Vite `import.meta.glob` 自動載入 Markdown；一般新增文章不需手動建立路由或修改文章清單。
7. 執行建置並確認文章出現在首頁、分類頁與搜尋結果。

## 9. GitHub Pages 部署
- Repository 建議命名為 `ai-knowledge-hub`。
- GitHub Actions 讀取 Repository 名稱設定 `BASE_PATH`。
- 使用 `HashRouter`，避免子路徑部署時的路由刷新問題。
- 部署來源選擇 GitHub Actions。
- 不可將 `.env`、金鑰或私人資料放入公開 Repository。

## 10. 完成定義
新增功能或內容後，至少確認：
- `npm run build` 成功。
- 首頁、分類頁、文章頁可正常瀏覽。
- 搜尋可找到文章標題、摘要與內文。
- 桌面與手機版版面可用。
- GitHub Pages 路徑設定正確。
