import { AnyAction, Reducer } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { setFetching, fetchError, setSources, setHeadlines, setLanguage, setCategory, setFeed, toggleMenu } from '../actions/stateActions';
import { getSources as getSourcesFromApi, getHeadlines as getHeadlinesFromApi } from '../../api';
import AppState from '../../types/AppState.types';
import { Actions } from '../../types/StateActions.types';
import SourcesType from '../../types/Sources.types'
import SourcesResponseType from '../../types/SourcesResponse.types';

export const getSources = (): ThunkAction<void, {}, {}, AnyAction> => async(dispatch): Promise<any> => {
    dispatch(setFetching(true));
    return await getSourcesFromApi().then((data: SourcesResponseType): SourcesResponseType => {
      if(data.status && data.status === 'ok'){
        dispatch(setSources(data));
      }else{
        dispatch(fetchError(data.message));
      }
      dispatch(setFetching(false));
      return data;
    }).catch((e: Error): {} => {
      dispatch(setFetching(false));
      dispatch(fetchError(e));
      return Promise.reject(e);
    });
}

export const getHeadlines = (feed: SourcesType): ThunkAction<void, {}, {}, AnyAction> => async(dispatch): Promise<any> => {
  dispatch(setFeed(feed.name));
  dispatch(setFetching(true));
  return await getHeadlinesFromApi(feed.id).then((data: any): any => {
    dispatch(setHeadlines(data.articles));
    dispatch(setFetching(false));
    return data;
  }).catch((e: Error): {} => {
    dispatch(setFetching(false));
    dispatch(fetchError(e));
    return Promise.reject(e);
  });
}

export const setLanguageAction = (language: string): ThunkAction<void, {}, {}, AnyAction> => (dispatch): void => {
  dispatch(setLanguage(language));
}

export const setCategoryAction = (category: string): ThunkAction<void, {}, {}, AnyAction> => (dispatch): void => {
  dispatch(setCategory(category));
}

export const toggleMenuAction = (): ThunkAction<void, {}, {}, AnyAction> => (dispatch): void => {
  dispatch(toggleMenu());
}

const initialState: AppState = {
  category: '',
  language: '',
  feed: '',
  sources: [],
  articles: [],
  menuOpen: false,
  error: '',
  fetching: false
}

export const actionsReducer: Reducer<AppState> = (
  state = initialState,
  action,
  ): any => {
  switch (action.type) {
    case Actions.SET_LANGUAGE:
      return {...state, language: action.payload};
    case Actions.SET_CATEGORY:
      return {...state, category: action.payload};
    case Actions.SET_FEED:
      return {...state, feed: action.payload};
    case Actions.GET_SOURCES:
      return {...state, sources: action.payload.sources};
    case Actions.GET_HEADLINES:
      return {...state, articles: action.payload};
    case Actions.FETCH_ERROR:
      return {...state, error: action.payload};
    case Actions.SET_FETCHING:
        return {...state, fetching: action.payload};
    case Actions.TOGGLE_MENU:
      return {...state, menuOpen: !state.menuOpen};
    default:
      return {
        ...state
    }
  }
};

export default actionsReducer;