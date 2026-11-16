export type Category = {
  id: string
  name: string
  english: string
  description: string
  icon: string
}

export const categories: Category[] = [
  { id: 'ai-basics', name: 'AI 基礎知識', english: 'AI Fundamentals', description: '建立人工智慧、機器學習與深度學習的核心概念。', icon: '◈' },
  { id: 'deep-learning', name: '深度學習架構', english: 'Deep Learning', description: '理解神經網路、序列模型與注意力機制。', icon: '⌘' },
  { id: 'llm', name: '大型語言模型', english: 'Large Language Models', description: '探索 GPT、Token、Embedding 與模型訓練。', icon: '✳' },
  { id: 'model-architecture', name: '新興模型架構', english: 'Model Architecture', description: '研究 Transformer 以外的架構與 State Space Models。', icon: '⟁' },
  { id: 'applications', name: 'LLM 應用技術', english: 'LLM Applications', description: '將語言模型應用於 RAG、Agent 與知識系統。', icon: '⌬' },
  { id: 'implementation', name: 'AI 實作與應用', english: 'Implementation', description: '從資料處理、模型訓練到語音辨識實作。', icon: '⌁' },
]
