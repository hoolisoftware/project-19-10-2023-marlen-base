<script setup lang="ts">
import { useSellItemCreate } from "~/hooks/use-query/profile";

const {mutate: sellItem, data: sellItemData, isSuccess: isSuccessSellItem, isLoading: isLoadingSellItem, error: errorSellItem} = useSellItemCreate()
</script>


<template>
    <div class="item">
      <div class="item-image">
        <img alt="item" :src="image"/>
      </div>
      <div class="item-title">
        {{ title }}
      </div>
      <div class="item-cost">
        {{ cost }} руб
      </div>
      <div class="item-status">
        {{ status }}  
      </div>
      <div class="item-buttons">
        <div class="item-button-left"><div>Вывести</div></div>
        <div class="item-button-right" @click="sellItem({ids: [item_id]})"><div>Продать</div></div>
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
    },
    components: {
      mediumButton
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../../public/colors';
  
  .item {
    display:flex;
    flex-direction: row;
    position: relative;
    min-width: 580px;
    height: 56px;
    align-items: center;
    background: var(--profile-background);
    border: var(--profile-border);
    border-radius: 8px;
    width: 98%;

    &-title {
      margin-right: min(30px, 5%); 
      margin-left: 15px;
      font-size: 14px;
      font-weight: 600;
    }

    &-cost {
      margin-right: 45px; 
      margin-left: auto;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
    }
    
    &-status {
      display: flex;
      border-radius: 5px;
      border-width: 1px;
      border-style: solid;
      margin-right: 35px; 
      margin-left: 0px;
      text-align: center;
      font-size: 10px;
      background-color: #ffffff;
      color: #CBAA8C;
      border-color: #CBAA8C;
      width: fit-content;
      padding-left: 10px;
      padding-right: 10px;
      min-width: 75px;
      height: 16px;
      font-weight: 400;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
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
        }
        &-right {
          @extend .item-button;
          border-radius: 0px 10px 10px 0px;
          background-color: #ffffff;
          color: #CBAA8C;
        }
    }
    &-buttons {
      display: flex;
      margin-left: 0px; 
      margin-right: 10px;
    }
    &-image {
      display: inline-block;
      max-width: 44px;
      padding-left: 10px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
  