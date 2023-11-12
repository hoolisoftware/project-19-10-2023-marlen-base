import { useInfiniteQuery, useMutation } from '@tanstack/vue-query';
import axios from 'axios';
import useBaseQuery, { apiInstance, useBaseKwtQuery, useBaseKwtMutation } from ".";
import type { APIResponse } from "~/types/api";
import type { Model } from "~/types/models";
import { SERVER_URL } from '~/config';
import { useAuthStore } from '~/store/authNew';


export interface Review extends Model {
    id: number;
    is_positive: boolean
    text: string
    author: {
        id: number
        first_name: string
        last_name: string
        photo_url: string
    }
    created_at: string // ISO 8601 format date string
    reply: null | {
        id: number
        name: string
        text: string
        created_at: string // ISO 8601 format date string
    }
}

export interface Stats {
    positive_reviews: number,
    negative_reviews: number
}

export function useReviewsStats() {
    return useBaseQuery<APIResponse<{data: Stats}>>(
        ['reviews-stats'],
        'reviews/stats/'
    )
}


export function useReviews() {
    return useInfiniteQuery<APIResponse<{reviews: Review[], page: number, has_next: boolean, count: number}>>({
        queryKey: ['reviews'],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await axios.get(`${SERVER_URL}/api/reviews/`, {
                params: { page: pageParam }
            })
            return await response.data
        },
        getNextPageParam: (lastPage: any) => {
            return lastPage.data.page + 1
        },
        onError: (e) => console.log(e)
    })
}


export function useReviewUser() {
    return useBaseKwtQuery<APIResponse<{review: Review}>>(
        ['review-user'],
        'reviews/user/'
    )
}


export function useReviewCreate() {
    return useBaseKwtMutation('reviews/create/')
}