---
title: "RAG：檢索增強生成的原理與流程"
description: "了解如何結合向量檢索與語言模型，讓回答能參考外部知識來源。"
category: "applications"
date: "2026-11-16"
tags: ["RAG", "Vector Database", "LLM"]
---

# RAG：檢索增強生成的原理與流程

Retrieval-Augmented Generation（RAG，檢索增強生成）是一種結合資訊檢索與文字生成的系統設計。系統先從外部知識來源找出相關內容，再將檢索結果提供給 LLM 作為回答上下文。

## 1. 為什麼需要 RAG？

單靠模型參數記憶知識有幾個限制：
- 內容可能過時，難以即時反映新資料。
- 私有文件通常不在模型預訓練資料中。
- 模型可能生成看似合理但無來源的答案。

RAG 讓系統在回答時可以查詢外部文件，並將來源提供給使用者檢查。

## 2. RAG 的典型流程

1. 文件載入：讀取 PDF、網頁、Markdown 或資料庫內容。
2. Chunking：將長文件切分成適合檢索的片段。
3. Embedding：將文字片段轉成向量。
4. Indexing：將向量與文件資訊存入向量資料庫或檢索索引。
5. Retrieval：依照使用者問題找出相關片段。
6. Augmentation：將問題與檢索內容組合成提示。
7. Generation：LLM 根據上下文生成回答。

## 3. 向量檢索

Embedding Model 將文字轉成向量後，可使用相似度函數比較問題與文件片段。常見方法包括 Cosine Similarity、Dot Product 與 Euclidean Distance。

向量相似度並不等於事實正確性。檢索結果仍需要考慮文件品質、時間、權限與上下文完整性。

## 4. Chunking 的重要性

Chunk 太短可能失去上下文；Chunk 太長則可能降低檢索精準度並增加提示成本。常見策略包括：
- 固定字數或 Token 長度切分。
- 依照段落、標題或語意切分。
- 使用 Overlap 保留相鄰片段的上下文。

最佳切分方式需要根據文件類型與實際檢索效果評估。

## 5. 如何評估 RAG？

可以分開評估檢索與生成：

- Retrieval：Recall@k、Precision@k、MRR、nDCG。
- Generation：答案正確性、忠實度（Faithfulness）、相關性與引用品質。
- System：延遲、成本、錯誤率與資料權限控制。

只看回答是否流暢，無法判斷 RAG 系統是否真的檢索到正確資料。

## 6. 常見問題與改善方向

- 找不到關鍵資料：改善 Chunking、Embedding 或 Hybrid Search。
- 找到錯誤片段：加入 Reranker 或 Metadata Filter。
- 回答沒有根據：要求模型引用來源，並在缺乏證據時承認不知道。
- 文件更新不即時：建立增量索引與文件版本管理。

## 7. 總結

RAG 不是單一模型，而是一套資料處理、檢索、提示組合與生成的系統流程。高品質 RAG 必須同時重視文件品質、檢索效果、回答忠實度與來源追蹤。

## 參考資料

- Lewis et al. (2020), [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)
