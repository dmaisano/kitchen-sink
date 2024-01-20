declare namespace NodeJS {
  export interface ProcessEnv {
    OPENAI_API_KEY: string
    [key: string]: string
  }
}
