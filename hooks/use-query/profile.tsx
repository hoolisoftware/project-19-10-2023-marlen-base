import useBaseQuery, { useBaseKwtQuery, useBaseKwtMutation } from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";
import type { Item } from "./case";


export interface UserInformation extends Model {
    first_name: string
    last_name: string
    photo_url: string
}

export interface UserStats extends Model {
    cases_opened: number
    case_opened_mora: number
    crystals_obtained: number
}


export interface InventoryItem extends Model {
    id: number
    is_sold: boolean
    is_ordered: boolean
    from_shop: boolean
    item: Item
    owner: number
}

export interface ItemSold extends Model {
    success: boolean,
    heading: string,
    message: string,
    data: {
        sold_items: number[],
        total_price: number, 
    }
}


export function useUserProfile(id: string|number) {
    return useBaseQuery<APIResponse<{user: UserInformation}>>(['user', id], `user/details/${id}`)
}

export function useUserSelf() {
    return useBaseKwtQuery<APIResponse<{user: UserInformation}>>(['user-self'], `user/details/`)
}

export function useUserSelfUpdate() {
    return useBaseKwtMutation('user/settings/', 'patch')
}

export function useInventorySelf() {
    return useBaseKwtQuery<APIResponse<{items: InventoryItem[]}>>(['inventory-self'], `user/inventory/`)
}

export function useUserStats(id: string|number) {
    return useBaseQuery<APIResponse<{stats: UserStats}>>(['stats', id], `user/stats/${id}`)
}

export function useUserStatsSelf() {
    return useBaseKwtQuery<APIResponse<{stats: UserStats}>>(['stats-self'], `user/stats/`)
}

export function useUserInventory(id: string|number) {
    return useBaseQuery<APIResponse<{items: InventoryItem[]}>>(['inventory', id], `user/inventory/${id}`)
}

export function useSellItemCreate() {
    return useBaseKwtMutation('history/sell/')
}
