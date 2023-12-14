<script setup lang="ts">
import { useUserProfile, useUserStats, useUserInventory } from "~/hooks/use-query/profile";

const { id } = useRoute().params
const {data: profileData, isLoading: profileIsLoading, isError: profileIsError} = useUserProfile(String(id))
const {data: statsData, isLoading: statsIsLoading, isError: statsIsError} = useUserStats(String(id))
const {data: inventoryData, isLoading: inventoryIsLoading, isError: inventoryIsError} = useUserInventory(String(id))
</script>

<template>
    <div class="page">
        <loader v-if="profileIsLoading || statsIsLoading || inventoryIsLoading"/>
        <div v-else-if="profileIsError">
            Error...
        </div>
        <div v-else="profileData?.data">
            <title-section text="Профиль"/>
            <div class="profile">
                <div class="profile-info">
                    <div class="profile-avatar">
                        <img v-if="profileData?.data.user.photo_url" :src="profileData?.data.user.photo_url" alt="Аватар"/>
                        <nuxt-img v-else src="/img/avatars/no-avatar.png" format="webp" class="profile-avatar"/>
                    </div>
                    <div class="profile-name"> {{ profileData?.data.user.first_name + (profileData?.data.user.last_name ? profileData?.data.user.last_name : "") }} </div>                    
                    <div v-if="statsIsLoading">
                        Loading...
                    </div>
                    <div v-else-if="statsIsError">
                        Error...
                    </div>
                    <div v-else="statsData?.data">
                      <div class="profile-stat">
                          <h2>Статистика</h2>
                          <div class="profile-stat_item">
                              <div>Открыто кейсов</div>
                              <div>{{ `${statsData?.data.stats.cases_opened}` }}</div>
                          </div>
                          <div class="profile-stat_item">
                              <div>Выбито на сумму</div>
                              <div><img src="/img/icons/moon.png" alt="Мун" />{{ `${statsData?.data.stats.case_opened_mora}` }}</div>
                          </div>
                          <div class="profile-stat_item">
                              <div>Выбито кристаллов</div>
                              <div>
                                  <img src="/img/icons/crystall.png" alt="Кристаллов" /> {{ `${statsData?.data.stats.crystals_obtained}` }}</div>
                          </div>
                      </div>
                    </div>
                </div>
                <div v-if="inventoryIsLoading">
                    Loading...
                </div>
                <div v-else-if="inventoryIsError">
                    Error...
                </div>
                <div v-else="inventoryData?.data">
                    <div class="inventory">
                        <div class="inventory-top">
                            <div class="inventory-top_title">
                                <h2>Инвентарь</h2>
                                <span>{{ inventoryData?.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold)).length }} 
                                  {{ getNoun(inventoryData?.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold)).length, "предмет", "предмета", "предметов") }}</span>
                            </div>
                        </div>
                        <div class="inventory-tabs">
                            <div :class="'inventory-tabs_active inventory-tabs_active__' + activeTab"></div>
                            <div :class="'inventory-tabs_item' + (activeTab === 0 ? ' inventory-tabs_item__active':'')" v-on:click="activeTab = 0">Все предметы</div>
                            <div :class="'inventory-tabs_item' + (activeTab === 1 ? ' inventory-tabs_item__active':'')" v-on:click="activeTab = 1">Выведено</div>
                        </div>
                        <div class="inventory-items">
                          <div v-for="profile_item in inventoryData?.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold))">
                            <profile-item :image="SERVER_URL + profile_item.item.photo_url" :cost="profile_item.item.price"/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import mediumButton from "@/components/buttons/medium-button.vue";
import profileItem from "@/components/cards/profile-item.vue";
import titleSection from "@/components/blocks/title-section.vue";
import {modalStore} from "~/store/modal";
import { authStore } from "~/store/auth";
import { getNoun } from "~/languageCorrecter"
import { SERVER_URL } from "~/config";
import Loader from "~/components/loaders/Loader.vue";

