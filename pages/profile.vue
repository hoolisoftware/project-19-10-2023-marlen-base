<script setup lang="ts">
import {ref, toRaw} from 'vue'
import { useInventorySelf, useUserSelf, useUserSelfUpdate, useUserStatsSelf } from "~/hooks/use-query/profile";
import { useThemeStore } from "~/store/themeNew";

const { data, isLoading } = useUserSelf()
const { data: statsData, isLoading: isLoadingStats } = useUserStatsSelf()
let { data: inventoryData } = useInventorySelf()
const { data: updateData, mutate } = useUserSelfUpdate()
let theme = useThemeStore();


const userGenshinUID = ref('') 

const updateProfile = (value: object) => {
  mutate(value)
}

const updateInventoryData = async () => {
  return await inventoryData._object.refetch()
}
const updateProfileData = async () => {
  return await data._object.refetch()
}

</script>

<template>
  <loader v-if="isLoading || isLoadingStats"/>
  <div class="page" v-else-if="data?.data?.user">
    <div :class="(show_copied_modal? 'profile-copied-show' : 'profile-copied-hide')">Скопировано!</div>
    <title-section text="Профиль" />
    <div class="profile">
      <div class="profile-info" v-if="!is_mobile()">
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
            <div class="profile-cash_left-text" style="white-space: nowrap;">Ваш баланс</div>
            <div>
              <animated-number :value="(extra_balance !== 0? balance+extra_balance : (get_balance(data?.data.user.balance)||balance))" :style="`font-size: 20px; font-weight: 700; color: ${theme.darkTheme? 'white':'black'};`"/>
              <nuxt-img alt="moon" src="/img/mor.png" />
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
              <div style="height: 14px;">{{ statsData?.data.stats.case_opened_mora }}</div>
              <nuxt-img alt="moon" src="/img/mor.png" />
            </div>
          </div>
          <div class="profile-stat_item">
            <div>Выбито кристаллов</div>
            <div>
              <div style="height: 14px;">{{ statsData?.data.stats.crystals_obtained }}</div>
              <img src="/img/icons/crystall.png" alt="Кристаллов" />
            </div>
          </div>
        </div>
        <div class="profile-uid_input">
          <div class="profile-uid_input-text">
            <div class="profile-uid_input-text-div">Ваш UID</div>
            <info-circle @mouseover="show_uid_info=true" @mouseleave="show_uid_info=false"/>
            <div :style="show_uid_info? 'opacity:1;':'opacity:0; z-index: -1;'" class="profile-uid_input-info">Тут вот где-то должно быть объяснение что такое UID и как его достать, но т.к. я не знаю, что это такое, я оставлю этот текст</div>
          </div>
          <div class="profile-uid_input-field">
            <input
              inputmode="numeric"
              pattern="\d*"
              placeholder="Не указан"
              @change="(e) => updateProfile({genshin_uid: e.currentTarget.value})"
              :value="data.data.user.genshin_uid"
            >
          </div>
        </div>
      </div>


      <div v-else :class="`profile-mobile-info-${show_mobile_profile? 'long' : 'short'}`">
        <div class="profile-mobile-top">
          <div class="profile-mobile-avatar">
            <img
              v-if="data?.data?.user.photo_url"
              :src="data?.data?.user.photo_url"
              alt="Аватар"
            />
            <nuxt-img v-else src="/img/avatars/no-avatar.png" format="webp" class="profile-mobile-avatar"/>
            <img @click="change_mobile_profile()" class="profile-mobile-avatar-edit" src="@/assets/icons/edit-pen-dark.svg" v-if="theme.darkTheme" :style="show_mobile_profile? 'opacity: 1' : 'opacity: 0'">
            <img @click="change_mobile_profile()" v-else class="profile-mobile-avatar-edit" src="@/assets/icons/edit-pen-light.svg">
          </div>
          <div class="profile-mobile-side_info">
            <div class="profile-mobile-side_info-name">
              {{ data?.data.user.first_name  }} {{ data?.data.user.last_name  }}
            </div>
            <div class="profile-mobile-side_info-balance">
              <span style="font-size: 18px; font-weight: 400; padding-right: 5px;">{{ data?.data.user.balance }}</span> 
              <nuxt-img alt="moon" src="/img/mor.png" style="width: 14px; height: 14px;"/>
            </div>
          </div>
          <img src="@/assets/icons/chevron-down.svg" class="profile-mobile-arrow" @click="change_mobile_profile_visibility()" :style="show_mobile_profile? 'transform: rotate(-180deg)' : 'transform: rotate(0deg)'">
        </div>
        <div class="profile-mobile-stat" :style="show_mobile_profile? 'opacity: 1' : 'opacity: 0'">
          <h2>Статистика</h2>
          <div class="profile-mobile-stat_item">
            <div>Открыто кейсов</div>
            <div>{{ statsData?.data.stats.cases_opened }}</div>
          </div>
          <div class="profile-mobile-stat_item">
            <div>Выбито на сумму</div>
            <div>
              {{ statsData?.data.stats.case_opened_mora }}
              <nuxt-img alt="moon" src="/img/mor.png" />
            </div>
          </div>
          <div class="profile-mobile-stat_item">
            <div>Выбито кристаллов</div>
            <div>
              {{ statsData?.data.stats.crystals_obtained }}
              <img src="/img/icons/crystall.png" alt="Кристаллов" />
            </div>
          </div>
        </div>
        <div class="profile-mobile-uid_input">
          <div class="profile-mobile-uid_input-text">
            <div class="profile-mobile-uid_input-text-div">UID</div>
          </div>
          <div class="profile-mobile-uid_input-field">
            <input inputmode="numeric" pattern="\d*" placeholder="Не указан" v-model="UIDInput">
            <img src="@/assets/icons/copy.svg" class="profile-mobile-uid_input-field-copy" @click="copyUIDInput()" >
          </div>
        </div>
        <button :class="`profile-mobile-save_button`">Сохранить</button>
        <div class="profile-mobile-referral_link">
          <div class="profile-mobile-referral_link-text">Реферальная ссылка</div>
          <div class="profile-mobile-referral_link-field">
            <input placeholder="Не указан" v-model="ReferralInput" disabled>
            <img src="@/assets/icons/copy.svg" class="profile-mobile-referral_link-field-copy" @click="copyReferealInput()">
          </div>
        </div>
      </div>

      <div class="profile-side">
        <div class="inventory">
          <div class="inventory-top">
            <div class="inventory-top_title">
              <h2>Инвентарь</h2>
              <span>
                {{ (exclude_items.length !== 0? items : (inventoryData? inventoryData.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold)) : [])).filter((item) => (!exclude_items.includes(item.id))).length }}
                {{ getNoun((exclude_items.length !== 0? items : (inventoryData? inventoryData.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold)) : [])).filter((item) => (!exclude_items.includes(item.id))).length, "предмет", "предмета", "предметов") }} 
              </span>

            </div>
            <div :class="`inventory-top_actions-${selected.length > 0? 'hidden' : 'shown'}`" v-if="!is_mobile()" @click="(selected.length == 0 && !is_mobile())? sell_all(): null">
                Продать всё
            </div>
          </div>
          <div class="inventory-top-buttons">
            <template v-if="true">
              <div class="inventory-top-selected-buttons" :class="`inventory-top-selected-buttons-${selected.length > 0? 'shown' : 'hidden'}`">
                <div class="inventory-top-selected-button-left" @click="selected.length > 0? sellSelected() : null"><div>Продать выделенное</div></div>
                <div class="inventory-top-selected-button-right" @click="selected.length > 0? orderSelected() : null"><div>Вывести выделенное</div></div>
              </div>
            </template>
            <template v-if="true">
              <div class="inventory-tabs" :class="`inventory-tabs-${selected.length > 0? 'hidden' : 'shown'}`">
                  <div :class="'inventory-tabs_active inventory-tabs_active__' + activeTab"></div>
                  <div :class="'inventory-tabs_item' + (activeTab === 0 ? ' inventory-tabs_item__active' : '')"
                    v-on:click="change_tab(0)">Все предметы</div>
                  <div :class="'inventory-tabs_item' + (activeTab === 1 ? ' inventory-tabs_item__active' : '')"
                    v-on:click="change_tab(1)">Выведено</div>
              </div>
            </template>

            <div :class="`inventory-top_actions-${selected.length > 0? 'hidden' : 'shown'}`" v-if="is_mobile()" @click="(selected.length == 0 && is_mobile())? sell_all(): null">
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
                <transition-group name="items">
                  <new-inventory-item @updateInventory="updateInventory" v-for="(profile_item, index) in inventoryData?.data.items.filter((item) => (!item.is_ordered && activeTab === 0 && !item.is_sold) || (item.is_ordered && activeTab === 1 && !item.is_sold)).filter((item) => (!exclude_items.includes(item.id)))" 
                    :image="SERVER_URL + profile_item.item.photo_url" 
                    :title="profile_item.item.name" 
                    :cost="`${profile_item.item.price}`"
                    :id="`inv-item-${index}`"
                    :status="profile_item.is_sold? 'Продано' : (profile_item.is_ordered? 'Выведено' : 'В инвентаре')"
                    :item_id="Number(profile_item.id)"
                    :on_click="() => {(!profile_item.is_sold && !profile_item.is_ordered)? select(profile_item.id) : null}"
                    :selected="selected.includes(Number(profile_item.id))"
                    :on_sell="sellSelected"
                    :on_order="orderSelected"
                    style="display: inline-block; transition: all 0.5s;"
                    :key="`inv-item-container-${index}`"
                  />
                </transition-group>
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
            <transition-group name="items" tag="div" class="inventory-items" v-if="activeTab===0">
              <div class="inventory-item-container" v-for="(profile_item, index) in ((exclude_items.length !== 0 || selected.length !== 0)? items : (get_inventory(inventoryData?.data.items) || items))"
              :key="profile_item.id"
              >
                <new-inventory-item @updateInventory="(val) => {updateInventory(val, updateInventoryData, updateProfileData); updateMaterialInventory(val)}"  
                  :image="SERVER_URL + profile_item.item.photo_url" 
                  :title="profile_item.item.name" 
                  :cost="`${profile_item.item.price}`"
                  :id="`inv-item-${index}`"
                  :status="profile_item.is_sold? 'Продано' : (profile_item.is_ordered? 'Выведено' : 'В инвентаре')"
                  :item_id="Number(profile_item.id)"
                  :on_click="() => {(!profile_item.is_sold && !profile_item.is_ordered)? select(profile_item.id) : null}"
                  :selected="selected.includes(Number(profile_item.id))"
                  :on_sell="sellSelected"
                  :on_order="orderSelected"
                />
              </div>
            </transition-group>
            <div class="inventory-items" v-else>
              <div class="inventory-item-container" v-for="(profile_item, index) in inventoryData?.data.items.filter((item) => (!item.is_ordered && this.activeTab === 0 && !item.is_sold) || (item.is_ordered && this.activeTab === 1 && !item.is_sold))"
              :key="profile_item.id"
              >
                <new-inventory-item @updateInventory="(val) => {updateInventory(val, updateInventoryData, updateProfileData); updateMaterialInventory(val)}"  
                  :image="SERVER_URL + profile_item.item.photo_url" 
                  :title="profile_item.item.name" 
                  :cost="`${profile_item.item.price}`"
                  :id="`inv-item-${index}`"
                  :status="profile_item.is_sold? 'Продано' : (profile_item.is_ordered? 'Выведено' : 'В инвентаре')"
                  :item_id="Number(profile_item.id)"
                  :on_click="() => {(!profile_item.is_sold && !profile_item.is_ordered)? select(profile_item.id) : null}"
                  :selected="selected.includes(Number(profile_item.id))"
                  :on_sell="sellSelected"
                  :on_order="orderSelected"
                />
              </div>
            </div>
          </template>
        </div>
        <div class="profile-referral" v-if="!is_mobile()">
          <div class="profile-referral-left">
            <div class="profile-referral-title">
              <div class="profile-referral-title-text">
                Реферальная ссылка
              </div>
              <info-circle class="profile-referral-title-info-circle" @mouseover="show_referral_info=true" @mouseleave="show_referral_info=false"/>
              <div :style="show_referral_info? 'opacity:1;':'opacity:0; z-index: -1;'" class="profile-referral-title-info">Скиньте эту ссылку для бонусов!!!Скиньте эту ссылку для бонусов!!!Скиньте эту ссылку для бонусов!!!Скиньте эту ссылку для бонусов!!!Скиньте эту ссылку для бонусов!!!</div>
            </div>
            <div class="profile-referral-field" @click="copyReferealInput()">
              <div class="profile-referral-field-text">{{ ReferralInput }}</div>
            </div>
          </div>
          <svg class="profile-referral-line-vertical" width="2" height="121" viewBox="0 0 2 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0L0.999997 59.9646L0.999995 121" :stroke="theme.darkTheme? `rgba(255, 255, 255, 0.08)`: `rgba(0, 0, 0, 0.08)`"/>
          </svg>
          <svg class="profile-referral-line-horizontal" width="calc(100%+100px)" height="5" viewBox="0 0 500 2" fill="black" xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="500" y2="0.5" :stroke="theme.darkTheme? `rgba(255, 255, 255, 0.08)`: `rgba(0, 0, 0, 0.08)`"/>
          </svg>
          <div class="profile-referral-right">
            <div class="profile-referral-stats">
              <div class="profile-referral-stat">
                <div class="profile-referral-stats-left">
                  Кол-во приглашённых
                </div>
                <div class="profile-referral-stats-right">
                  1000
                </div>
              </div>
              <div class="profile-referral-stat">
                <div class="profile-referral-stats-left">
                  Получено моры
                </div>
                <div class="profile-referral-stats-right">
                  1000
                  <nuxt-img alt="moon" src="/img/mor.png" style="width: 14px; height: 14px; margin-left: 4px; align-self: center;"/>
                </div>
              </div>
              <div class="profile-referral-stat">
                <div class="profile-referral-stats-left">
                  До подарка
                </div>
                <div class="profile-referral-stats-right">
                  5 пользователей
                </div>
              </div>
            </div>
            <div class="profile-referral-stats-small_text">
              Спасибо что доверяете нам!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import mediumButton from "@/components/buttons/medium-button.vue";
