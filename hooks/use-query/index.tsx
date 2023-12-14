import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/vue-query";
import { SERVER_URL } from "~/config";
import { useAuthStore } from "~/store/authNew";

export const apiInstance = axios.create({
    baseURL: SERVER_URL + '/api/',
    timeout: 1000
})

export default function useBaseQuery<T>(keys: (string|number|null)[], url: string, onSuccess?: (data: any) => void) {
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            const {data} = await apiInstance.get(url)
            return data as T
        },
        onSuccess: onSuccess
    })
}

export function useBaseKwtQuery<T>(keys: (string|number|null)[], url: string, onSuccess?: (data: any) => void) {
    const auth = useAuthStore()
    keys.push(auth.kwt)
    return useQuery({
        queryKey: keys,
        queryFn: async () => {
            if (auth.kwt) {
                const {data} = await apiInstance.get(url, {
                    headers: {
                        Authorization: `KWT ${auth.kwt}`
                    }
                })
                return data as T
            }
            return {}
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

export function useBaseKwtMutation<RequestT, ResponseT>(url: string, method?: 'post'|'patch') {
    const auth = useAuthStore()

    return useMutation({
        mutationFn: async (formData: RequestT) => {
            const { data } = await apiInstance[method||'post'](url, formData, {
                headers: {
                    Authorization: `KWT ${auth.kwt}`
                }
            })
            return data as ResponseT
        },
        onSuccess: (data) => console.log(data)
    })
}