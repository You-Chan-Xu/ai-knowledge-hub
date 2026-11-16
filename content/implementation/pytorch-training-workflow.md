---
title: "PyTorch 模型訓練流程入門"
description: "整理 Dataset、DataLoader、Forward、Loss、Backward 與 Optimizer 的基本流程。"
category: "implementation"
date: "2026-11-12"
tags: ["PyTorch", "Deep Learning", "Training"]
---

# PyTorch 模型訓練流程入門

PyTorch 是常見的深度學習框架。建立模型訓練流程時，通常會將資料準備、模型定義、損失計算與參數更新分成不同步驟。

## 1. Dataset 與 DataLoader

Dataset 負責定義如何讀取單筆資料；DataLoader 則負責批次取樣、打亂資料與平行載入。

```python
from torch.utils.data import Dataset, DataLoader

class ExampleDataset(Dataset):
    def __init__(self, samples):
        self.samples = samples

    def __len__(self):
        return len(self.samples)

    def __getitem__(self, index):
        return self.samples[index]

loader = DataLoader(dataset, batch_size=32, shuffle=True)
```

## 2. 定義模型與損失函數

模型通常繼承 `torch.nn.Module`，並在 `forward()` 定義資料如何通過網路。損失函數用來衡量預測與目標之間的差異。

## 3. 訓練迴圈

```python
for epoch in range(num_epochs):
    model.train()

    for inputs, targets in train_loader:
        inputs = inputs.to(device)
        targets = targets.to(device)

        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()
```

每個 Batch 會先清除上一輪梯度，再執行前向傳播、計算 Loss、反向傳播與參數更新。

## 4. 驗證與測試

驗證階段通常使用 `model.eval()` 與 `torch.no_grad()`，避免更新梯度並停用 Dropout 等訓練行為。測試集應保留到模型選擇與超參數調整完成後，用於較客觀的最終評估。

## 5. 常見除錯方向

- Loss 出現 NaN：檢查輸入資料、標籤、學習率與數值運算。
- GPU 記憶體不足：調整 Batch Size、序列長度或使用混合精度。
- 訓練準確率高但測試差：檢查過度擬合與資料切分。
- Loss 不下降：檢查標籤、模型輸出維度、Loss 設定與梯度是否正常。

## 參考資料

- [PyTorch Tutorials](https://pytorch.org/tutorials/)
- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
