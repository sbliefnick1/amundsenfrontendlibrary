import axios, { AxiosResponse } from 'axios';

import { TableResource } from 'interfaces';

export type PopularTablesAPI = {
  msg: string;
  results: TableResource[];
}

export function metadataPopularTables() {
  return axios.get('/api/metadata/v0/popular_tables')
  .then((response: AxiosResponse<PopularTablesAPI>) => {
    return response.data.results;
  });
}
