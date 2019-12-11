export default interface AppState {
  category: string,
  language: string,
  feed: string
  sources: any[],
  articles: any[],
  menuOpen: boolean,
  error: any,
  fetching: boolean
}