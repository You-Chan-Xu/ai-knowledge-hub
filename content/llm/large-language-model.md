---
title: "大型語言模型（LLM）核心概念"
description: "從 Token、預訓練、生成策略到微調，認識大型語言模型的工作流程。"
category: "llm"
date: "2026-11-16"
tags: ["LLM", "GPT", "Pretraining"]
---

# 大型語言模型（LLM）核心概念

大型語言模型（Large Language Model, LLM）通常是以大量文字或多模態資料訓練的大型神經網路，能夠理解並生成文字，也可透過工具與外部資料完成更複雜的任務。

## 1. Tokenization

模型通常不直接讀取人類看到的完整單字，而是先透過 Tokenizer 將文字切分成 token，再將 token 對應到整數 ID。

例如一句話可能被切成多個詞片段、字元或子詞。不同 tokenizer 的切分方式與詞彙表不同，因此同一段文字在不同模型中可能具有不同 token 數量。

## 2. Embedding

Token ID 會透過 Embedding Layer 映射成連續向量。向量是模型後續計算的表示形式，模型會在訓練過程中學習適合任務的表示。

Embedding 不代表兩個詞在所有情境下都只有固定語意；在 Transformer 中，後續層會結合上下文更新 token 表示。

## 3. Pretraining

許多自回歸 LLM 使用下一個 token 預測作為預訓練目標。給定前文 token，模型預測下一個 token 的機率分布：

\[
P(x_t \mid x_1,\ldots,x_{t-1})
\]

透過大量資料與反向傳播，模型逐步調整參數，使預測分布更符合訓練資料。

## 4. Inference 與文字生成

推論時，模型根據目前上下文輸出下一個 token 的機率分布，再使用解碼策略選擇 token。常見策略包括：

- Greedy Decoding：每一步選機率最高的 token。
- Temperature：調整機率分布的平滑程度。
- Top-k：只從機率最高的 k 個 token 中取樣。
- Top-p：從累積機率達到 p 的候選集合中取樣。

這些設定會影響生成結果的多樣性與穩定性。

## 5. Fine-tuning 與指令調整

預訓練模型不一定能直接遵循使用者指令。常見後續訓練方法包括：

- Supervised Fine-Tuning（SFT）：使用示範輸入與理想輸出進行監督式微調。
- Preference Optimization：使用偏好資料調整模型輸出，例如 DPO。
- RLHF：利用人類回饋建立偏好訊號，再透過強化學習等方式調整模型。

不同模型的訓練流程可能不同，不能假設所有 LLM 都使用相同步驟。

## 6. LLM 的限制

- 可能生成看似合理但不正確的內容，常稱為 Hallucination。
- 知識可能受到訓練資料時間與範圍限制。
- 對提示方式、上下文與解碼設定敏感。
- 可能產生偏見，或洩漏不應公開的資訊。
- 推論成本、延遲與能源需求可能很高。

## 7. 總結

理解 LLM 可從 Tokenization、Embedding、Pretraining、Inference 與 Fine-tuning 五個環節切入。模型能流暢生成文字，不代表每個回答都是真實或經過驗證，因此應搭配檢索、工具與可靠評估。

## 參考資料

- [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course/)
- [The Illustrated Transformer](https://jalammar.github.io/illustrated-transformer/)
