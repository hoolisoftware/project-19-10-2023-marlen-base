<script setup lang="ts">
import { useAuthStore } from "~/store/authNew";
import { useInventorySelf, useUserSelf, useUserStatsSelf } from "~/hooks/use-query/profile";

const auth = useAuthStore()
const { data, isLoading } = useUserSelf()
const { data: statsData, isLoading: isLoadingStats } = useUserStatsSelf()
const { data: inventoryData } = useInventorySelf()
</script>

<template>
  <loader v-if="isLoading || isLoadingStats"/>
  <div class="page" v-else-if="data?.data?.user">
    <title-section text="Профиль" />
    <div class="profile">
      <div class="profile-info">
        <div class="profile-avatar">
          <img
            v-if="data?.data?.user.photo_url"
            :src="data?.data?.user.photo_url"
            alt="Аватар"
          />
          <nuxt-img v-else src="/img/avatars/no-avatar.png" format="webp" class="profile-avatar"/>
        </div>
        <div class="profile-name">
          {{ data?.data.user.first_name  }} {{ data?.data.user.last_name  }}
        </div>
        <!-- <div class="profile-contacts" v-if="$route.params.otherProfile">
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_214_6157)">
                <path
                  d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z"
                  fill="#2787F5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M8.66727 10H6.33339C5.66658 10 5.5332 10.3139 5.5332 10.6599C5.5332 11.2779 6.32445 14.3432 9.21733 18.3972C11.146 21.1659 13.8631 22.6666 16.3357 22.6666C17.8193 22.6666 18.0028 22.3333 18.0028 21.7591V19.6666C18.0028 18.9999 18.1433 18.8669 18.613 18.8669C18.9592 18.8669 19.5526 19.0399 20.9373 20.3748C22.5197 21.9569 22.7806 22.6666 23.6706 22.6666H26.0045C26.6714 22.6666 27.0048 22.3333 26.8125 21.6755C26.602 21.0199 25.8465 20.0686 24.8439 18.9411C24.2999 18.2984 23.484 17.6062 23.2367 17.2601C22.8906 16.8152 22.9895 16.6174 23.2367 16.2219C23.2367 16.2219 26.0802 12.2172 26.3769 10.8577C26.5252 10.3633 26.3769 10 25.6711 10H23.3372C22.7438 10 22.4702 10.3139 22.3218 10.6599C22.3218 10.6599 21.135 13.5521 19.4537 15.4309C18.9097 15.9747 18.6625 16.1478 18.3657 16.1478C18.2174 16.1478 18.0026 15.9747 18.0026 15.4804V10.8577C18.0026 10.2644 17.8305 10 17.3358 10H13.6683C13.2975 10 13.0745 10.2753 13.0745 10.5363C13.0745 11.0987 13.9151 11.2284 14.0018 12.8105V16.2466C14.0018 16.9999 13.8656 17.1366 13.569 17.1366C12.7778 17.1366 10.8531 14.2314 9.7117 10.9071C9.48814 10.261 9.26377 10 8.66727 10Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_214_6157">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_214_6161)">
                <path
                  d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z"
                  fill="#26A5E4" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.24335 15.8309C11.9077 13.7988 15.018 12.459 16.5742 11.8118C21.0175 9.96363 21.9409 9.64257 22.5426 9.63195C22.675 9.62963 22.9709 9.66245 23.1626 9.81801C23.447 10.0488 23.4486 10.5496 23.417 10.8811C23.1762 13.4111 22.1344 19.5507 21.6043 22.3843C21.38 23.5833 20.9384 23.9854 20.5109 24.0247C19.5817 24.1102 18.8762 23.4106 17.9762 22.8208C16.568 21.8976 15.7725 21.323 14.4055 20.4223C12.8259 19.3813 13.8499 18.8091 14.7502 17.8741C14.9858 17.6294 19.0796 13.9057 19.1589 13.5679C19.1688 13.5256 19.178 13.3681 19.0844 13.285C18.9909 13.2019 18.8528 13.2303 18.7532 13.2529C18.6119 13.2849 16.3623 14.7719 12.0043 17.7136C11.3657 18.1521 10.7874 18.3658 10.2692 18.3546C9.69785 18.3423 8.59898 18.0316 7.78204 17.766C6.78004 17.4403 5.98367 17.2681 6.05304 16.7149C6.08917 16.4268 6.48592 16.1321 7.24335 15.8309Z"
                  fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_214_6161">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </div> -->
        <div class="profile-cash" v-if="!$route.params.otherProfile">
          <div class="profile-cash_left">
            <div>Баланс</div>
            <div>
              <img alt="moon" src="/img/icons/moon.png" />
              <span>{{ data?.data.user.balance }}</span>
            </div>
          </div>
          <div class="profile-cash-button" v-on:click="modals.showModal('deposit')">
            <medium-button color="green" text="Пополнить" />
          </div>
        </div>
        <div class="profile-stat">
          <h2>Статистика</h2>
          <div class="profile-stat_item">
            <div>Открыто кейсов</div>
            <div>{{ statsData?.data.stats.cases_opened }}</div>
          </div>
          <div class="profile-stat_item">
            <div>Выбито на сумму</div>
            <div>
              <img src="/img/icons/moon.png" alt="Мун" />
              {{ statsData?.data.stats.case_opened_mora }}
            </div>
          </div>
          <div class="profile-stat_item">
            <div>Выбито кристаллов</div>
            <div>
              <img src="/img/icons/crystall.png" alt="Кристаллов" />
              {{ statsData?.data.stats.crystals_obtained }}
            </div>
          </div>
        </div>
        <br>
        <medium-button text="Выйти" @click="() => {auth.removeKwt(); navigateTo('/')}"/>
      </div>
      <div class="inventory">
        <div class="inventory-top">
          <div class="inventory-top_title">
            <h2>Инвентарь</h2>
            <span>
              {{ inventoryData?.data.items.filter((item) => activeTab === 0 || (item.is_ordered && activeTab === 1)).length }} 
              {{ getNoun(inventoryData?.data.items.filter((item) => activeTab === 0 || (item.is_ordered && activeTab === 1)).length, "предмет", "предмета", "предметов") }}
            </span>

          </div>
          <div class="inventory-top_actions" v-if="!$route.params.otherProfile" @click="define()">
            Продать всё
          </div>
        </div>
        <div class="inventory-tabs">
          <div :class="'inventory-tabs_active inventory-tabs_active__' + activeTab"></div>
          <div :class="'inventory-tabs_item' + (activeTab === 0 ? ' inventory-tabs_item__active' : '')"
            v-on:click="activeTab = 0">Все предметы</div>
          <div :class="'inventory-tabs_item' + (activeTab === 1 ? ' inventory-tabs_item__active' : '')"
            v-on:click="activeTab = 1">Выведено</div>
        </div>
        <div class="inventory-sections">
          <div :style="`margin-left: ${relative_title_pos}px; transform: translate(-70%,0); position: absolute;`" v-show="relative_title_pos != 0">
            Название
          </div>
          <div :style="`margin-left: ${relative_cost_pos}px; transform: translate(-50%,0); position: absolute;`" v-show="relative_cost_pos != 0">
            Цена
          </div>
          <div :style="`margin-left: ${relative_status_pos}px; transform: translate(-50%,0); position: absolute;`" v-show="relative_status_pos != 0">
            Статус
          </div>
        </div>
        <div class="inventory-items">
            <new-inventory-item v-for="(profile_item, index) in inventoryData?.data.items.filter((item) => activeTab === 0 || (item.is_ordered && activeTab === 1))" 
              :image="SERVER_URL + profile_item.item.photo_url" 
              :title="profile_item.item.name" 
              :cost="`${profile_item.item.price}`"
              :id="`inv-item-${index}`"
              :status="profile_item.is_sold? 'Продано' : (profile_item.is_ordered? 'Выведено' : 'В инвентаре')"
              :item_id="Number(profile_item.id)"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import mediumButton from "@/components/buttons/medium-button.vue";
