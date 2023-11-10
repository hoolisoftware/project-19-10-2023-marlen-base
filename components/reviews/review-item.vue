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
    
                        <svg v-if="props.is_positive" width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.65432 14.6668V26.6668H7.50766C6.30766 26.6668 5.34766 25.7068 5.34766 24.5202V16.8268C5.34766 15.6402 6.32099 14.6668 7.50766 14.6668H9.65432ZM24.6676 12.6668H18.2943V8.00016C18.2943 6.5335 17.0943 5.3335 15.641 5.3335H15.521C14.9876 5.3335 14.5076 5.6535 14.2943 6.14683L10.6543 14.6668V26.6668H22.921C23.8943 26.6668 24.721 25.9735 24.8943 25.0135L26.6543 15.0135C26.8676 13.7868 25.9343 12.6668 24.681 12.6668H24.6676Z"
                                fill="#68B159" />
                        </svg>
    
                        <svg v-if="!props.is_positive" width="32" height="32" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.65432 17.3332V5.33317H7.50766C6.30766 5.33317 5.34766 6.29317 5.34766 7.47984V15.1732C5.34766 16.3598 6.32099 17.3332 7.50766 17.3332H9.65432ZM24.6676 19.3332H18.2943V23.9998C18.2943 25.4665 17.0943 26.6665 15.641 26.6665H15.521C14.9876 26.6665 14.5076 26.3465 14.2943 25.8532L10.6543 17.3332V5.33317H22.921C23.8943 5.33317 24.721 6.0265 24.8943 6.98651L26.6543 16.9865C26.8676 18.2132 25.9343 19.3332 24.681 19.3332H24.6676Z"
                                fill="#D34A4A" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="review-body">
                {{ props.text }}
            </div>
        </div>
        <div class="review-answer">
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
                    {{ props.text }}
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

svg {
    width: 22px;
    height: 22px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
}</style>
