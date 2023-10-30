import useBaseQuery from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";


export interface ShopItem extends Model {
    name: string
    description: string
    photo_url: string
    price: number
    for_sale: boolean
}


export function useShopItems() {
    return useBaseQuery<APIResponse<{items: {id: ShopItem}}>>(['items'], `payments/items/`)
}


export function useShopItem(id: string|number) {
    return useBaseQuery<APIResponse<{items: ShopItem}>>(['item', id], `payments/item/${id}/`)
}
