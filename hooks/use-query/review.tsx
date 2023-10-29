import { useInfiniteQuery } from '@tanstack/vue-query';
import axios from 'axios';
import useBaseQuery from ".";
import type { APIResponse } from "~/types/api";
import type { Model } from "~/types/models";
import { SERVER_URL } from '~/config';


export interface Review extends Model {
    id: number;
    is_positive: boolean
    text: string
    author: {
        first_name: string
        last_name: string
        photo_url: string
    }
    created_at: string; // ISO 8601 format date string
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
            // const currentUrl = new URL(lastPage.config.url);
            // const currentPage = Number(currentUrl.searchParams.get('page'));
            // return lastPage.data.success && lastPage.data.data.reviews.length ? currentPage + 1 : undefined;
            // return currentUrl.searchParams.get('page') + 1
            // console.log(currentUrl.searchParams.get('page'))
            return lastPage.data.page + 1
        },
        onSuccess: (data) => console.log(data.pages),
        onError: (e) => console.log(e)
    })
}