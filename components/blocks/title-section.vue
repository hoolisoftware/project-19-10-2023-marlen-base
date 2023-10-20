<template>
 <div class="title">
   <div v-if="icon" class="title-icon">
     <nuxt-img v-if="icon === 'inadzuma'" format="webp" src="/img/icons/inadzuma.png" alt="Инадзума"/>
     <nuxt-img v-if="icon === 'liue'" format="webp" src="/img/icons/li_ue.png" alt="Ли ЮЭ"/>
     <nuxt-img v-if="icon === 'monshtadt'" format="webp" src="/img/icons/monshtadt.png" alt="Монштадт"/>
     <nuxt-img v-if="icon === 'sumeru'" format="webp" src="/img/icons/sumeru.png" alt="Сумеру"/>
   </div>
   <div class="title-text">{{text}}</div>
   <div class="title-info" v-if="info">{{info}}</div>
 </div>
</template>

<script>
export default {
  name: "title-section",
  props: {
    icon: {
      type: String,
      require: false
    },
    text: {
      type: String,
      require: true
    },
    info: {
      type: String,
      require: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.title {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 25px 0;
  &-icon {
    display: flex;
    & img {
      width: 70px;
      height: 70px;
      @media(max-width: 470px) {
        height: 40px;
        width: 40px;
      }
    }
  }
  &-text {
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    color: var(--title-color);
    @media(max-width: 470px) {
      font-size: 36px;
    }
    @media(max-width: 380px) {
      font-size: 28px;
    }
  }
  &-info {
    display: flex;
    font-style: normal;
    background: var(--title-info);
    font-weight: 600;
    box-sizing: border-box;
    padding: 8px 18px;
    height: fit-content;
    font-size: 16px;
    border-radius: 5px;
    color: var(--title-text);
    @media(max-width: 380px) {
      font-size: 14px;
    }
  }
}
</style>
