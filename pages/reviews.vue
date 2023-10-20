<template>
  <div class="page">
    <title-section text="Отзывы" info="1000 отзывов"/>
    <div class="reviews">
      <div class="reviews-list">
        <review v-for="(review,index) in filteredReviews" :avatar="review.avatar" :name="review.name" :text="review.text" :source="review.source" :date="review.date" :type="review.type" :key="index" />
      </div>
      <div class="reviews-stat">
        <review-stats/>
        <div @click="selectedOption = 'all'"><medium-button text="Все" :border="selectedOption !== 'all'"/></div>
        <div @click="selectedOption = 'positive'"><medium-button text="Только положительные" :border="selectedOption !== 'positive'"/></div>
        <div @click="selectedOption = 'negative'"><medium-button text="Только отрицательные" :border="selectedOption !== 'negative'"/></div>
      </div>
    </div>
  </div>
</template>

<script>
import review from "@/components/reviews/review.vue";
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
    review,
    reviewStats,
    titleSection
  },
  computed: {
    filteredReviews() {
      if (this.selectedOption === "all") {
        return this.reviewList;
      } else if (this.selectedOption === "positive") {
        return this.reviewList.filter((review) => review.type === "positive");
      } else if (this.selectedOption === "negative") {
        return this.reviewList.filter((review) => review.type === "negative");
      }
    },
  },
  data() {
    return {
      selectedOption: "all",
      reviewList: [
        {
          avatar: '/img/avatars/bukin.jpeg',
          name: 'Гена Букин',
          date: '07.03.2023 15:22',
          text: 'Текст отзыва',
          source: 'vk',
          type: 'negative'
        },
        {
          avatar: '/img/avatars/avatar.jpeg',
          name: 'Анонимус',
          date: '07.03.2023 15:22',
          text: 'Текст отзыва',
          source: 'tg',
          type: 'positive'
        }
      ]
    }

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
  @media(max-width: 1100px)
  {
    flex-direction: column-reverse;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
  &-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media(max-width: 1100px)
    {
      width: 100%;
    }
  }
  &-stat {
    display: flex;
    flex-direction: column;
    gap: 7px;
    @media(max-width: 1100px)
    {
      width: 100%;
    }
  }
}
</style>
