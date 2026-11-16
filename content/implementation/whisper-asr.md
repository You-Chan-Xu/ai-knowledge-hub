---
title: "Whisper 與自動語音辨識（ASR）"
description: "從音訊前處理、Mel Spectrogram 到 Encoder-Decoder，認識 Whisper 的語音辨識流程。"
category: "implementation"
date: "2026-11-16"
tags: ["Whisper", "ASR", "Audio"]
---

# Whisper 與自動語音辨識（ASR）

Automatic Speech Recognition（ASR，自動語音辨識）是將語音訊號轉換成文字的技術。Whisper 是 OpenAI 提出的多語言語音辨識模型，採用 Encoder-Decoder Transformer 架構。

## 1. ASR 的基本流程

典型 ASR 系統包含：

1. 取得音訊波形。
2. 進行取樣率、聲道與音量等前處理。
3. 將音訊轉換成適合模型輸入的聲學特徵。
4. Encoder 擷取時間與語音表示。
5. Decoder 依據聲學表示與已生成 token 輸出文字。
6. 使用 WER、CER 等指標評估辨識結果。

## 2. Mel Spectrogram

音訊波形可透過 Short-Time Fourier Transform（STFT）轉換成時頻表示。Mel Filter Bank 再將頻率軸映射到 Mel 尺度，形成 Mel Spectrogram。

常見處理步驟：
- 將音訊切成重疊的短時間 Frame。
- 對每個 Frame 進行 Fourier Transform。
- 計算頻譜能量。
- 套用 Mel Filter Bank。
- 視模型需求進行 Log 壓縮與正規化。

Mel 特徵能以較緊湊的表示保留與聽覺相關的頻率資訊。

## 3. Whisper 架構概念

Whisper 使用 Encoder-Decoder Transformer：
- Encoder：讀取音訊特徵並建立聲學上下文表示。
- Decoder：自回歸產生文字 token，也可使用任務相關的特殊 token 表示語言或任務資訊。

Whisper 的訓練資料涵蓋多語言與多種語音任務，因此可支援多語言辨識及部分翻譯情境。

## 4. ASR 評估指標

Word Error Rate（WER）以替換、刪除與插入錯誤數量衡量辨識結果：

\[
WER=\frac{S+D+I}{N}
\]

其中 S 是 Substitution、D 是 Deletion、I 是 Insertion，N 是參考文字的詞數。

中文通常也會使用 Character Error Rate（CER），以字元為單位計算錯誤率。評估前需明確定義文字正規化規則，例如標點符號、大小寫與空白處理。

## 5. 實作時需要注意

- 訓練與推論的取樣率必須符合模型預期。
- 音訊長度、Padding 與 Mask 會影響 Batch 訓練。
- 標註文字應清理不必要符號，但不可任意改變語意。
- 評估資料應與訓練資料分離。
- 不同語言的分詞方式會影響 WER/CER 的解讀。

## 6. 總結

ASR 串連了數位訊號處理、聲學表示、序列建模與文字解碼。理解 STFT、Mel Spectrogram、Encoder-Decoder 與 WER，是進一步實作 Whisper 或研究 Mamba ASR 的基礎。

## 參考資料

- Radford et al. (2022), [Robust Speech Recognition via Large-Scale Weak Supervision](https://arxiv.org/abs/2212.04356)
- [OpenAI Whisper Repository](https://github.com/openai/whisper)