export default {
    name: "user_profile",
    head: {
        title: 'Kleewish | Профиль'
    },
    components: {
        mediumButton,
        profileItem,
        titleSection
    },
    data() {
        return {
            activeTab: 0,
            otherProfile: 1,
            modals: modalStore(),
            authStores: authStore(),
        }
    },
    created() {
      if (process.client) {
        // if ((!localStorage.getItem("KWT")) || (localStorage.getItem("KWT") == 'null')) this.$router.push('/');
      }
    },
}

</script>

<style lang="scss" scoped>

@import '../static/colors.scss';
.page {
  width: 100%;
  max-width: 1300px;
}
.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  @media(max-width: 1100px) {
    flex-direction: column;
    gap: 25px;
  }
  &-info {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px 65px;
    align-items: center;
    gap: 15px;
    background: var(--profile-background);
    border: var(--profile-border);
    border-radius: 10px;
  }
  &-avatar {
    display: flex;
    width: 120px;
    height: 120px;
    object-fit: cover;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 120px;
      object-fit: cover;
    }
  }
  &-name {
    display: flex;
    width: 100%;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: var(--profile-name);
  }
  &-contacts {
    display: flex;
    gap: 10px;
    & div {
      display: flex;
      width: 32px;
      height: 32px;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        transform: scale(1.04);
      }
    }
  }
  &-cash {
    display: flex;
    width: 100%;
    min-width: 240px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    &_left {
      display: flex;
      flex-direction: column;
      gap: 5px;
      & div:nth-child(1) {
        display: flex;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #A6A6A6;
      }
      & div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        & img {
          width: 22px;
          height: 22px;
        }
        & span {
          font-size: 16px;
        }
      }
    }
  }
  &-stat {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 240px;
    gap: 7px;
    & h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: var(--profile-h2);
      margin: 0;
    }
    &_item {
      display: flex;
      width: 100%;
      justify-content: space-between;
      & div:nth-child(1) {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #767676;
      }
      & div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 5px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #767676;
        & img {
          width: 14px;
          height: 14px;
        }
      }
    }
  }
}

::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: var(--scroll-track-color);
}

::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-color);
    border-radius: 5px;
    min-height: 20px !important;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scroll-thumb-hovered-color);
}


.inventory {
  display: flex;
  flex-direction: column;
  width: 644px;
  height: max-content;
  height: 420px;
  box-sizing: border-box;
  padding: 20px;
  gap: 15px;
  background: var(--profile-background);
  border: var(--profile-border);
  border-radius: 10px;
  @media(max-width: 1100px) {
    width: 100%;
  }

  &-tabs {
    display: flex;
    position: relative;
    flex-direction: row;
    background: var(--profile-tab-background);
    border-radius: 10px;
    width: max-content;
    height: max-content;
    box-sizing: border-box;
    padding: 2px;
    @media(max-width: 436px) {
      align-self: center;
    }
    &_item {
      display: flex;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      z-index: 2;
      border-radius: 10px;
      box-sizing: border-box;
      padding: 10px 13px;
      height: 100%;
      background: none;
      color: var(--profile-tab-inactive);
      transition: 0.2s;
      cursor: pointer;
      &__active {
        color: var(--button-color);
      }
    }
    &_active {
      position: absolute;
      left: 2px;
      top: 2px;
      height: 36px;
      background: var(--button-background);
      color: #ffffff;
      border-radius: 10px;
      transition: 0.2s;
      &__0 {
        width: 110px;
      }
      &__1 {
        transform: translateX(110px);
        width: 88px;
      }
    }
  }
  &-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 436px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    &_actions {
      display: flex;
      box-sizing: border-box;
      padding: 8px 10px;
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      border: 2px solid #C9A788;
    }
    &_title {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      & h2 {
        margin: 0;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
      & span {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        opacity: 0.3;
      }
    }
  }
  &-items {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
    overflow: auto;
      scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);
      box-sizing: border-box;
      padding-right: 5px;
      &::-webkit-scrollbar {
          width: 2px;
      }
    @media(max-width: 436px) {
      align-self: center;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