import infoCircle from "@/components/images/info-circle.vue";
import inventoryItem from "@/components/cards/inventory-item.vue";
import newInventoryItem from "@/components/cards/new-inventory-item.vue";
import titleSection from "@/components/blocks/title-section.vue";
import AnimatedNumber from "@/components/common/AnimatedNumber.vue"
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
    infoCircle,
    AnimatedNumber,
  },
  data() {
    let selected: Number[] = [];
    let exclude_items: Number[] = [];
    return {
      activeTab: 0,
      modals: modalStore(),
      relative_title_pos: 0,
      relative_cost_pos: 0,
      relative_status_pos: 0,
      show_uid_info: false,
      show_referral_info: false,
      show_mobile_profile: false,
      UIDInput: "1234567890",
      ReferralInput: "https://kleewish.com/?ref=5044436150",
      show_copied_modal: false,
      selected: selected,
      exclude_items: exclude_items,
      items: [],
      balance: 0,
      extra_balance: 0,
    }
  },
  methods: {
    get_balance(balance) {
      if (!balance) {
        return false
      }
      this.balance = balance
      return false
    },
    get_inventory(items) {
      if (!items) {
        return false
      }
      if (this.items.length == items.filter((item) => (!item.is_ordered && this.activeTab === 0 && !item.is_sold) || (item.is_ordered && this.activeTab === 1 && !item.is_sold)).length) {
        return false
      }
      this.items = items.filter((item) => (!item.is_ordered && this.activeTab === 0 && !item.is_sold) || (item.is_ordered && this.activeTab === 1 && !item.is_sold))
      return false
    },
    async updateMaterialInventory(ids: Number[]) {
      this.items.filter((item) => (ids.includes(item.id))).forEach((item) => {
        this.items.splice(this.items.indexOf(item), 1)
        if (this.selected.includes(item.id)) {
          this.selected.splice(this.selected.indexOf(item.id), 1)
        }
      })
    },
    async updateInventory(ids: Number[], update_inventory_data: Function, update_profile_data: Function) {
      let extra = 0;
      this.items.filter((item) => (ids.includes(item.id))).forEach((item) => {
        extra += item.item.price
      })
      this.extra_balance += extra
      this.exclude_items = this.exclude_items.concat(ids)
      await new Promise(r => setTimeout(r, 600)).then(async () => {
        await update_profile_data()
        await this.$nextTick().then(() => {
          this.extra_balance -= extra
          this.balance += extra
        })
      })
      
      await update_inventory_data().then(async () => {
      await new Promise(r => setTimeout(r, 500)).then(async () => {
        await this.$nextTick().then(async () => {
          ids.forEach(async (id) => {
            while (this.items.filter((item) => item.id === id).length !== 0) {
              await new Promise(r => setTimeout(r, 100))
            }
            this.exclude_items.splice(this.exclude_items.indexOf(id), 1)
          })
        })
      })
      })
    },
    define() {
      let item = document.getElementById("inv-item-0")
      if (item === null) {
        return
      }
      let title = item.querySelector(".item-title")
      let cost = item.querySelector(".item-cost")
      let status = item.querySelector(".item-status")
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
    },
    change_mobile_profile() {
      if (this.show_mobile_profile) {
        console.log('edit time')
      }
    },
    change_mobile_profile_visibility() {
      this.show_mobile_profile = !this.show_mobile_profile
    },
    async copyUIDInput() {
      if (this.UIDInput) {
        let textToCopy = this.UIDInput;
        
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        await new Promise((res, rej) => {
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
        this.show_copied_modal = true;
        await new Promise(r => setTimeout(r, 200))
        this.show_copied_modal = false
      }
    },
    async copyReferealInput() {
      if (this.ReferralInput) {
        let textToCopy = this.ReferralInput;
        
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        await new Promise((res, rej) => {
          document.execCommand("copy") ? res() : rej();
          textArea.remove();
        });
        this.show_copied_modal = true;
        await new Promise(r => setTimeout(r, 200))
        this.show_copied_modal = false
      }
    },
    select(id: number) {
      if (this.selected.includes(id)) {
        const index = this.selected.indexOf(id);
        if (index > -1) {
          this.selected.splice(index, 1);
        }
      } else {
        this.selected.push(id)
      }
    },
    sellSelected() {
      console.log('sell selected')
      this.modals.showModal('sell')
    },
    orderSelected() {
      console.log('order selected')
      this.modals.showModal('order')
    },
    sell_all() {
      console.log('sell all')
      this.modals.showModal('sell')
    },
    async change_tab(tab: number) {
      if (this.selected.length === 0) {
        this.activeTab = tab
        await new Promise(r => setTimeout(r, 20)); 
        this.define()
      }
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

$medium_small: 850px;
$medium_large: 950px;
$large: 1100px;

.page {
  width: 100%;
  max-width: 1300px;
}

.items-leave-to {
  opacity: 0;
}

.items-leave-to {
  transform: translateX(100%);
}

.items-leave-active {
  position: absolute;
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

.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media(max-width: $medium_small) {
    flex-direction: column;
    gap: 25px;
  }
  &-side {
    display: flex;
    flex-direction: column;
    height: 544px;
    @media (max-width: $large) {
      height: 665px;
    }
  }

  &-referral {
    display: flex;
    margin-top: 13px;
    border-width: 1px;
    border-style: solid;
    background: var(--profile-background);
    border: var(--profile-border);
    height: 121px;
    width: 644px;
    border-radius: 10px;
    overflow: hidden;
    @media(max-width: $large) {
      width: 500px;
      height: 242px;
    }
    @media(max-width: $medium_large) {
      width: 410px;
    }

    @media (max-width: $large) {
      flex-direction: column;
      justify-content: left;
    }

    &-line-vertical {
      @media (max-width: $large) {
        position: absolute;
        opacity: 0;
      }
    }
    &-line-horizontal {
      @media (min-width: $large) {
        position: absolute;
        opacity: 0;
        align-self: center;
      }
    }

    &-left {
      display: flex;
      flex-direction: column;
      width: fit-content;
      height: 100%;
      padding-right: 20px;
      padding-bottom: 20px;
      @media (max-width: $large) {
        width: 100%;
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      width: 40%;
      height: 100%;
      padding-right: 11px;
      padding-left: 20px;
      justify-content: center;
      align-items: center;
      @media (max-width: $large) {
        width: 100%;
        padding-right: 20px;
      }
    }
    &-field {
      display: flex;
      cursor: pointer;
      &-text {
        display: flex;
        background: radial-gradient(var(--profle-referral-text-color-center), var(--profle-referral-text-color-side));
        font-weight: 700;
        font-size: 14px;
        font-family: 'Roboto Mono', monospace;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: underline;
      }
      border-width: 1px;
      border-style: solid;
      background: var(--profile-background);
      border: var(--profile-border);
      width: 335px;
      height: 46px;
      text-align: center;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      margin-top: 15px;
      margin-left: 20px;
      @media (max-width: $large) {
        width: calc(100% - 20px);
      }
    }
    &-title {
      display: flex;
      flex-direction: row;
      margin-top: 14px;
      margin-left: 20px;
      @media (max-width: $large) {
        align-self: center;
        margin-left: 0px;
      }
      &-text {
        color: var(--profile-referral-title-color);
        font-weight: 700;
        font-size: 24px;
        margin-right: 8px;
      }
      &-info {
        position: absolute;
        @media (max-width: $large) {
          transform: translate(20%, -100%);
        }
        transform: translate(140%, -100%);
        font-size: 14px;
        border-radius: 5px;
        padding: 10px;
        width: 200px;
        transition: opacity 0.4s ease;
        background: var(--profile-uid-info-background);
        border-color: var(--profile-uid-info-border);
        color: var(--profile-uid-info-color);
        border-width: 1px;
        border-style: solid;
        &-circle {
          transform: translate(0px, 2px);
        }
      }
    }
    &-stat {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 9px;
    }
    &-stats {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-self: center;
      height: fit-content;
      white-space: nowrap;
      justify-content: center;
      &-small_text {
        font-size: 10px;
        font-weight: 500;
        text-align: center;
        width: 162px;
        margin-top: 8px;
        margin-bottom: 0px;
        color: var(--profile-stat-color);
      }
      &-left {
        display: flex;
        color: var(--profile-stat-color);
        font-weight: 500;
        font-size: 14px;
        width: fit-content;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-left: 0px;
      }
      &-right {
        display: flex;
        flex-direction: row;
        color: var(--profile-stat-color);
        width: fit-content;
        height: fit-content;
        font-weight: 600;
        font-size: 14px;
        height: 100%;
        display: flex;
        margin-right: 0px;
        margin-left: auto;
        justify-content: center;
        align-items: center;
        & img {
          transform: translate(0%, -1.4px);
        }
      }
    }
  }

  &-copied {
    border-radius: 5px;
    border-style: solid;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: var(--profile-copied-border);
    background-color: var(--profile-copied-background);
    color:  var(--profile-copied-color);
    z-index: 100;
    &-show {
      @extend .profile-copied;
      transition: all 0s ease;
      opacity: 1;
      z-index: 5;
    }
    &-hide {
      @extend .profile-copied;
      transition: all 0.9s ease;
      opacity: 0;
      z-index: -1;
    }
  }

  &-mobile {
    &-referral_link {
      display: flex;
      flex-direction: column;
      padding-left: 72px;
      width: 100%;

      &-text {
        display: inline-block;
        height: fit-content;
        width: fit-content;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        color: var(--profile-input-color);
        font-weight: 600;
      }
      &-field {
        display: flex;
        &-copy {
          width: 20px; 
          height: 20px;
          position: relative;
          transform: translate(-150%, 54%);
          cursor: pointer;
        }
        & input {
          border-color: var(--profile-input-border);
          background-color: var(--profile-input-background);
          color: var(--profile-input-color);
          width: 100%;
          height: 43px;
          border-radius: 8px;
          padding-left: 12px;
          border-style: solid;
          border-width: 1px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 3px;
          &:focus{
            outline: none;
          }
        }
      }
    }

    &-save_button {
      margin-left: 72px;
      margin-right: auto;
      width: 99px!important;
      height: 37px!important;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: 500;
      border-width: 1px;
      border-style: solid;
      background-color: var(--profile-background);
      border-radius: 10px;
      border-color: var(--profile-save-button-border);
      color: var(--profile-save-button-color);
    }

    &-uid_input {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 72px;

      &-text {
        display: flex;
        height: 27px;
        align-items: center;
        margin-bottom: 3px;

        &-div {
          display: inline-block;
          height: fit-content;
          width: fit-content;
          margin-right: 10px;
          margin-top: 3px;
          font-size: 16px;
          color: var(--profile-input-color);
          font-weight: 600;
        }
      }
      &-field {
        display: flex;
        &-copy {
          width: 20px; 
          height: 20px;
          position: relative;
          transform: translate(-150%, 54%);
          cursor: pointer;
        }
        & input {
          border-color: var(--profile-input-border);
          background-color: var(--profile-input-background);
          color: var(--profile-input-color);
          width: 100%;
          height: 43px;
          border-radius: 8px;
          padding-left: 12px;
          border-style: solid;
          border-width: 1px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 3px;
          &:focus{
            outline: none;
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
      padding-left: 72px;
      transition: all 0.4s ease;

      & h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
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
          color: var(--profile-stat-color);
        }

        & div:nth-child(2) {
          display: flex;
          align-items: center;
          gap: 5px;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          color: var(--profile-stat-color);

          & img {
            width: 14px;
            height: 14px;
          }
        }
      }
    }

    &-arrow {
      width: 24px;
      height: 24px;
      align-self: center;
      transition: all 0.4s ease;
    }

    &-top {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    &-side_info {
      display: flex;
      flex-direction: column;
      margin-right: auto;
      margin-left: 10px;
      justify-content: center;
      &-name {
        display: flex;
        width: fit-content;
        justify-content: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        color: var(--profile-name);
      }
      &-balance {
        padding-top: 4px;
        color: #A8A8A8;
        font-weight: 400;
        font-size: 18px;
      }
    }

    &-avatar {
      display: flex;
      width: 62px;
      height: 62px;
      object-fit: cover;
      margin-left: 0px;
      margin-right: 0px;

      &-edit {
        width: 25px!important;
        height: 25px!important;
        position: absolute;
        transform: translate(21px, 50px);
        transition: all 0.4s ease;
      }

      & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 120px;
      }
    }
    &-info {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 20px 20px;
      align-items: center;
      gap: 15px;
      background: var(--profile-background);
      border: var(--profile-border);
      border-radius: 10px;
      overflow: hidden;
      transition: all 0.4s ease;

      &-long {
        @extend .profile-mobile-info;
        height: 467px;
      }
      &-short {
        @extend .profile-mobile-info;
        height: 104px;
      }
    }
  }

  &-uid_input {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-info {
      position: absolute;
      transform: translate(50%, -50%);
      font-size: 14px;
      border-radius: 8px;
      padding: 10px;
      width: 200px;
      transition: opacity 0.4s ease;
      background: var(--profile-uid-info-background);
      border-color: var(--profile-uid-info-border);
      color: var(--profile-uid-info-color);
      border-width: 1px;
      border-style: solid;
    }

    &-text {
      display: flex;
      height: 27px;
      align-items: center;
      margin-bottom: 3px;

      &-info {
        & ellipse {
          fill: var(--profile-uid-info-ellipse);
        }
        & path {
          fill: var(--profile-uid-info-questionmark);
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
      & input {
        border-color: var(--profile-input-border);
        background-color: var(--profile-input-background);
        color: var(--profile-input-color);
        width: 256px;
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

      &-text {
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
        color: black;

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
    padding-top: 20px;

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
  height: 100%;
  max-height: 410px;
  box-sizing: border-box;
  padding: 20px;
  gap: 15px;
  background: var(--profile-background);
  border: var(--profile-border);
  border-radius: 10px;
  overflow: hidden;

  @media(max-width: $large) {
    width: 500px;
  }
  @media(max-width: $medium_large) {
    width: 410px;
  }
  @media(max-width: $medium_small) {
    width: 100%;
    padding: 0px;
    background-color: var(--loader-background);
    border: 0px;
  }
  @media((max-width: $large) and (min-width: $medium_large)){
    max-height: 410px;
  }
  @media((max-width: $medium_large) and (min-width: $medium_small)){
    max-height: 410px;
  }
  @media(max-width: $medium_small) and (min-width: $medium) {
    max-height: 441px;
  }
  @media(max-width: $medium) {
    max-height: 417px;
  }
  @media(max-width: $small) {
    max-height: 459px;
  }

  &-item {
    &-container {
      display: inline-block; 
      transition: all 0.5s;
    }
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
    transition: 0.3s;

    &-hidden {
      transform: translate(-100%, 0%);
      opacity: 0;
      & div {
        cursor: default;
      }
    }
    &-shown {
      transform: translate(0%, 0%);
      opacity: 1;
    }

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

    &-selected {
      &-buttons {
        position: absolute;
        display: flex;
        margin-left: 0px; 
        margin-right: 10px;
        height: 40px;
        align-items: center;
        margin-left: 2px;
        transition: 0.3s;
        z-index: 0;
        &-hidden {
          transform: translate(100%, 0%);
          opacity: 0;
          & div {
            cursor: default;
          }
        }
        &-shown {
          transform: translate(0%, 0%);
          opacity: 1;
          & div {
            cursor: pointer;
          }
        }
      }
      &-button {
        display: flex;
        font-size: 13px;
        border-width: 0px;
        height: 40px;
        width: 100px;
        transition: 0.3s;
        &:hover {
          opacity: 0.9;
        }
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: row;
        font-weight: 500;
        @media(max-width: $very_small) {
          font-size: 10px;
          height: 30px;
          width: 83.5px;
        }
        &-left {
          @extend .inventory-top-selected-button;
          border-radius: 5px 0px 0px 5px;
          background-image: linear-gradient(to right, var(--profile-item-selected-border-gradient-left), var(--profile-item-selected-border-gradient-right));
          color: var(--profile-item-background);
        }
        &-right {
          @extend .inventory-top-selected-button;
          border-radius: 0px 5px 5px 0px;
          background-color: var(--profile-tab-background);
          color: var(--profile-tab-inactive);
        }
      }
    }

    &-buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 40px;
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
      z-index: 2;
      transition: all 0.3s;
      background-color: var(--loader-background);
      @media(max-width: $very_small) {
        font-size: 10px;
      }
      &-hidden {
        @extend .inventory-top_actions;
        opacity: 0;
        cursor: default;
        & div {
          cursor: default;
        }
      }
      &-shown {
        @extend .inventory-top_actions;
        opacity: 1;
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
    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);

    &-text {
      color: #767676;
      font-size: 12px;
      font-weight: 500;
    }

    &-container {
      @extend .inventory;
      height: max-content;
      overflow: hidden;
      border-color: var(--profile-mobile-container-border);
      border-style: solid;
      border-width: 1px;
      transition: 0.3s;
      background-color: var(--profile-background);
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 15px;  
      padding-bottom: 15px
    }
  }
}</style>
