<template>
  <footer>
    <div class="foot-logo">
      <img src="@/assets/icons/foot-logo.svg" />
    </div>

    <div class="foot-links">
      <nuxt-link  to="/reviews">Правила сервиса</nuxt-link>
      <nuxt-link  to="/reviews">Пользовательское соглашение</nuxt-link>
      <nuxt-link  to="/reviews">Лицензионное соглашение</nuxt-link>
      <nuxt-link  to="/reviews">Политика конфиденциальности</nuxt-link>
      <nuxt-link  to="/reviews">Поддержка</nuxt-link>
    </div>
    <div class="foot-info">
      <div class="foot-info_text">
        <p>Все права принадлежат их правообладателям / All rights belong to their copyright holders.</p>
        <p>Сайт не аффилирован и не одобрен компанией разработчиком игры Genshin Impact /</p>
        <p>The site is not affiliated with or approved by the game developer Genshin Impact.</p>
      </div>
      <div class="foot-info_copy">
        KleeWish.ru © 2023
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "website-footer"
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: max-content;
  background: #000000;
  border: 1px solid #1D1D1D;
  box-sizing: border-box;
  padding: 20px 30px;
  @media(max-width: 1084px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
}
.foot {
  &-logo {
    transition: 0.8s;
    opacity: 0.2;
    &:hover {
      opacity: 1;
    }
  }
  &-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & a {
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: rgba(255,255,255,0.4);
      transition: 0.3s;
      text-decoration: none;
      &:hover {
        color: rgba(255,255,255,0.7);
      }
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    justify-content: space-between;
    &_text {
      display: flex;
      flex-direction: column;
      gap: 6px;
      justify-content: flex-end;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #484746;
      & p {
        margin: 0;
      }
    }
    &_copy {
      display: flex;
      justify-content: flex-end;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #FFFFFF;
      opacity: 0.4;
    }

  }
}
</style>
