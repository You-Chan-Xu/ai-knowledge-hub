---
title: "Mamba 與 State Space Models（SSM）入門"
description: "認識狀態空間模型的序列建模觀念，以及 Mamba 的選擇性狀態空間機制。"
category: "model-architecture"
date: "2026-11-16"
tags: ["Mamba", "SSM", "Sequence Modeling"]
---

# Mamba 與 State Space Models（SSM）入門

State Space Model（SSM，狀態空間模型）是一類以隱藏狀態描述系統隨時間變化的模型。近年深度學習研究將 SSM 引入序列建模，探索不同於標準 Transformer Attention 的長序列處理方式。

## 1. 狀態空間模型的基本概念

連續時間線性 SSM 常用以下形式描述：

\[
h'(t)=Ah(t)+Bx(t)
\]

\[
y(t)=Ch(t)+Dx(t)
\]

其中：
- \(x(t)\)：輸入訊號。
- \(h(t)\)：隱藏狀態。
- \(y(t)\)：輸出訊號。
- \(A,B,C,D\)：描述系統動態與輸入輸出關係的矩陣。

在深度學習中，模型會將連續系統離散化，讓它能處理離散 token 或時間序列。

## 2. 為什麼研究 SSM？

標準 Self-Attention 在序列長度為 L 時，注意力矩陣通常具有 \(L \times L\) 的規模。當序列很長時，計算與記憶體成本會成為挑戰。

SSM 透過狀態遞迴或等價卷積形式處理序列，提供另一種長序列建模路線。

## 3. Mamba 的關鍵設計

Mamba 的重要特色是 Selective State Space Mechanism。與固定參數的線性時不變系統不同，Mamba 讓部分 SSM 參數依據輸入內容而變化，使模型能選擇性保留或忽略資訊。

論文也提出硬體感知的平行掃描與計算設計，以提升 GPU 上的效率。

## 4. Mamba 與 Transformer 比較

| 面向 | Transformer | Mamba |
|---|---|---|
| 核心機制 | Self-Attention | Selective SSM |
| 序列關係 | 直接計算 token 間關聯 | 透過選擇性狀態更新 |
| 長序列成本 | 標準全注意力通常隨長度平方成長 | 設計目標為隨序列長度線性擴展 |
| 資訊存取 | 可直接關注上下文位置 | 透過狀態壓縮歷史資訊 |
| 典型優勢 | 靈活的內容關聯建模、成熟生態 | 長序列效率與推論記憶體特性 |

實際速度與品質仍取決於模型大小、硬體、實作、任務與序列長度，不能只根據理論複雜度判斷哪個模型一定較好。

## 5. Mamba 的應用研究

SSM 與 Mamba 類架構可用於語言、音訊、時間序列與其他序列資料。以自動語音辨識（ASR）為例，音訊特徵可先經過 Encoder，將時間序列資訊轉換成高階表示，再搭配解碼器產生文字。

不過，實際 ASR 系統仍需要處理聲學特徵、文字 Tokenization、對齊、解碼與評估等問題。

## 6. 限制與研究方向

- 狀態表示需要有效保留對任務有用的歷史資訊。
- 不同任務未必都能從 SSM 架構獲得優勢。
- 高效實作可能依賴特定硬體與 Kernel。
- 與 Attention 混合的 Hybrid Architecture 也是重要研究方向。

## 7. 總結

Mamba 將選擇性機制引入 SSM，使模型能依據輸入內容調整狀態更新。它提供 Transformer 以外的序列建模選擇，但模型選擇仍應以實際任務、硬體與實驗結果為依據。

## 參考資料

- Gu & Dao (2023), [Mamba: Linear-Time Sequence Modeling with Selective State Spaces](https://arxiv.org/abs/2312.00752)
- [Official Mamba Repository](https://github.com/state-spaces/mamba)
