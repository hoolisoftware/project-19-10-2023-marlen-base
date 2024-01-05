<script setup lang="ts">
import { useAuthStore } from '~/store/authNew'
import { ref } from 'vue'
import { useReviews, type Review } from "~/hooks/use-query/review";
import { useUserSelf } from '~/hooks/use-query/profile';
import {getNoun} from '~/languageCorrecter';

const auth = useAuthStore()
const filter = ref('all')

const setFilter = (value: string) => {
  filter.value = value
}

const filteredReviews = (reviews: Review[], currentUserId?: number) => {
  return reviews.filter(
    item =>
      filter.value === 'all' ? true : filter.value==='positive' ? item.is_positive : !item.is_positive
  ).filter(
    item => item.id
  ).filter(
    item => currentUserId ? (item.author.id !== currentUserId) : true
  )
}

const { data, fetchNextPage, isLoading } = useReviews()
const { data: userData, isLoading: userIsLoading } = useUserSelf()

</script>
<template>
  <div class="page">
    {{ auth.user }}
    <title-section id="title" style="width: fit-content; align-self: center;" text="Отзывы" :info="`${data?.pages[0].data.count} ${getNoun(data?.pages[0].data.count, 'отзыв', 'отзыва', 'отзывов')}`" />
    <div class="reviews">
      <loader v-if="isLoading || userIsLoading"/>
      <div :style="`margin-right: ${margin_right}px;`" id="reviews-list" class="reviews-list" v-else-if="data?.pages">
        <review-user v-if="auth.kwt"/>
        <template v-for="page in data.pages">
          <template v-for="review in filteredReviews(page.data.reviews, userData?.data?.user?.id)" :key="review.id">
            <review-item
              v-bind="review"
            />
          </template>
        </template>
        <medium-button v-if="data.pages[Object.keys(data.pages).length - 1].data?.has_next" text="Увидеть ещё"
          @click="fetchNextPage"></medium-button>
      </div>
      <div>
        <div class="reviews-stat">
          <review-stats />
          <div><medium-button @click="() => setFilter('all')" text="Все" :border="filter!=='all'" /></div>
          <div><medium-button @click="() => setFilter('positive')" text="Только положительные" :border="filter!=='positive'" /></div>
          <div><medium-button @click="() => setFilter('negative')" text="Только отрицательные" :border="filter!=='negative'" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import reviewItem from "@/components/reviews/review-item.vue"
import reviewUser from "@/components/reviews/review-user.vue"
import reviewStats from "@/components/reviews/review-stats.vue";
import titleSection from "@/components/blocks/title-section.vue";
import MediumButton from "@/components/buttons/medium-button.vue";
import Loader from '~/components/loaders/Loader.vue';
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
  },
  data() {
    return {
      margin_right: 0,
    }
  },
  methods: {
    async get_margin() {
      let title = document.querySelector("#title")
      let reviews_list = document.querySelector("#reviews-list")
      while (reviews_list === null) {
        await new Promise(r => setTimeout(r, 30));
        reviews_list = document.querySelector("#reviews-list")
      } 
      if (window.innerWidth <= 1100) {
        this.margin_right = 0
      } else {
        this.margin_right = Number(reviews_list?.getBoundingClientRect().right)-Number(title?.getBoundingClientRect().right)+this.margin_right
      }
    }
  },
  mounted() {
    this.get_margin()
    window.addEventListener('resize', this.get_margin)
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
    width: 100%;

    @media(max-width: 1100px) {
      width: 100%;
    }
  }

  &-stat {
    position: sticky;
    top: 0px;
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-right: 0px;
    margin-left: auto;

    @media(max-width: 1100px) {
      width: 100%;
    }
  }
}
</style>
