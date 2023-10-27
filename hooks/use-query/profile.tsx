import useBaseQuery from ".";
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

export function useUserProfile(id: string|number) {
    return useBaseQuery<APIResponse<{user: UserInformation}>>(['user', id], `user/details/${id}`)
}

export function useUserStats(id: string|number) {
    return useBaseQuery<APIResponse<{stats: UserStats}>>(['stats', id], `user/stats/${id}`)
}
