<script setup lang="ts">
import { useShopItems } from "~/hooks/use-query/shop";

const {data: itemsData, isLoading: itemsIsLoading, isError: itemsIsError} = useShopItems()
</script>


<template>
  <div class="page">
    <title-section text="Магазин"/>
    <loader v-if="itemsIsLoading"/>
    <div v-else-if="itemsIsError">
        Error...
    </div>
    <div v-else="itemsData?.data">
        <div class="shop">
          <div v-for="item in itemsData?.data.items">
            <shop-card :title="item.name" :image="SERVER_URL + item.photo_url" :cost="item.price" :id="item.id"/>
          </div> 
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import shopCard from "@/components/cards/shop-card.vue";
import titleSection from "@/components/blocks/title-section.vue";
import Loader from "@/components/loaders/Loader.vue";
import { SERVER_URL } from "~/config";

export default {
  name: "shop",
  head: {
    title: 'Kleewish | Магазин'
  },
  components: {
    shopCard,
    titleSection
  }
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 34px;
  flex-wrap: wrap;
}
</style>
