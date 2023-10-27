import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

export const apiInstance = axios.create({
    baseURL: 'http://135.181.103.193:8000/api/',
    timeout: 1000
})

export default function useBaseQuery<T>(keys: (string|number)[], url: string) {
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            const {data} = await apiInstance.get(url)
            return data as T
        }
    })
}