import { Actions, ActionTypes } from '../../types/StateActions.types';

export const setLanguage = (language: string): ActionTypes => ({
  type: Actions.SET_LANGUAGE,
  payload: language
});

export const setCategory = (category: string): ActionTypes => ({
  type: Actions.SET_CATEGORY,
  payload: category
});

export const setSources = (sources: any): ActionTypes => ({
  type: Actions.GET_SOURCES,
  payload: sources
});

export const setFeed = (feed: string): ActionTypes => ({
  type: Actions.SET_FEED,
  payload: feed
});

export const setHeadlines = (headlines: any): ActionTypes => ({
  type: Actions.GET_HEADLINES,
  payload: headlines
});

export const fetchError = (error: any): ActionTypes => ({
  type: Actions.FETCH_ERROR,
  payload: error
});

export const setFetching = (status: boolean): ActionTypes => ({
  type: Actions.SET_FETCHING,
  payload: status
});

export const toggleMenu = (): ActionTypes => ({
  type: Actions.TOGGLE_MENU
});
