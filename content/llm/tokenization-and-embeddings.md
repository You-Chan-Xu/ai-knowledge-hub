---
title: "Tokenization 與 Embedding：文字如何變成向量"
description: "認識 LLM 如何把文字轉換為 Token ID，再映射成模型可運算的向量。"
category: "llm"
date: "2026-11-14"
tags: ["Tokenization", "Embedding", "LLM"]
---

# Tokenization 與 Embedding：文字如何變成向量

神經網路主要處理數值，因此 LLM 必須先將文字轉換成模型可讀取的表示。Tokenization 與 Embedding 是這個流程中的兩個重要階段。

## 1. Tokenization

Tokenizer 將輸入文字切分成 token。Token 不一定等於一個單字，也可能是子詞、字元或其他符號片段。

常見方法包含 Byte Pair Encoding（BPE）、WordPiece 與 Unigram Language Model。不同模型的 tokenizer 與 vocabulary 可能不同。

## 2. Token ID

每個 token 會對應到詞彙表中的整數索引，也就是 Token ID。這個 ID 是查表索引，本身不代表語意距離。

## 3. Embedding

Embedding Layer 會將 Token ID 映射到固定維度的向量空間。假設詞彙表大小為 V、向量維度為 d，Embedding 矩陣可視為 \(V \times d\)。

模型訓練時會更新這些向量，使它們能配合下游網路完成預測任務。

## 4. Contextual Representation

輸入 Embedding 通常還會結合位置資訊，再送入 Transformer。經過多層 Attention 與 Feed-Forward Network 後，同一個 token 會依上下文形成不同的表示。

## 5. 實作注意事項

- Token 數量會影響上下文長度與推論成本。
- 特殊 Token 可能用於表示句子邊界、任務或控制訊號。
- 不同語言在同一 tokenizer 下的 token 效率可能不同。
- 訓練與推論應使用相容的 tokenizer 與模型版本。

## 參考資料

- [Hugging Face Tokenizers Documentation](https://huggingface.co/docs/tokenizers/)
- [Hugging Face NLP Course: Tokenizers](https://huggingface.co/learn/nlp-course/chapter6/1)
