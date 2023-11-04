import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/vue-query";
import { SERVER_URL } from "~/config";
import { useAuthStore } from "~/store/authNew";

export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
    timeout: 1000
})

export default function useBaseQuery<T>(keys: (string|number)[], url: string, onSuccess?: (data: any) => void) {
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            const {data} = await apiInstance.get(url)
            return data as T
        },
        onSuccess: onSuccess
    })
}

export function useBaseKwtQuery<T>(keys: (string|number)[], url: string, onSuccess?: (data: any) => void) {
    const auth = useAuthStore()
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            const {data} = await apiInstance.get(url, {
                headers: {
                    Authorization: `KWT ${auth.kwt}`
                }
            })
            return data as T
        },
        onSuccess: onSuccess,
        onError: (e: AxiosError) => {
            switch (e.response?.status) {
                case 403:
                    auth.removeKwt()
                    break
            }
        }
    })
}