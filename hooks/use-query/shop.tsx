import useBaseQuery from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";


export interface ShopItem extends Model {
    id: number
    name: string
    description: string
    photo_url: string
    type: string
    crystals: number
    price: number
    sgd_price: number
    for_sale: boolean
    cashback: number
}


export function useShopItems() {
    return useBaseQuery<APIResponse<{items: ShopItem[]}>>(['items'], `payments/items/`)
}


export function useShopItem(id: string|number) {
    return useBaseQuery<APIResponse<{item: ShopItem}>>(['item', id], `payments/item/${id}`)
}
