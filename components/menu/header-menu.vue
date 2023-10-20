<template>
  <div class="menu">
    <nuxt-link exact  to="/" class="menu-item" exact-active-class="menu-item_active">
      <span>Кейсы</span>
      <div class="menu-item_border"></div>
    </nuxt-link>
    <nuxt-link  to="/shop" class="menu-item" active-class="menu-item_active">
      <span>Магазин</span>
      <div class="menu-item_border"></div>
    </nuxt-link>
    <nuxt-link  to="/" class="menu-item" active-class="menu-item_active">
      <span>Тайник</span>
      <div class="menu-item_border"></div>
    </nuxt-link>
    <nuxt-link  to="/" class="menu-item" active-class="menu-item_active">
      <span>Алхимия</span>
      <div class="menu-item_border"></div>
    </nuxt-link>
    <div class="menu-item">
      <span>Другие режимы <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 451.847 451.847" style="enable-background:new 0 0 512 512" xml:space="preserve"><path d="M225.923 354.706c-8.098 0-16.195-3.092-22.369-9.263L9.27 151.157c-12.359-12.359-12.359-32.397 0-44.751 12.354-12.354 32.388-12.354 44.748 0l171.905 171.915 171.906-171.909c12.359-12.354 32.391-12.354 44.744 0 12.365 12.354 12.365 32.392 0 44.751L248.292 345.449c-6.177 6.172-14.274 9.257-22.369 9.257z" data-original="#000000"/></svg></span>
      <div class="menu-item_border"></div>
        <div class="submenu">
          <nuxt-link  to="/" class="submenu-item" active-class="menu-item_active">
            Plinco
          </nuxt-link>
          <nuxt-link  to="/" class="submenu-item" active-class="menu-item_active">
            Взломщик
          </nuxt-link>
        </div>
    </div>
    <nuxt-link  to="/reviews" class="menu-item" active-class="menu-item_active">
      <span>Отзывы</span>
      <div class="menu-item_border"></div>
    </nuxt-link>

  </div>

</template>

<script>
export default {
  name: "header-menu"
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
.submenu {
  display: none;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: max-content;
  border-radius: 6px;
  background: var(--case-background);
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.08);
  top: 60px;
  &-item {
    display: flex;
    height: max-content;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: 500;
    opacity: 0.4;
    transition: 0.2s;
    &:hover {
      opacity: 1;
    }
  }
}
.menu {
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 25px;
  justify-content: center;
  @media(max-width: 1100px) {
    gap: 20px;
  }
  @media(max-width: 1000px) {
    gap: 10px;
  }
  @media(max-width: 900px) {
    display: none;
  }
  & a {
    text-decoration: none;
    color: var(--button-background);
  }
  &-item {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100%;
    & svg {
      height: 10px;
      width: 10px;
      margin-left: 7px;
    }
    &:hover > .submenu {
      display: flex;
    }
    & span {
      display: flex;
      position: relative;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      opacity: 0.4;
      transition: 0.3s;
      @media(max-width: 1100px) {
        font-size: 16px;
      }
      @media(max-width: 1000px) {
        font-size: 14px;
      }
    }
    &_active .menu-item_border {
      opacity: 1;
    }
    &_active span {
      opacity: 1;
    }
    &:hover > .menu-item_border {
      opacity: 1;
    }
    &_border {
      display: flex;
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 3px;
      opacity: 0;
      transition: 0.2s;
      background: var(--button-background);
      &__active {
        opacity: 1;
      }
    }
  }
}
</style>
