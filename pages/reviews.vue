<script setup lang="ts">
import { ref } from 'vue'
import { useReviews } from "~/hooks/use-query/review";
import { formatIsoDate } from '@/utils/dates'

const filter = ref('all')

const setFilter = (value: string) => {
  filter.value = value
}

const { data, fetchNextPage, isLoading } = useReviews()

</script>
<template>
  <div class="page">
    <title-section text="Отзывы" :info="`${data?.pages[0].data.count} отзывов`" />
    <div class="reviews">
      <div v-if="isLoading">
        Loading...
      </div>
      <div class="reviews-list" v-else-if="data?.pages">
        <template v-for="page in data.pages">
          <template v-for="review in page.data.reviews.filter(item=> { return filter==='all' ? true : filter==='positive' ? item.is_positive : !item.is_positive } )" :key="review.id">
            <review-item
              :avatar="review.author.photo_url"
              :name="`${review.author.first_name} ${review.author.last_name}`"
              :text="review.text"
              :date="formatIsoDate(review.created_at)"
              :type="review.is_positive ? 'positive' : 'negative'" 
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
import reviewItem from "@/components/reviews/review-item.vue"
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
