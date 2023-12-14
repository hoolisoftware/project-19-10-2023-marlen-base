<script setup lang="ts">
import { type Review } from '~/hooks/use-query/review';
import { formatIsoDate } from '@/utils/dates'

interface Props extends Review {
    self?: boolean
}

const props = defineProps<Props>()
</script>

<template>
    <div>
        <div :class="['review', self && 'review-self'].join(' ')">
            <div class="review-top">
                <div class="review-user">
                    <img v-if="props.author.photo_url" :src="props.author.photo_url" width="190" height="190" alt="Аватар" />
                    <nuxt-img v-else src="/img/avatars/no-avatar.png" format="webp" width="190" height="190"/>
                    <div class="review-info">
                        <div class="review-info_user">{{ props.author.first_name }} {{ props.author.last_name }}</div>
                        <div class="review-details_date">{{ formatIsoDate(props.created_at) }}</div>
                    </div>
                </div>
                <div class="review-details">
                    <div :class="props.is_positive ? 'review-details_icon' : 'review-details_icon__red'">
                        <img v-if="props.is_positive" src="@/assets/icons/positive.svg">
                        <img v-if="!props.is_positive" src="@/assets/icons/negative.svg">
                    </div>
                </div>
            </div>
            <div class="review-body">
                {{ props.text }}
            </div>
        </div>
        <div v-if="props.reply" class="review-answer">
            <div :class="['review'].join(' ')">
                <div class="review-top">
                    <div class="review-user">
                        <nuxt-img src="/img/avatars/no-avatar.png" format="webp" width="190" height="190"/>
                        <div class="review-info">
                            <div class="review-info_user">Kleewish</div>
                        </div>
                    </div>
                </div>
                <div class="review-body">
                    {{ props.reply.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../public/colors';

.review {
    display: flex;
    flex-direction: column;
    height: max-content;
    box-sizing: border-box;
    padding: 25px;
    gap: 20px;
    background: var(--review-background);
    border: var(--review-border);
    border-radius: 10px;

    &-answer
    {
        border-left: 2px solid #fff;
        padding-left: 10px;
        margin-left: 16px;
        margin-top: 16px;
    }

    &-self {
        border: var(--review-self-border);
    }

    &-top {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    &-user {
        display: flex;
        gap: 8px;

        & img {
            width: 66px;
            height: 66px;
            border-radius: 66px;
            object-fit: cover;
        }
    }

    &-info {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-evenly;

        &_user {
            display: flex;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
        }

        &_source {
            display: flex;
            align-items: center;
            gap: 5px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: var(--review-source);
        }
    }

    &-type {
        display: flex;
    }

    &-body {
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 25px;
        color: var(--review-body);
    }

    &-details {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-end;
        justify-content: center;

        &_icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background: var(--review-like);
            border-radius: 8px;

            &__red {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                height: 40px;
                background: var(--review-dislike);
                border-radius: 8px;
            }
        }

        &_date {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            opacity: 0.25;
        }
    }
}

img {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
}</style>
