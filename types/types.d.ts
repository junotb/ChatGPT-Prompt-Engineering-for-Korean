export type Chapter = {
  name: string,
  description: string,
  link: string,
  nextName: string,
  nextLink: string
}

export type Params = {
  apiKey: string,
  prompt: string,
  userText: string
}