import { u as useBaseQuery } from './index-93da1471.mjs';

function useCases() {
  return useBaseQuery(["cases"], "case/all/");
}
function useCase(id) {
  return useBaseQuery(["cases", id], `case/details/${id}`);
}

export { useCases as a, useCase as u };
//# sourceMappingURL=case-6a5dc538.mjs.map