import inventoryItem from "@/components/cards/inventory-item.vue";
import newInventoryItem from "@/components/cards/new-inventory-item.vue";
import titleSection from "@/components/blocks/title-section.vue";
import { modalStore } from "~/store/modal";
import Loader from "~/components/loaders/Loader.vue";

definePageMeta({
  middleware: 'authenticated'
})
import { getNoun } from "~/languageCorrecter"
import { SERVER_URL } from "~/config";

export default {
  name: "profile",
  head: {
    title: 'Kleewish | Профиль'
  },
  components: {
    mediumButton,
    inventoryItem,
    titleSection,
    newInventoryItem,
  },
  data() {
    return {
      activeTab: 0,
      otherProfile: 0,
      modals: modalStore(),
      relative_title_pos: 0,
      relative_cost_pos: 0,
      relative_status_pos: 0,
    }
  },
  methods: {
    define() {
      let item = document.getElementById("inv-item-0")
      if (item === null) {
        return
      }
      let abs_inv_pos = Number(item?.getBoundingClientRect().x);
      let abs_title_pos = Number(item?.children[1].getBoundingClientRect().x)+Number(item?.children[1].getBoundingClientRect().width)/2;
      let abs_cost_pos = Number(item?.children[2].getBoundingClientRect().x)+Number(item?.children[2].getBoundingClientRect().width)/2;;
      let abs_status_pos = Number(item?.children[3].getBoundingClientRect().x)+Number(item?.children[3].getBoundingClientRect().width)/2;;
      let relative_title_pos = abs_title_pos-abs_inv_pos
      let relative_cost_pos = abs_cost_pos-abs_inv_pos
      let relative_status_pos = abs_status_pos-abs_inv_pos
      this.relative_title_pos = relative_title_pos
      this.relative_cost_pos = relative_cost_pos
      this.relative_status_pos = relative_status_pos
    },
  },
  async mounted() {
    while (document.getElementById("inv-item-0") === null) {
      await new Promise(r => setTimeout(r, 60))
    }
    this.define()
    window.addEventListener('resize', this.define)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.define)
  }
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
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 120px;
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


.inventory {
  display: flex;
  flex-direction: column;
  width: 644px;
  height: max-content;
  max-height: 420px;
  box-sizing: border-box;
  padding: 20px;
  gap: 15px;
  background: var(--profile-background);
  border: var(--profile-border);
  border-radius: 10px;

  @media(max-width: 1100px) {
    width: 100%;
  }

  &-sections {
    display: flex;
    position: relative;
    flex-direction: row;
    padding-bottom: 6px;
    & div {
      font-weight: 500;
      font-size: 12px;
      color: #767676;
    }
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
}</style>
