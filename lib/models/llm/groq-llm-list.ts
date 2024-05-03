import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const LLaMA3_70B: LLM = {
  modelId: "llama3-70b-8192",
  modelName: "llama3-70b-8192",
  provider: "groq",
  hostedId: "llama3-70b-8192",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.7,
    outputCost: 0.8
  }
}

const MIXTRAL_8X7B: LLM = {
  modelId: "mixtral-8x7b-32768",
  modelName: "Mixtral-8x7b-Instruct-v0.1",
  provider: "groq",
  hostedId: "mixtral-8x7b-32768",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 0.27
  }
}

const LLaMA3_8B: LLM = {
  modelId: "llama3-8b-8192",
  modelName: "llama3-8b-8192",
  provider: "groq",
  hostedId: "llama3-8b-8192",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 0.27
  }
}

const GEMMA_7b: LLM = {
  modelId: "gemma-7b-it",
  modelName: "gemma-7b-it",
  provider: "groq",
  hostedId: "gemma-7b-it",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 0.27
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  LLaMA3_70B,
  LLaMA3_8B,
  MIXTRAL_8X7B,
  GEMMA_7b
]
