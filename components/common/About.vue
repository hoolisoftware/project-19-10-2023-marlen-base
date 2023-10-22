<template>
  <div class="about">
    <h2 class="about__title">О нас в цифрах</h2>
    <div class="about__wrapper">
      <NuxtImg
          src="girl.png"
          format="avif,webp"
          densities="x1 x2"
          class="about__img"
      />
      <div class="about__box">
        <div class="about__grid">
          <div class="about__item" v-for="item in itemsList">
            <AboutItem
                :icon="item.icon"
                :value="item.value"
                :text="item.text"
                :link="item.link"
            />
          </div>
        </div>
        <div class="about__text-box">
          <p class="about__text">
            А ты всё еще не с нами?
            <NuxtImg
                src="emoji.png"
                format="avif,webp"
                densities="x1 x2"
                class="about__emoji"
            />
          </p>
          <Button text="Присоединиться"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  position: relative;
  max-width: 1320px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 106px;
  }

  &__title {
    margin-bottom: 32px;
    font-size: 36px;
    font-weight: 700;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 46px;
      text-align: left;
    }
  }

  &__wrapper {
    position: relative;
  }

  &__img {
    display: none;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    right: 0;
    transform: translateY(30%);
    width: 256px;
    pointer-events: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  &__box {
    position: relative;
    padding: 50px 24px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (min-width: 768px) {
      padding: 60px 20px 20px;
      border: 1px solid var(--color-about-border);
      border-radius: 20px;
      background-color: var(--color-bg2);

      &::before {
        position: absolute;
        top: -98px;
        left: -86px;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background: linear-gradient(98deg, #DBC1AB 0%, #C9A788 100%);
        content: "";
      }
    }

    @media (min-width: 920px) {
      display: grid;
      grid-template: auto / auto 245px;
      padding: 40px 20px 20px;
      grid-column-gap: 50px;
    }
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -10px 20px;

    @media (min-width: 920px) {
      margin: 0 -10px -20px;
    }
  }

  &__item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width: 234px;
    margin-bottom: 20px;
    padding: 38px 10px 0;
  }

  &__text-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;

    @media (min-width: 920px) {
      padding-top: 60px;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #968B88;
  }

  &__emoji {
    width: 24px;
    height: 24px;
    margin-left: 6px;
  }
}
</style>

<script>
import Button from "./Button.vue";
import AboutItem from "./AboutItem.vue";

export default {
  components: {AboutItem, Button},

  setup() {
    const itemsList = [
      {
        icon: 'key',
        value: '434 630',
        text: 'Открытых кейсов',
      },
      {
        icon: 'users',
        value: '23 120',
        text: 'Пользователей',
      },
      {
        icon: 'bag',
        value: '221 391',
        text: 'Покупок в магазине',
      },
      {
        icon: 'star',
        value: '999 481',
        text: 'Отзывов',
        link: '#',
      },
    ]

    return {itemsList}
  }
}
</script>