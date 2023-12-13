<script setup lang="ts">
import { useSellItemCreate } from "~/hooks/use-query/profile";

const {mutate: sellItem, data: sellItemData, isSuccess: isSuccessSellItem, isLoading: isLoadingSellItem, error: errorSellItem} = useSellItemCreate()
function orderItem (data: {ids: Number[]}) {

}
</script>


<template>
  <div :class="`item${selected? '-selected' : ''}`">
    <div class="item-info" @click="on_click()">
      <div class="item-image_and_title" >
        <div class="item-image">
          <img alt="item" :src="image"/>
        </div>
        <div class="item-title">
          {{ title }}
        </div>
      </div>
      <div class="item-cost">
        {{ cost }} руб
      </div>
      <div class="item-status">
        {{ status }}  
      </div>
    </div>
    <div class="item-buttons">
      <div class="item-button-left" @click="selected? on_sell() : sellItem({ids: [item_id]})"><div>Продать</div></div>
      <div class="item-button-right" @click="selected? on_order() : orderItem({ids: [item_id]})"><div>Вывести</div></div>
    </div>
  </div>
</template>
  
<script lang="ts">
import mediumButton from "@/components/buttons/medium-button.vue";

export default {
  name: "new-inventory-item",
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    cost: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    item_id: {
      type: Number,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    on_click: {
      type: Function,
      required: true
    },
    on_sell: {
      type: Function,
      required: true
    },
    on_order: {
      type: Function,
      required: true
    },
  },
  components: {
    mediumButton
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
$very-small: 400px;
$small: 500px;
$medium: 660px;
$medium_small: 850px;
$medium_large: 950px;
$large: 1100px;


$small-icons: "((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)";
$small-buttons: "((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small)";


.item {
  display:flex;
  flex-direction: row;
  position: relative;
  min-width: 580px;
  height: 56px;
  align-items: center;
  background-color: var(--profile-item-background);
  border: var(--profile-border);
  border-radius: 8px;
  width: 98%;
  transition: all 0.3s;
  @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
    min-width: 320px;
  }
  @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
    justify-content: space-between;
    min-width: 100%;
    height: 70px;
  }
  @media ((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small) {
    height: 84px;
  }

  &-info {
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center;
  }

  &-selected {
    @extend .item;
    border: 1px;
    border-color: var(--profile-item-selected-border-gradient-right);
    border-style: solid;
  }

  &-image_and_title {
    display: flex;
    align-items: center;
    text-align: center;
    width: 200px;
    padding-left: 4px;
    height: inherit;
    @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium) {
      flex-direction: column;
      justify-content: space-between; 
      align-items: center;
      width: 80px;
    }
  }

  &-title {
    margin-right: min(30px, 5%); 
    margin-left: 15px;
    font-size: 14px;
    font-weight: 600;
    @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
      margin-right: auto; 
      margin-left: auto;
      margin-top: 0px;
      margin-bottom: auto;
      font-size: 12px;
    }
  }

  &-cost {
    display: flex;
    align-items: center;
    margin-right: 45px; 
    margin-left: auto;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
      margin-right: auto; 
      margin-left: auto;
    }
  }
  
  &-status {
    display: flex;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    margin-right: 26px; 
    margin-left: 0px;
    text-align: center;
    font-size: 10px;
    width: fit-content;
    padding-left: 10px;
    padding-right: 10px;
    width: 75px;
    height: 16px;
    font-weight: 400;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background-color: var(--profile-item-background);
    color: var(--profile-item-status-color);
    border-color: var(--profile-item-status-color);
    @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
      margin-right: auto; 
      margin-left: auto;
    }
    @media (max-width: $very-small) {
      width: 60px;
      font-size: 9px;
    }
  }

  &-button {
      display: flex;
      font-size: 12px;
      border-width: 1px;
      height: 35px;
      width: 69px;
      border-style: solid;
      border-color: #CBAA8C;
      transition: 0.3s;
      &:hover {
        opacity: 0.9;
      }
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      flex-direction: row;
      font-weight: 500;
      white-space: nowrap;
      &-left {
        @extend .item-button;
        border-radius: 10px 0px 0px 10px;
        background-color: #CBAA8C;
        color: #ffffff;
        @media ((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small)  {
          border-radius: 5px;
          height: 25px;
          margin-top: auto;
          margin-bottom: auto;
        }
      }
      &-right {
        @extend .item-button;
        border-radius: 0px 10px 10px 0px;
        background-color: var(--profile-item-background);
        color: var(--profile-item-order-button-color);
        @media ((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small)  {
          border-radius: 5px;
          height: 25px;
          margin-top: 0px;
          margin-bottom: auto;
        }
      }      
  }
  &-buttons {
    display: flex;
    margin-left: 0px; 
    margin-right: 10px;
    @media ((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small)  {
      margin-right: 10px; 
      margin-left: auto;
      flex-direction: column;
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
  &-image {
    display: flex;
    max-width: 44px;
    padding-left: 0px;
    align-items: center;
    & img {
      width: 100%;
      height: 100%;
    }
    @media ((max-width: $large) and (min-width: $medium_small)) or (max-width: $medium)  {
      margin-right: 0px; 
      margin-left: 0px;
      width: 25px;
      margin-top: 8px;
      margin-bottom: 2px;
    }
    @media ((max-width: $medium_large) and (min-width: $medium_small)) or (max-width: $small) {
      margin-top: 12px;
      margin-bottom: 2px;
    }
  }
}
</style>
  