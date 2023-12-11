<script setup lang="ts">
import { useAuthStore } from "~/store/authNew";
import { useInventorySelf, useUserSelf, useUserStatsSelf } from "~/hooks/use-query/profile";
import { useThemeStore } from "~/store/themeNew";

const auth = useAuthStore()
const { data, isLoading } = useUserSelf()
const { data: statsData, isLoading: isLoadingStats } = useUserStatsSelf()
const { data: inventoryData } = useInventorySelf()
let theme = useThemeStore();
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
          <img class="profile-avatar-edit" src="@/assets/icons/edit-pen-dark.svg" v-if="theme.darkTheme">
          <img v-else class="profile-avatar-edit" src="@/assets/icons/edit-pen-light.svg">
        </div>
        <div class="profile-name">
          {{ data?.data.user.first_name  }} {{ data?.data.user.last_name  }}
        </div>
        <div class="profile-cash">
          <div class="profile-cash_left">
            <div style="white-space: nowrap;">Ваш баланс</div>
            <div>
              <img alt="moon" src="/img/icons/moon.png" />
              <span style="font-size: 20px; font-weight: 700;">{{ data?.data.user.balance }}</span>
            </div>
          </div>
          <div>
            <medium-button class="profile-cash-button" @click="modals.showModal('deposit')" color="green" text="Пополнить" />
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
        <div class="profile-uid_input">
          <div class="profile-uid_input-text">
            <div class="profile-uid_input-text-div">Ваш UID</div>
            <svg @mouseover="show_uid_info=true" @mouseleave="show_uid_info=false" width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg" :class="`profile-uid_input-text-info-${theme.darkTheme? 'dark' : 'light'}`" src="@/assets/icons/info-circle.svg">
              <ellipse cx="13.3846" cy="11" rx="12.6923" ry="11" fill="#F5F5F5"/>
              <path transform="translate(9.4, 4)" d="M2.95876 8.81046C2.95876 8.35408 3.0573 7.9288 3.25438 7.53465C3.45145 7.1405 3.69002 6.80339 3.97008 6.52333C4.25013 6.24328 4.53019 5.97878 4.81025 5.72984C5.0903 5.47053 5.32887 5.19047 5.52595 4.88967C5.72303 4.5785 5.82156 4.25176 5.82156 3.90947C5.82156 3.39085 5.64005 2.99669 5.27701 2.72701C4.92434 2.44695 4.46277 2.30692 3.89228 2.30692C2.75131 2.30692 2.02005 2.80999 1.69851 3.81612L0.469368 3.13154C0.72868 2.40546 1.16951 1.85572 1.79186 1.48231C2.41421 1.09853 3.11953 0.906641 3.90784 0.906641C4.83099 0.906641 5.6193 1.16595 6.27277 1.68458C6.9366 2.2032 7.26852 2.92409 7.26852 3.84724C7.26852 4.28288 7.16998 4.69259 6.97291 5.07637C6.77583 5.46016 6.53726 5.79208 6.25721 6.07213C5.97715 6.35219 5.69709 6.62706 5.41704 6.89674C5.13698 7.15606 4.89841 7.45167 4.70134 7.78359C4.50426 8.10514 4.40572 8.44743 4.40572 8.81046H2.95876ZM3.67446 12.1711C3.39441 12.1711 3.15584 12.0726 2.95876 11.8755C2.76168 11.6785 2.66315 11.4399 2.66315 11.1598C2.66315 10.8798 2.76168 10.6412 2.95876 10.4441C3.15584 10.2471 3.39441 10.1485 3.67446 10.1485C3.96489 10.1485 4.20346 10.2471 4.39016 10.4441C4.58724 10.6412 4.68578 10.8798 4.68578 11.1598C4.68578 11.4399 4.58724 11.6785 4.39016 11.8755C4.20346 12.0726 3.96489 12.1711 3.67446 12.1711Z" fill="#A5A5A5"/>
            </svg>
            <div :style="show_uid_info? 'opacity:1;':'opacity:0'" :class="`profile-uid_input-info-${theme.darkTheme? 'dark' : 'light'}`">Тут вот где-то должно быть объяснение что такое UID и как его достать, но т.к. я не знаю, что это такое, я оставлю этот текст</div>
          </div>
          <div class="profile-uid_input-field">
            <input :class="`profile-uid_input-field-${theme.darkTheme? 'dark' : 'light'}`" inputmode="numeric" pattern="\d*" placeholder="Не указан">
            <img class="profile-uid_input-field-edit" src="@/assets/icons/edit-pen-dark.svg" v-if="theme.darkTheme">
            <img v-else class="profile-uid_input-field-edit" src="@/assets/icons/edit-pen-light.svg">
          </div>
        </div>
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
          <div class="inventory-top_actions" v-if="!is_mobile()">
              Продать всё
          </div>
        </div>
        <div class="inventory-top-buttons">
          <div class="inventory-tabs">
            <div :class="'inventory-tabs_active inventory-tabs_active__' + activeTab"></div>
            <div :class="'inventory-tabs_item' + (activeTab === 0 ? ' inventory-tabs_item__active' : '')"
              v-on:click="activeTab = 0">Все предметы</div>
            <div :class="'inventory-tabs_item' + (activeTab === 1 ? ' inventory-tabs_item__active' : '')"
              v-on:click="activeTab = 1">Выведено</div>
          </div>

          <div class="inventory-top_actions" v-if="is_mobile()">
              Продать всё
          </div>
        </div>
        <div class="inventory-items-text">
          Выберите один или несколько предметов
        </div>
        <div class="inventory-items-container" v-if="is_mobile()">
          <div class="inventory-sections">
            <div :style="`margin-left: ${relative_title_pos}px; transform: translate(-50%,0); position: absolute;`" v-show="relative_title_pos != 0">
              Название
            </div>
            <div :style="`margin-left: ${relative_cost_pos}px; transform: translate(-50%,0); position: absolute;`" v-show="relative_cost_pos != 0">
              Стоимость
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
        <template v-else>
          <div class="inventory-sections">
            <div :style="`margin-left: ${relative_title_pos}px; transform: translate(-50%,0); position: absolute;`" v-show="relative_title_pos != 0">
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
        </template>
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
      modals: modalStore(),
      relative_title_pos: 0,
      relative_cost_pos: 0,
      relative_status_pos: 0,
      show_uid_info: false,
    }
  },
  methods: {
    define() {
      let item = document.getElementById("inv-item-0")
      if (item === null) {
        return
      }
      let title = item.querySelector(".item-title")
      let cost = item.querySelector(".item-cost")
      let status = item.querySelector(".item-status")
      console.log()
      let abs_inv_pos = Number(item?.getBoundingClientRect().x);
      let abs_title_pos = Number(title?.getBoundingClientRect().x)+Number(title?.getBoundingClientRect().width)/2;
      let abs_cost_pos = Number(cost?.getBoundingClientRect().x)+Number(cost?.getBoundingClientRect().width)/2;;
      let abs_status_pos = Number(status?.getBoundingClientRect().x)+Number(status?.getBoundingClientRect().width)/2;;
      let relative_title_pos = abs_title_pos-abs_inv_pos
      let relative_cost_pos = abs_cost_pos-abs_inv_pos
      let relative_status_pos = abs_status_pos-abs_inv_pos
      this.relative_title_pos = relative_title_pos
      this.relative_cost_pos = relative_cost_pos
      this.relative_status_pos = relative_status_pos
    },
    is_mobile() {
      return window.innerWidth < 850
    }
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

$medium_small: 850px;
$medium_large: 950px;
$large: 1100px;

.page {
  width: 100%;
  max-width: 1300px;
}

.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: $medium_small) {
    flex-direction: column;
    gap: 25px;
  }

  &-uid_input {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-info {
      position: absolute;
      transform: translate(50%, -50%);
      font-size: 14px;
      border-radius: 5px;
      padding: 10px;
      width: 200px;
      transition: opacity 0.4s ease;
      &-dark {
        @extend .profile-uid_input-info;
        background: #242424;
        border: 1px #464646 solid;
        color: #ffffff;
      }
      &-light {
        @extend .profile-uid_input-info;
        border: 1px #9e9e9e solid;
        background-color: #dfdfdf;
        color: #000000;
      }
    }

    &-text {
      display: flex;
      height: 27px;
      align-items: center;
      margin-bottom: 3px;

      &-info {
        &-dark {
          & ellipse {
            fill: #171717;
          }
          & path {
            fill: #7a7a7a;
          }
        }
        &-light {
          & ellipse {
            fill: #F5F5F5;
          }
          & path {
            fill: #A5A5A5;
          }
        }
      }

      &-div {
        display: inline-block;
        height: fit-content;
        width: fit-content;
        margin-right: 10px;
        margin-top: 3px;
        font-size: 14px;
        color: #767676;
        font-weight: 500;
      }
    }
    &-field {
      display: flex;
      &-dark {
        border-color: #3C3C3C;
        background-color: #171717;
        color: #979797;
      }
      &-light {
        border-color: #DFDFDF;
        background-color: #F9F9F9;
        color: #929292;
      }
      & input {
        width: 195px;
        height: 56px;
        border-radius: 8px;
        padding-left: 10px;
        border-style: solid;
        border-width: 1px;
        &:focus{
          outline: none;
        }
      }
      &-edit {
        padding-left: 10px;
        width: 55px;
        height: 55px;
      }
    }
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
    @media(min-width: $medium_small) {
      width: 386px;
      height: 544px;
    }
  }

  &-avatar {
    display: flex;
    width: 120px;
    height: 120px;
    object-fit: cover;

    &-edit {
      width: 30px!important;
      height: 30px!important;
      position: absolute;
      transform: translate(90px, 90px);
    }

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

    &-button {
      border-radius: 8px;
      height: 45px;
      width: 157px;
      font-size: 16px;
      font-weight: 600;
    }

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
    gap: 15px;

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

$very_small: 340px;
$small: 500px;
$medium: 660px;

.inventory {
  display: flex;
  flex-direction: column;
  width: 644px;
  height: max-content;
  max-height: 443px;
  box-sizing: border-box;
  padding: 20px;
  gap: 15px;
  background: var(--profile-background);
  border: var(--profile-border);
  border-radius: 10px;

  @media(max-width: $large) {
    width: 500px;
  }
  @media(max-width: $medium_large) {
    width: 400px;
  }
  @media(max-width: $medium_small) {
    width: 100%;
    padding: 0px;
    background-color: var(--loader-background);
    border: 0px;
  }
  @media((max-width: $large) and (min-width: $medium_large)){
    max-height: 420px;
  }
  @media((max-width: $medium_large) and (min-width: $medium_small)){
    max-height: 461px;
  }
  @media(max-width: $medium_small) and (min-width: $medium) {
    max-height: 431px;
  }
  @media(max-width: $medium) {
    max-height: 407px;
  }
  @media(max-width: $small) {
    max-height: 449px;
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
    border-radius: 5px;
    width: max-content;
    height: 40px;
    box-sizing: border-box;
    padding: 2px;

    @media(max-width: $very_small) {
      height: 30px;
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
      @media(max-width: $very_small) {
        font-size: 10px;
        line-height: 9px;
      }

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
      border-radius: 5px;
      transition: 0.2s;
      @media(max-width: $very_small) {
        height: 27px;
      }

      &__0 {
        width: 110px;
        @media(max-width: $very_small) {
          width: 93px;
        }
      }

      &__1 {
        transform: translateX(110px);
        width: 88px;
        @media(max-width: $very_small) {
          transform: translateX(92px);
          width: 74px;
        }
      }
    }
  }

  &-top {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media(max-width: $very_small) {
        height: 30px;
      }
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
      margin-right: 0px;
      margin-left: auto;
      @media(max-width: $very_small) {
        font-size: 10px;
      }
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

    &-text {
      color: #767676;
      font-size: 12px;
      font-weight: 500;
    }

    &-container {
      @extend .inventory;
      height: max-content;
      overflow: hidden;
      background-color: var(--profile-background);
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 15px;  
      padding-bottom: 15px
    }
  }
}</style>
