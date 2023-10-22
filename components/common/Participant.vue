<template>
  <div class="user">
    <NuxtImg
        :src="avatar"
        format="avif,webp"
        densities="x1 x2"
        class="user__avatar"
        width="45"
        height="45"
    />
    <p class="user__name">{{ name }}</p>
    <p class="user__score" :class="{ 'user__score--green': isScoreGreen }">{{ score }}</p>
  </div>
</template>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  font-size: 14px;
  user-select: none;

  &__avatar {
    flex-shrink: 0;
    display: block;
    margin-right: 12px;
    border-radius: 50%;
    width: 45px;
    height: 45px;
  }

  &__name {
    flex-grow: 1;
  }

  &__score {
    margin-left: 12px;
    color: #767676;

    &--green {
      color: #18C529;

      &::before {
        content: "+";
      }
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
    score: {
      type: Number,
      required: true
    },
    isScoreGreen: {
      type: Boolean
    }
  },
  setup({...props}) {
    return {...props}
  }
}
</script>
