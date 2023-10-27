import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';

const apiInstance = axios.create({
  baseURL: "http://135.181.103.193:8000/api/",
  timeout: 1e3
});
function useBaseQuery(keys, url) {
  return useQuery({
    queryKey: keys,
    queryFn: async () => {
      const {
        data
      } = await apiInstance.get(url);
      return data;
    }
  });
}
function useCases() {
  return useBaseQuery(["cases"], "case/all/");
}
function useCase(id) {
  return useBaseQuery(["cases", id], `case/details/${id}`);
}

export { useCases as a, useCase as u };
//# sourceMappingURL=case-9d08c009.mjs.map
