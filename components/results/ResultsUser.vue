<template>
  <div class="user">
    <NuxtImg
        :src="avatar"
        format="avif,webp"
        densities="x1 x2"
        class="user__avatar"
        width="66"
        height="66"
    />
    <div class="user__text-box">
      <p class="user__name">{{ name }}</p>
      <p class="user__tickets">
        Количество билетов:&nbsp;
        <span class="user__tickets-number">{{ ticketsNumber }}</span>
      </p>
    </div>
    <div class="user__prize-box">
      <NuxtImg
          :src="prize"
          format="avif,webp"
          densities="x1 x2"
          class="user__prize"
          width="70"
          height="70"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  padding: 12px 12px 12px 22px;
  border: 1px solid var(--color-page-results-border);
  border-radius: 10px;

  &__avatar {
    flex-shrink: 0;
    display: block;
    margin-right: 16px;
    border-radius: 50%;
    width: 66px;
    height: 66px;
  }

  &__text-box {
    flex-grow: 1;
  }

  &__name {
    margin-bottom: 3px;
    font-size: 18px;
    font-weight: 600;
  }

  &__tickets {
    font-size: 14px;
    font-weight: 500;
    color: #767676;
  }

  &__tickets-number {
    color: var(--color-text);
  }

  &__prize-box {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 92px;
    margin-left: 8px;
    border-radius: 8px;

    @media (min-width: 1024px) {
      width: 92px;
      border: 1px solid var(--color-page-results-border2);
    }
  }

  &__prize {
    width: 60px;
    height: 60px;

    @media (min-width: 1024px) {
      width: 70px;
      height: 70px;
    }
  }
}
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    ticketsNumber: {
      type: Number,
      required: true
    },
    prize: {
      type: String,
      required: true
    }
  },
  setup({...props}) {
    return {...props}
  }
}
</script>
