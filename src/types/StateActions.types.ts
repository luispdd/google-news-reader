export const Actions = {
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_CATEGORY: 'SET_CATEGORY',
  GET_SOURCES: 'GET_SOURCES',
  SET_FEED: 'SET_FEED',
  GET_HEADLINES: 'GET_HEADLINES',
  FETCH_ERROR: 'FETCH_ERROR',
  SET_FETCHING: 'SET_FETCHING',
  TOGGLE_MENU: 'TOGGLE_MENU'
}

interface SetLanguage {
  type: typeof Actions.SET_LANGUAGE
  payload: string
}

interface SetCategory {
  type: typeof Actions.SET_CATEGORY
  payload: string
}

interface GetSources {
  type: typeof Actions.GET_SOURCES,
  payload: any
}

interface GetHeadlines {
  type: typeof Actions.GET_HEADLINES,
  payload: any
}

interface FetchError {
  type: typeof Actions.FETCH_ERROR,
  payload: any
}

interface SetFetching {
  type: typeof Actions.SET_FETCHING,
}

interface SetFeed {
  type: typeof Actions.SET_FEED,
}

interface ToggleMenu {
  type: typeof Actions.TOGGLE_MENU,
}

export type ActionTypes = SetLanguage 
  | SetCategory 
  | GetSources 
  | GetHeadlines
  | SetFeed
  | FetchError
  | SetFetching
  | ToggleMenu;


