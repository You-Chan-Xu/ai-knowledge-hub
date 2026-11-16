---
title: "Transformer 架構完整入門"
description: "理解 Transformer 的 Encoder、Decoder、自注意力機制與位置資訊。"
category: "deep-learning"
date: "2026-11-16"
tags: ["Transformer", "Attention", "Deep Learning"]
---

# Transformer 架構完整入門

Transformer 是一種以 Attention 機制為核心的神經網路架構。2017 年論文 *Attention Is All You Need* 提出此架構，之後成為自然語言處理與大型語言模型的重要基礎。

## 1. 為什麼需要 Transformer？

早期序列模型常使用 RNN 或 LSTM，依序處理每個時間步。這種方式具有序列依賴性，平行化較困難；長距離資訊也可能難以有效傳遞。

Transformer 使用 Self-Attention，讓序列中的位置能直接計算彼此的關聯，並可在訓練時平行處理多個 token。

## 2. Scaled Dot-Product Attention

輸入經過線性投影後形成 Query、Key、Value：

- Query（Q）：目前位置想尋找的資訊。
- Key（K）：每個位置提供的索引特徵。
- Value（V）：實際要加權彙整的內容。

注意力計算式：

\[
Attention(Q,K,V)=softmax\left(\frac{QK^T}{\sqrt{d_k}}\right)V
\]

除以 \(\sqrt{d_k}\) 是為了控制點積數值的尺度，讓 Softmax 的梯度較穩定。

## 3. Multi-Head Attention

Multi-Head Attention 將注意力運算分成多個 head，各 head 在不同表示子空間中學習關係，再將結果串接並投影。

這讓模型能同時捕捉不同類型的關聯，例如語法、語意或遠距離依賴。

## 4. Encoder 與 Decoder

原始 Transformer 包含 Encoder 與 Decoder：

- Encoder：由 Self-Attention 與 Feed-Forward Network 等層組成，建立輸入序列表示。
- Decoder：使用 Masked Self-Attention，並透過 Cross-Attention 讀取 Encoder 輸出，逐步產生目標序列。

不同模型會採用不同形式：
- Encoder-only：例如 BERT，常用於理解任務。
- Decoder-only：例如 GPT 類自回歸語言模型。
- Encoder-Decoder：例如原始 Transformer 與 T5 類模型。

## 5. Positional Information

Self-Attention 本身不會自然知道 token 的先後順序，因此模型需要位置資訊。原始 Transformer 使用 Sinusoidal Positional Encoding；後續模型也發展出可學習位置嵌入、RoPE 等方法。

## 6. 優點與限制

**優點**
- Attention 可直接建立長距離位置間的關聯。
- 訓練階段容易平行化。
- 架構可擴展，適用於文字、影像、音訊等領域。

**限制**
- 標準全注意力的計算與記憶體成本會隨序列長度呈平方級成長。
- 長上下文推論可能需要大量 KV Cache。
- 模型規模與資料需求可能很高。

## 7. 總結

Transformer 的核心在於透過 Attention 建立 token 之間的動態關聯。理解 Q、K、V、Multi-Head Attention、位置資訊與 Encoder/Decoder，是閱讀 GPT、BERT 及新型序列模型研究的重要基礎。

## 參考資料

- Vaswani et al. (2017), [Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
