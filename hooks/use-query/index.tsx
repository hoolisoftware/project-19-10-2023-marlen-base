import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import { SERVER_URL } from "~/config";

export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
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