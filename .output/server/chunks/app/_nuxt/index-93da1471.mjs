import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import { S as SERVER_URL } from './config-5bff1946.mjs';

const apiInstance = axios.create({
  baseURL: SERVER_URL + "/api/",
  timeout: 1e3
});
function useBaseQuery(keys, url, onSuccess) {
  return useQuery({
    queryKey: keys,
    queryFn: async () => {
      const {
        data
      } = await apiInstance.get(url);
      return data;
    },
    onSuccess
  });
}

export { useBaseQuery as u };
//# sourceMappingURL=index-93da1471.mjs.map
