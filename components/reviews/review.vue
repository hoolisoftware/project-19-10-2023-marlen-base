<template>
  <div class="review">
    <div class="review-top">
      <div class="review-user">
        <nuxt-img format="webp" :src="avatar" width="190" height="190" alt="Аватар"/>
        <div class="review-info">
          <div class="review-info_user">{{name}}</div>
          <div class="review-details_date">{{date}}</div>
        </div>
      </div>
      <div class="review-details">
        <div :class="type === 'positive'? 'review-details_icon':'review-details_icon__red'">
          <img v-if="type === 'positive'" src="@/assets/icons/positive.svg" />
          <img v-if="type === 'negative'" src="@/assets/icons/negative.svg" />
        </div>
      </div>
    </div>
    <div class="review-body">
      Текст отзыва
    </div>
  </div>
</template>

<script>
export default {
  name: "review",
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.review {
  display: flex;
  flex-direction: column;
  width: 790px;
  height: max-content;
  box-sizing: border-box;
  padding: 25px;
  gap: 20px;
  background: var(--review-background);
  border: var(--review-border);
  border-radius: 10px;

  @media(max-width: 1100px)
  {
    width: 100%;
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
      text-align: center;
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
}

</style>
