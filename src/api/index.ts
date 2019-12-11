import SourcesResponseType from '../types/SourcesResponse.types'

export const api = {
  baseurl: 'https://newsapi.org/v2/',
  apiKey: 'apiKey=', // ADD YOUR GOOGLE NEWS APIKEY
  sourcesUrl: 'sources',
  headlinesUrl: 'top-headlines'
}

export const getSources = async (): Promise<SourcesResponseType> =>  {
  const req = new Request(`${api.baseurl}${api.sourcesUrl}?${api.apiKey}`);
  return await fetch(req).then(response => response.json());
}

export const getHeadlines = async(source: string): Promise<any> => {
  const req = new Request(`${api.baseurl}${api.headlinesUrl}?sources=${source}&${api.apiKey}`);
  return await fetch(req).then(response => response.json());
}