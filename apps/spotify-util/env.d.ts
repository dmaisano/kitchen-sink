declare namespace NodeJS {
  export interface ProcessEnv {
    CLIENT_ID: string
    CLIENT_SECRET: string
    [key: string]: string
  }
}
