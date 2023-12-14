import useBaseQuery, { useBaseKwtMutation } from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";


export interface ShopItem extends Model {
    id: number
    name: string
    description: string
    photo_url: string
    price: number
    for_sale: boolean
}


export interface Payment extends Model {
    id: number;
    item: {
        id: number;
        name: string;
        description: string;
        price: number;
        for_sale: boolean;
        photo_url: string;
    };
    amount: number;
    owner: {
        id: number;
        first_name: string;
        last_name: string;
        photo_url: string;
    };
    created: string; // Дата создания в формате строки
    currency: string;
}


export function useShopItems() {
    return useBaseQuery<APIResponse<{ items: ShopItem[] }>>(['items'], `payments/items/`)
}


export function useShopItem(id: string | number) {
    return useBaseQuery<APIResponse<{ item: ShopItem }>>(['item', id], `payments/item/${id}/`)
}


export function useShopBuyItem() {
    return useBaseKwtMutation('payments/buy/')
}


export function usePayment(id: string) {
    return useBaseQuery<APIResponse<{ payment: Payment }>>(['payment', id], `payments/details/${id}`)
}