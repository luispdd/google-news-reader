import SourcesType from './Sources.types';

export default interface SourcesResponseType {
  status: string,
  sources?: SourcesType[],
  message?: string
}