<script setup lang="ts">
import { useAuthStore } from '~/store/authNew'
import { ref } from 'vue'
import { useReviews, type Review } from "~/hooks/use-query/review";
import { formatIsoDate } from '@/utils/dates'

const auth = useAuthStore()
const filter = ref('all')

const setFilter = (value: string) => {
  filter.value = value
}

const filteredReviews = (reviews: Review[]) => {
  return reviews.filter(
    item =>
      filter.value === 'all' ? true : filter.value==='positive' ? item.is_positive : !item.is_positive
  ).filter(
    item => item.id
  )
}

const { data, fetchNextPage, isLoading } = useReviews()

</script>
<template>
  <div class="page">
    {{ auth.user }}
    <title-section text="Отзывы" :info="`${data?.pages[0].data.count} отзывов`" />
    <div class="reviews">
      <div v-if="isLoading">
        Loading...
      </div>
      <div class="reviews-list" v-else-if="data?.pages">
        <review-user/>
        <template v-for="page in data.pages">
          <template v-for="review in page.data.reviews.filter(item=> { return filter==='all' ? true : filter==='positive' ? item.is_positive : !item.is_positive } )" :key="review.id">
            <review-item
              v-bind="review"
            />
          </template>
        </template>
        <medium-button v-if="data.pages[Object.keys(data.pages).length - 1].data?.has_next" text="Увидеть ещё"
          @click="fetchNextPage"></medium-button>
      </div>
      <div class="reviews-stat">
        <review-stats />
        <div><medium-button @click="() => setFilter('all')" text="Все" :border="filter==='all'" /></div>
        <div><medium-button @click="() => setFilter('positive')" text="Только положительные" :border="filter==='positive'" /></div>
        <div><medium-button @click="() => setFilter('negative')" text="Только отрицательные" :border="filter==='negative'" /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import reviewItem from "@/components/reviews/review-item-new.vue"
import reviewUser from "@/components/reviews/review-user.vue"
import reviewStats from "@/components/reviews/review-stats.vue";
import titleSection from "@/components/blocks/title-section.vue";
import MediumButton from "@/components/buttons/medium-button.vue";
export default {
  name: "reviews",
  head: {
    title: 'Kleewish | Отзывы'
  },
  components: {
    MediumButton,
    reviewItem,
    reviewStats,
    titleSection
  }
}
</script>

<style lang="scss" scoped>
@import '../public/colors.scss';

select {
  display: flex;
  width: 200px;
  box-sizing: border-box;
  padding: 10px 5px;
  outline: none;
  background: none;
  border: var(--modal-input-border);
  color: var(--modal-text);
  border-radius: 6px;
  opacity: 0.5;
}

.page {
  width: 100%;
  max-width: 1280px;
}

.reviews {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  gap: 15px;

  @media(max-width: 1100px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 15px;
    width: 100%;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media(max-width: 1100px) {
      width: 100%;
    }
  }

  &-stat {
    display: flex;
    flex-direction: column;
    gap: 7px;

    @media(max-width: 1100px) {
      width: 100%;
    }
  }
}
</style>
