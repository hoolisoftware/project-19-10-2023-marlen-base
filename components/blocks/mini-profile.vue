<template>
  <div class="mini-profile">
    <div class="profile" v-if="!logged" v-on:click="modals.showModal('signIn')">
      <medium-button text="Войти"/>
    </div>
    <div class="profile" v-else>
      <div class="profile-cash" v-on:click="modals.showModal('deposit')">
        <nuxt-img alt="moon" src="/img/mor.png"/>
        <div>{{ authStores.user? `${authStores.user.balance}`: "Загрузка..."  }}</div>
      </div>
      <nuxt-link :to="{ name: 'profile' }">
        <nuxt-img format="webp" quality="90" width="88" height="88" class="profile-avatar" alt="Аватарка" :src="authStores.user ? authStores.user.photo_url : 'https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";
import {modalStore} from "~/store/modal";
import { authStore } from "~/store/auth";
export default {
  name: "mini-profile",
  components: {MediumButton},
  props: {
    logged: {
      type: Boolean,
      required: true
    },
  },
    data() {
      return {
          modals: modalStore(),
          authStores: authStore()
      }
    }
}
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  gap: 10px;
  &-avatar {
    display: flex;
    width: 44px;
    height: 44px;
    border-radius: 50px;
  }
  &-cash {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    height: max-content;
    padding: 11px 17px;
    background: var(--header-cash-background);
    border-radius: 11px;
    gap: 7px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    & img {
      width: 14px;
      height: 14px;
    }
    & div {
      display: flex;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      color: var(--header-cash-color);
    }
  }
}

</style>
