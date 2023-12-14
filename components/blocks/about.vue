<script setup>
import { useAuthStore } from "~/store/authNew";

const auth = useAuthStore()
</script>

<template>
  <div class="about">
    <h1>О нас в цифрах</h1>
    <div class="about-items">
      <div class="about-item">
        <div class="about-item_icon">
          <img src="@/assets/icons/key-icon.svg" />
        </div>
        <div class="about-item_main">
          <div class="about-item_value">125 000</div>
          <div class="about-item_title">Открытых кейсов</div>
        </div>
      </div>
      <div class="about-item">
        <div class="about-item_icon">
          <img src="@/assets/icons/users-icon.svg" />
        </div>
        <div class="about-item_main">
          <div class="about-item_value">125 000</div>
          <div class="about-item_title">Пользователей</div>
        </div>
      </div>
      <div class="about-item">
        <div class="about-item_icon">
          <img src="@/assets/icons/bag-icon.svg" />
        </div>
        <div class="about-item_main">
          <div class="about-item_value">125 000</div>
          <div class="about-item_title">Покупок в магазине</div>
        </div>
      </div>
      <div class="about-item">
        <div class="about-item_icon">
          <img src="@/assets/icons/star-icon.svg" />
        </div>
        <div class="about-item_main">
          <div class="about-item_value">125 000</div>
          <div class="about-item_title">Отзывов</div>
        </div>
      </div>
    </div>
    <div class="about-right">
      <nuxt-img format="webp" alt="Девушка" class="about-right_girl-shadow" src="/img/klee-shadow.png"/>
      <nuxt-img format="webp" alt="Девушка" class="about-right_girl" src="/img/Klee.png"/>
      <div class="about-right_text" v-if="!auth.kwt">А ты всё еще не с нами?</div>
      <medium-button v-if="!auth.kwt" text="Присоединиться"/>
    </div>
  </div>
</template>

<script>
import mediumButton from "@/components/buttons/medium-button.vue";
export default {
  name: "about",
  components: {mediumButton}
}
</script>

<style lang="scss">
@import '../../public/colors';

.about {
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 230px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1335px;
  background: var(--about-background);
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px 20px;
  @media(max-width: 1024px)
  {
    flex-direction: column;
  }
  & h1 {
    display: flex;
    position: absolute;
    left: 0;
    top: -100px;
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 56px;
    color: var(--button-background);
    @media(max-width: 376px) {
      font-size: 34px;
    }
    @media(max-width: 346px) {
      font-size: 30px;
    }
  }
  &-items {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    @media(max-width: 720px)
    {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media(max-width: 1024px)
    {
      max-width: 80%;
    }
  }
  &-item {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    width: 234px;
    height: 162px;
    @media(max-width: 360px)
    {
      width: 100%;
    }
    &_value {
      font-weight: 700;
      font-size: 30px;
      line-height: 36px;
      color: var(--button-background);
    }
    &_title {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: var(--button-background);
      opacity: 0.4;
    }
    &_icon {
      display: flex;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 76px;
      width: 76px;
      justify-content: center;
      align-items: center;
      background: var(--about-item-icon);
      border-radius: 10px;
    }
    &_main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3px;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 48px 0 20px 0;
      background: var(--about-item-background);
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    &_girl {
      position: absolute;
      right: -150px;
      top: -220px;
      height: 360px;
      @media(max-width: 724px)
      {
        display: none;
      }
      &-shadow {
        position: absolute;
        right: -2px;
        top: -20px;
        @media(max-width: 724px)
        {
          display: none;
        }
      }
    }
    &_text {
      display: flex;
      margin-top: 70px;
    }
  }
}
</style>
