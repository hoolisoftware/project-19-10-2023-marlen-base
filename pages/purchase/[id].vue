<script setup lang="ts">
import { ref } from "vue";
import { useShopItem, useShopBuyItem } from "~/hooks/use-query/shop";
import { useUserSelf } from '~/hooks/use-query/profile';

const { id } = useRoute().params

const { data: itemData, isLoading: itemIsLoading, isError: itemIsError } = useShopItem(String(id))
const { data: userData } = useUserSelf()
const { data, mutate, isSuccess: buyIsSuccess } = useShopBuyItem()

const genshin_uid = ref(null)
</script>


<template>
  <div class="purchase">
    <div v-if="buyIsSuccess">
      {{ this.$router.push(`/purchase/successfull${data.data.payment_id}`) }}
    </div>
    <h1 class="heading1 purchase__title">Покупка</h1>
    <loader v-if="itemIsLoading"/>
    <div v-else-if="itemIsError">
      Error...
    </div>
    <div v-else="itemData?.data">
      <div class="purchase__grid">
        <PurchaseItem :name="itemData?.data ? itemData?.data.item.name : ''"
          :description="itemData?.data ? itemData?.data.item.description : ''"
          :img="itemData?.data ? SERVER_URL + itemData?.data.item.photo_url : ''"
          :price="itemData?.data ? itemData?.data.item.price : -1" />
        <PurchaseAdvantages />
        <PurchasePayment />
        <PurchaseUser @change-genshin-uid="(data) => genshin_uid = data "/>
      </div>
      <div class="purchase__button-box">
        <Button color="green" @click="() => mutate({id, genshin_uid: genshin_uid||userData.data.user.genshin_uid})" text="Подтвердить покупку" class="purchase__button" />
      </div>
    </div>
  </div>
</template>
  

<script lang="ts">
import PurchaseItem from "@/components/purchase/PurchaseItem.vue";
import PurchaseAdvantages from "@/components/purchase/PurchaseAdvantages.vue";
import PurchasePayment from "@/components/purchase/PurchasePayment.vue";
import PurchaseUser from "@/components/purchase/PurchaseUser.vue";
import Button from "@/components/common/Button.vue";
import { SERVER_URL } from "~/config";
import Loader from "~/components/loaders/Loader.vue";

export default {
  components: { Button, PurchaseUser, PurchasePayment, PurchaseAdvantages, PurchaseItem }
}

</script>

<style lang="scss" scoped>
.purchase {
  max-width: 1270px;
  margin: 0 auto;
  padding-top: 25px;
  padding-bottom: 70px;

  @media (min-width: 1024px) {
    padding-top: 66px;
    padding-bottom: 0;
  }

  &__title {
    margin-bottom: 36px;

    @media (min-width: 1024px) {
      margin-bottom: 44px;
    }
  }

  &__grid {
    display: grid;
    grid-row-gap: 36px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
      grid-template: auto / 2.1fr 1fr;
      grid-gap: 50px 20px;
      margin-bottom: 38px;
    }
  }

  &__button-box {
    text-align: center;
  }

  &__button {
    width: 100%;
    max-width: 258px;
    height: 54px;
  }
}
</style>
