---
title: "AI Agent 是什麼？從 LLM 到工具使用"
description: "認識 AI Agent 的基本組成、規劃、工具呼叫與執行回饋循環。"
category: "applications"
date: "2026-11-13"
tags: ["AI Agent", "Tool Calling", "LLM"]
---

# AI Agent 是什麼？從 LLM 到工具使用

AI Agent 通常指能夠根據目標觀察環境、決定下一步行動，並透過工具或外部系統完成任務的軟體系統。LLM 可作為 Agent 的推理或語言介面，但 Agent 不等於單純的聊天機器人。

## 1. 基本組成

常見 Agent 系統可能包含：
- Model：負責理解、推理或產生下一步行動。
- Tools：提供搜尋、計算、資料庫查詢或其他操作能力。
- Instructions：定義目標、限制與行為規則。
- State / Memory：保存當前任務狀態或必要上下文。
- Orchestrator：管理工具呼叫、流程與錯誤處理。

## 2. Agent 工作循環

一個簡化流程如下：

1. 接收使用者目標。
2. 分析目前狀態與可用工具。
3. 選擇下一步行動。
4. 呼叫工具並取得結果。
5. 根據結果更新狀態。
6. 判斷是否完成，或繼續下一輪。

## 3. Tool Calling

模型可輸出結構化工具呼叫請求，由應用程式檢查參數與權限後執行工具，再把結果回傳給模型。重要的是，模型提出工具呼叫不代表工具已成功執行；系統必須驗證執行結果。

## 4. 設計時的安全考量

- 對高風險操作加入使用者確認。
- 限制工具權限與可存取資料範圍。
- 驗證模型輸出的參數。
- 記錄重要操作與錯誤。
- 不可將外部文件或網頁中的指令視為可信系統指令。

## 5. 何時需要 Agent？

若任務只需一次問答，普通 LLM 呼叫通常更簡單。當任務需要多步驟規劃、工具操作、狀態追蹤或根據結果調整行動時，才比較有理由採用 Agent 架構。

## 參考資料

- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)
- [OpenAI Platform Documentation](https://platform.openai.com/docs/)
