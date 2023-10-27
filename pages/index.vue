<script setup lang="ts">

import { AxiosError } from 'axios';
import { useCases } from '@/hooks/use-query/case'
import { SERVER_URL } from '~/config';
const { isLoading, data, error } = useCases()

const categories = [
  ['Инадзума', 'inadzuma'],
  ['Монштадт', 'mondstadt'],
  ['Ли ЮЭ', 'liyue'],
  ['Сумеру', 'sumeru']
]

</script>

<template>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else-if="error">
    {{ (error instanceof AxiosError) && error.message }}
  </div>
  <div v-else-if="data?.data.cases">
    <div class="page">
      <div v-for='_category in categories'>
        <title-section :text='_category[0]'
          :info='data.data.cases.filter(item => item.category === _category[1]).length + " кейса"' icon="inadzuma" />
        <div v-for="{ id, name, price, photo_url } in data.data.cases.filter((item: any) => item.category === _category[1])">
          <div class="case-list">
            <nuxt-link :to='`/case/${id}`'>
              <card :title='name' :image='`${SERVER_URL}${photo_url}`' :cost='price' />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1800px;
}

.case-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 34px;
  flex-wrap: wrap;
  margin-bottom: 75px;
}
</style>
<script lang="ts">

import card from "@/components/cards/case-card.vue";
import titleSection from "@/components/blocks/title-section.vue";

export default {
  head: {
    title: 'Kleewish | Кейсы'
  },
  components: { card, titleSection }
}

</script>
