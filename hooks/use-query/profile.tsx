import useBaseQuery from ".";
import type { APIResponse } from '@/types/api'
import type { Model } from "@/types/models";


export interface UserProfile extends Model {
    first_name: string
    last_name: string
    photo_url: string
}

export function useUserProfile(id: string|number) {
    return useBaseQuery<APIResponse<{profile: UserProfile}>>(['user_profile', id], `user/details/${id}`)
}