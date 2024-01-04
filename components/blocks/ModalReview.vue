<script setup>
import { ref } from "vue";
import { modalStore } from "@/store/modal";
import { useThemeStore } from "~/store/themeNew";
import { useReviewCreate } from '@/hooks/use-query/review'

let modals = modalStore();
let theme = useThemeStore();
const { mutate, data, isSuccess, isLoading, error } = useReviewCreate()

const formData = ref({
  text: '',
  isPositive: true
})

const handleSubmit = () => {
  mutate(formData.value)
}

</script>

<template>
  <!-- review -->
  <Transition name="fade">
    <div class="modal" v-if="modals.isModalShown('review')">
      <div v-if="isSuccess && data" class="modal-content">
        <div class="modal-content_top">
          <p>Отзыв успешно оставлен!&nbsp;&nbsp;</p>
          <close-button class="modal-content_close" v-on:click="modals.hideModal('review')"/>
        </div>
      </div>
      <div v-else class="modal-content">
        <div class="modal-content_top">
          <div class="modal-content_title">Написать отзыв</div>
          <div></div>
          <close-button class="modal-content_close" v-on:click="modals.hideModal('review')"/>
        </div>

        <form @submit.prevent="handleSubmit" class="modal-content_body">
          <div class="review">
            <textarea required placeholder="Текст отзыва" name="text" v-model="formData.text"></textarea>
          </div>
          {{ error?.response?.data?.heading }}
          <input type="checkbox" name="is_positive" v-model="formData.isPositive" hidden>
          <button type="button" @click="() => formData.isPositive = !formData.isPositive" class="buttons-type">
            <div :class="['button-type', 'button-type-positive', formData.isPositive && 'button-type-active'].join(' ')">
              <nuxt-img height="16" src="img/icons/like.svg" />
            </div>
            <div :class="['button-type', 'button-type-negative', !formData.isPositive && 'button-type-active'].join(' ')">
              <nuxt-img height="16" src="img/icons/like.svg" />
            </div>
          </button>
          <medium-button color="green" :text="isLoading ? 'Отправляется...' : 'Отправить'" type="submit"
            :disabled="isLoading" />
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";
import CloseButton from '@/components/common/CloseButton'

export default {
  name: "modal-review",
  components: {CloseButton},
  data() {
    return {
      reviewText: null,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.buttons-type {
  background: rgba(255, 255, 255, 0.11);
  border-radius: 10px;
  border: none;
  padding: 4px;
  max-width: 208px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 5px;
}

.button-type {
  padding: 7px;
  background: linear-gradient(98deg, #68B159 0%, #68B159 99.99%, #A59F99 100%);
  border-radius: 10px;
  width: 100%;
  opacity: 0;
  pointer-events: none;

  &-active {
    opacity: 1;
    pointer-events: all;
  }

  &-negative {
    background: red;

    & img {
      transform: rotate(180deg) translateY(-10%);
    }
  }
}

.review {
  textarea {
    display: flex;
    width: 100%;
    min-width: 300px;
    min-height: 200px;
    font-family: 'Gilroy', sans-serif;
    background: var(--modal-input);
    border: var(--modal-input-border);
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
    padding: 17px 10px;
    color: var(--modal-text);

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      opacity: 0.4;
    }

    @media(max-width: 500px) {
      min-width: 100px;
      width: 100%;
    }
  }
}

.modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  background: rgba(19, 19, 19, 0.9);
  backdrop-filter: blur(17.5px);
  z-index: 99;

  &-content {
    display: flex;
    flex-direction: column;
    background: var(--modal-background);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 17px;
    box-sizing: border-box;
    padding: 25px;
    gap: 35px;
    overflow: hidden;

    @media(max-width: 400px) {
      max-width: 300px;
      gap: 20px;
    }

    &_body {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_title {
      display: flex;
      font-weight: 700;
      font-size: 34px;
      line-height: 41px;
      color: var(--modal-text);

      @media(max-width: 400px) {
        font-size: 30px;
        line-height: 38px;
      }
    }

    &_close {
      display: flex;
      opacity: 0.2;
      transition: opacity 0.3s ease;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
