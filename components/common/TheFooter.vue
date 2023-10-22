<template>
  <footer class="footer">
    <NuxtLink to="/" class="footer__logo-link">
      <nuxt-icon name="logo" class="footer__logo"/>
    </NuxtLink>
    <ul class="footer__nav-list">
      <li class="footer__nav-elem">
        <NuxtLink href="#" class="footer__nav-link">
          Правила сервиса
        </NuxtLink>
      </li>
      <li class="footer__nav-elem">
        <NuxtLink href="#" class="footer__nav-link">
          Пользовательское соглашение
        </NuxtLink>
      </li>
      <li class="footer__nav-elem">
        <NuxtLink href="#" class="footer__nav-link">
          Лицензионное соглашение
        </NuxtLink>
      </li>
      <li class="footer__nav-elem">
        <NuxtLink href="#" class="footer__nav-link">
          Политика конфиденциальности
        </NuxtLink>
      </li>
      <li class="footer__nav-elem">
        <NuxtLink href="#" class="footer__nav-link">
          Поддержка
        </NuxtLink>
      </li>
    </ul>
    <div class="footer__text-col">
      <div class="footer__text-box">
        <p class="footer__text">Все права принадлежат их правообладателям / All rights belong to their copyright
          holders.</p>
        <p class="footer__text">Сайт не аффилирован и не одобрен компанией разработчиком игры Genshin Impact /</p>
        <p class="footer__text">The site is not affiliated with or approved by the game developer Genshin Impact.</p>
      </div>
      <p class="footer__copyright footer__copyright--desktop">KleeWish.ru © 2023</p>
    </div>
    <p class="footer__copyright footer__copyright--mobile">KleeWish.ru © 2023</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px 40px;
  background-color: #000;
  border-top: 1px solid #1D1D1D;
  color: #fff;
  text-align: center;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: unset;
    padding: 20px 30px 20px 60px;
    text-align: left;
  }

  &__logo-link {
    order: 1;
    margin-bottom: 40px;
    margin-right: 16px;
    display: inline-block;
    opacity: .2;
    transition: opacity .8s;

    &:hover {
      opacity: 1;
    }

    @media (min-width: 1200px) {
      align-self: center;
      order: unset;
      margin: 0;
    }
  }

  &__logo {
    width: 236px;
    height: 68px;
  }

  &__nav-list {
    margin-bottom: 44px;

    @media (min-width: 1200px) {
      margin: 0 40px;
    }

    @media (min-width: 1440px) {
      min-width: 350px;
    }
  }

  &__nav-elem {
    &:not(:last-child) {
      margin-bottom: 9px;
    }
  }

  &__nav-link {
    font-size: 13px;
    line-height: 15px;
    color: rgba(#fff, .4);
    transition: color .3s;

    &:hover {
      color: #fff;
    }
  }

  &__text-col {
    margin-bottom: 40px;

    @media (min-width: 1200px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;
    }
  }

  &__text-box {
    font-size: 13px;
    color: #484746;
  }

  &__text {
    letter-spacing: .015em;

    &:not(:last-child) {
      margin-bottom: 3px;
    }

    @media (min-width: 1200px) {
      white-space: nowrap;
    }
  }

  &__copyright {
    font-size: 13px;
    color: rgba(#fff, .3);
    text-align: right;

    &--desktop {
      display: none;

      @media (min-width: 1200px) {
        display: block;
      }
    }

    &--mobile {
      order: 2;
      @media (min-width: 1200px) {
        display: none;
      }
    }
  }
}
</style>
