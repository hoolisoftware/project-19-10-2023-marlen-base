import useBaseQuery from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";


export interface Case extends Model {
    name: string
    category: string
    photo_url: string
    price: number
    items: Item[]
}


export interface Item extends Model {
    id: number
    name: string,
    photo_url: string
    type: string
    crystals: number
    price: number
    sgd_price: number
    cashback: number
}


export function useCases() {
    return useBaseQuery<APIResponse<{cases: Case[]}>>(['cases'], 'case/all/')
}

export function useCase(id: string|number) {
    return useBaseQuery<APIResponse<{case: Case}>>(['cases', id], `case/details/${id}`)
}