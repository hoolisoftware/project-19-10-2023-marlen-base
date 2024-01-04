<script lang="ts" setup>
import { useUserSelf } from "~/hooks/use-query/profile";
import { modalStore } from "~/store/modal";

const modals = modalStore()
const { data, isLoading } = useUserSelf()
</script>

<template>
  <div class="mini-profile">
    <div class="profile">
      <div class="profile-cash" v-on:click="modals.showModal('deposit')">
        <div>{{ data?.data.user ? `${data?.data.user.balance}` : "Загрузка..." }}</div>
        <nuxt-img alt="moon" src="/img/mor.png" />
      </div>
      <nuxt-link :to="{ name: 'profile' }">
        <img v-if="data?.data.user.photo_url" :src="data?.data.user.photo_url" alt="" class="profile-avatar">
        <nuxt-img v-else src="/img/avatars/no-avatar.png" format="webp" class="profile-avatar"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import MediumButton from "@/components/buttons/medium-button.vue";
export default {
  name: "mini-profile",
  components: { MediumButton },
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
    object-fit: cover;
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
}</style>
