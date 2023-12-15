<script setup lang="ts">
import { useReviewsStats } from "~/hooks/use-query/review";

const { data, isLoading } = useReviewsStats()

</script>

<template>
  <div class="stat">
    <div class="stat-title">Статистика</div>
    <div class="stat-main">
      <div class="stat-main_item">Положительных: <span class="stat-main_item__positive">
          {{ isLoading ? 'Загрузка...' : data?.data.positive_reviews }}
        </span></div>
      <div class="stat-main_item">Негативных: <span class="stat-main_item__negative">
          {{ isLoading ? 'Загрузка...' : data?.data.negative_reviews }}
        </span></div>
    </div>
    <div class="stat-line">
      <div :style="`width: ${(data?.data.positive_reviews+data?.data.negative_reviews)/data?.data.negative_reviews*100}%;`"></div>
      <div :style="`width: ${(data?.data.positive_reviews+data?.data.negative_reviews)/data?.data.positive_reviews*100}%;`"></div>
    </div>

    <div class="stat-description">
      <p>А что думаешь ты о нашем сайте?</p>
      <p>Напиши свой честный отзыв о нашем сервисе и получи <span>1 бесплатный кейс</span></p>
    </div>
    <div v-on:click="modals.showModal('review')">
      <medium-button text="НАПИСАТЬ ОТЗЫВ" />
    </div>
  </div>
</template>

<script lang="ts">
import mediumButton from "@/components/buttons/medium-button.vue";
import { modalStore } from "~/store/modal";
export default {
  name: "review-stats",
  components: {
    mediumButton
  },
  data() {
    return {
      modals: modalStore()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.stat {
  display: flex;
  flex-direction: column;
  width: 367px;
  height: max-content;
  box-sizing: border-box;
  padding: 25px 20px;
  gap: 15px;

  background: var(--reviews-background);
  border: var(--reviews-border);
  border-radius: 10px;

  @media(max-width: 1100px) {
    width: 100%;
  }

  &-title {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: var(--reviews-text);
  }

  &-main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: var(--reviews-text);

    &_item {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      &__positive {
        font-weight: 500;
        color: #48B75A;
      }

      &__negative {
        font-weight: 500;
        color: #E17474;
      }
    }
  }

  &-line {
    display: flex;
    width: 100%;
    height: 6px;
    background: none;
    border-radius: 30px;
    overflow: hidden;

    & div:nth-child(1) {
      display: flex;
      height: 100%;
      background: #E17474;
    }
    
    & div:nth-child(2) {
      display: flex;
      height: 100%;
      background: #48B75A;
    }
  }

  &-description {
    width: 100%;
    text-align: center;

    & p {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #9E9E9E;

      & span {
        font-weight: 600;
        color: var(--reviews-text);
      }
    }
  }
}</style>
