# AI Knowledge Hub

繁體中文 AI 技術百科 × 個人學習筆記 × 教學講義。以 Markdown 管理文章，使用 React + Vite 呈現，並透過 GitHub Actions 部署到 GitHub Pages。

## 本機啟動

需求：Node.js 20 以上、npm。

```bash
npm install
npm run dev
```

開啟終端機顯示的本機網址即可預覽。

## 新增文章

在 `content/` 對應分類資料夾新增 Markdown 檔案，例如 `content/llm/new-topic.md`：

```yaml
---
title: "新主題"
description: "用一句話說明文章內容"
category: "llm"
date: "2026-11-16"
tags: ["LLM", "AI"]
---

# 新主題

在這裡撰寫文章內容。
```

Vite 會自動讀取 `content/**/*.md`，一般新增文章不需要修改 React 程式碼。`category` 必須是 `src/data/categories.ts` 中已定義的分類 ID。

## 建置檢查

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

1. 在 GitHub 建立 Repository，建議名稱為 `ai-knowledge-hub`。
2. 將本專案所有檔案推送到該 Repository 的 `main` 分支。
3. 進入 Repository → **Settings → Pages**。
4. 在 **Build and deployment → Source** 選擇 **GitHub Actions**。
5. 推送到 `main` 後，GitHub Actions 會自動建置並部署。
6. 完成後網址通常是 `https://<你的 GitHub 帳號>.github.io/ai-knowledge-hub/`。

若 Repository 名稱不是 `ai-knowledge-hub`，Workflow 會自動使用實際 Repository 名稱設定 Vite base path。

## 專案規範

AI 協作與內容格式請先閱讀 [`AGENTS.md`](./AGENTS.md)。
