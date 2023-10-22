<template>
  <header class="header">
    <div class="header__container">
      <button class="header__menu-btn" aria-label="Меню">
        <nuxt-icon name="burger" class="header__menu-btn-icon"/>
      </button>
      <NuxtLink to="/" class="header__logo-link">
        <nuxt-icon name="logo" class="header__logo"/>
      </NuxtLink>
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Кейсы
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Магазин
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Тайник
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Возвышение
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Крафт
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Plinco
            </NuxtLink>
          </li>
          <li class="header__nav-elem">
            <NuxtLink href="/" class="header__nav-link">
              Отзывы
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__info">
        <div class="header__theme-switcher">
          <ThemeSwitcher/>
        </div>
        <div class="header__coin-box">
          <NuxtImg
              src="/coin.png"
              format="avif,webp"
              densities="x1 x2"
              class="header__coin-img"
          />
          342
        </div>
        <NuxtLink to="/" class="header__profile-link">
          <NuxtImg
              src="/avatar.jpg"
              format="avif,webp"
              densities="x1 x2"
              class="header__profile-avatar"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 17px 0;
  backdrop-filter: blur(20px);
  background-color: var(--color-header-bg);
  border-bottom: 1px solid var(--color-header-border);
  color: var(--color-header-color);

  @media (min-width: 1200px) {
    padding: 0;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 16px;

    @media (min-width: 1024px) {
      padding: 0 40px;
    }
  }

  &__logo-link {
    display: inline-block;
  }

  &__logo {
    width: 115px;
    height: 32px;

    @media (min-width: 1200px) {
      width: 140px;
      height: 40px;
    }
  }

  &__nav {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &__nav-list {
    display: flex;
    margin: 0 -8px;

    @media (min-width: 1200px) {
      margin: 0 -15px;
    }
  }

  &__nav-elem {
    padding: 0 8px;

    @media (min-width: 1200px) {
      padding: 0 15px;
    }
  }

  &__nav-link {
    position: relative;
    display: block;
    padding: 26px 0;
    font-size: 16px;
    font-weight: 600;
    transition: color .3s;
    color: #606060;

    @media (min-width: 1200px) {
      font-size: 18px;
    }

    &::before {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: var(--color-header-link-active);
      content: "";
      opacity: 0;
      transition: opacity .3s;
    }

    &:hover {
      &::before {
        opacity: 1;
      }
    }

    &.active {
      color: var(--color-header-link-active);

      &::before {
        opacity: 1;
      }
    }
  }

  &__info {
    display: flex;
    align-items: center;
    margin-left: 18px;
  }

  &__theme-switcher {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &__coin-box {
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 9px 17px;
    border-radius: 11px;
    font-size: 18px;
    font-weight: 600;
    background-color: var(--color-header-coins-bg);

    @media (min-width: 1024px) {
      margin: 0 18px 0 15px;
    }
  }

  &__coin-img {
    flex-shrink: 0;
    display: block;
    margin-right: 4px;
    width: 14px;
    height: 14px;
  }

  &__profile-link {
    display: block;
    width: 44px;
    height: 44px;
  }

  &__profile-avatar {
    display: block;
    width: 100%;
    border-radius: 50%;
  }

  &__menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    margin-left: -9px;
    padding: 0;
    background: none;
    border: none;
    color: inherit;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  &__menu-btn-icon {
    width: 24px;
    height: 17px;
  }
}
</style>

<script>
import ThemeSwitcher from "./ThemeSwitcher.vue";

export default {
  components: {ThemeSwitcher}
}
</script>
