---
title: "Attention 機制：讓模型學會關注重要資訊"
description: "從 Query、Key、Value 到 Self-Attention，理解 Transformer 的核心運算。"
category: "deep-learning"
date: "2026-11-15"
tags: ["Attention", "Transformer", "Neural Network"]
---

# Attention 機制：讓模型學會關注重要資訊

Attention 是一種根據當前任務動態計算資訊權重的機制。模型不必將所有輸入資訊視為同等重要，而能依據 Query 與 Key 的關係，對 Value 進行加權彙整。

## 1. Query、Key、Value

可以用資訊檢索作為直覺比喻：
- Query：目前想找什麼。
- Key：每筆資訊的索引特徵。
- Value：每筆資訊實際承載的內容。

模型計算 Query 與各 Key 的相似程度，經過 Softmax 轉成權重，再加權整合 Value。

## 2. Self-Attention

Self-Attention 的 Q、K、V 都由同一個輸入序列投影而來。因此序列中每個位置都能依據其他位置的資訊更新表示。

\[
Attention(Q,K,V)=softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\]

## 3. Masked Attention

在自回歸生成中，位置 t 不應看到未來位置的 token。Causal Mask 會遮蔽未來位置的注意力分數，確保模型只能依據目前與過去資訊預測下一個 token。

## 4. Multi-Head Attention

多個 Attention Head 可學習不同的關聯模式。每個 Head 各自計算注意力，之後將輸出串接並經過線性投影。

## 5. 注意事項

Attention 權重可協助觀察模型在特定輸入下的資訊分配，但不應直接將權重視為完整、可靠的因果解釋。模型行為仍需搭配其他分析方法。

## 參考資料

- Vaswani et al. (2017), [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
