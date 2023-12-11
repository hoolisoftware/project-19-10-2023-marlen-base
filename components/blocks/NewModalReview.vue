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
          <div class="modal-content_close" v-on:click="modals.hideModal('review')">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                :fill="theme.darkTheme ? 'white' : 'black'" />
            </svg>
          </div>
        </div>
      </div>
      <div v-else class="modal-content">
        <div class="modal-content_top">
          <div class="modal-content_close" v-on:click="modals.hideModal('review')">
            <!-- <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                :fill="theme.darkTheme ? 'white' : 'black'" />
            </svg> -->
            <img src="@/assets/icons/x.svg"/>
          </div>
          <div class="modal-content_title">Оставить отзыв</div>
        </div>
        <form @submit.prevent="handleSubmit" class="modal-content_body">
            <div class="review-opinion">
                <div class="review-opinion-choose">
                    <div class="review-opinion-positive" @click="() => formData.isPositive = true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="smile">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" :stroke="formData.isPositive? '#18C529': '#606060'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" :stroke="formData.isPositive? '#18C529': '#606060'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 9H9.01" :stroke="formData.isPositive? '#18C529': '#606060'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 9H15.01" :stroke="formData.isPositive? '#18C529': '#606060'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div class="review-opinion-negative"  @click="() => formData.isPositive = false">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="frown">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" :stroke="formData.isPositive? '#606060': '#D34A4A'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16 16C16 16 14.5 14 12 14C9.5 14 8 16 8 16" :stroke="formData.isPositive? '#606060': '#D34A4A'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 9H9.01" :stroke="formData.isPositive? '#606060': '#D34A4A'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 9H15.01" :stroke="formData.isPositive? '#606060': '#D34A4A'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" :style="`transform: translateX(${formData.isPositive? '-': ''}50%);`" class="review-opinion-line">
                    <line x1="0" y1="0" x2="200" y2="0" :stroke="formData.isPositive? '#18C529': '#D34A4A'" stroke-width="4"/>
                </svg>
                <svg width="600" height="1" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="600" y2="0" :stroke="'#EDE6E0'" />
                </svg>
            </div>
          <div class="review">
            <textarea required placeholder="Текст отзыва" name="text" v-model="formData.text"></textarea>
          </div>
          {{ error?.response?.data?.heading }}
          <!--<input type="checkbox" name="is_positive" v-model="formData.isPositive" hidden>-->
          <div class="modal-content_bottom">
            <img src="@/assets/images/capcha.png" class="modal-content_capcha"/>
            <medium-button class="modal-content_button" color="#DBC1AB" :text="isLoading ? 'Отправляется...' : 'Отправить'" type="submit" style="padding: 0px"
                :disabled="isLoading" />
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";

export default {
  name: "new-modal-review",
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
  display: inline-block;
  gap: 5px;
  text-align: center;
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
    height: 243px;
    min-width: 300px;
    min-height: 200px;
    font-family: 'Gilroy', sans-serif;
    background: var(--modal-input);
    border: var(--modal-input-border);
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    box-sizing: border-box;
    padding: 17px 25px;
    color: var(--modal-text);
    &:focus{
      outline: none;
    }

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
  &-opinion {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-negative {
        display: flex; 
        justify-content: center;
        width: 37%;
        height: 41px;
        & path {
            transition: stroke 0.2s ease;
        }
    }
    &-positive {
        display: flex; 
        justify-content: center;
        width: 37%;
        height: 41px;
        & path {
            transition: stroke 0.2s ease;
        }
    }
    &-choose {
        display: flex; 
        align-items: center; 
        justify-content: center;
        width: 100%;
    }
    &-line {
        transition: all 0.2s ease;
        width: 37%;
        height: 2px;

        & line {
            transition: stroke 0.2s ease;
        }
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: var(--modal-background);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 17px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 35px;
    width: 588px;
    height: fit-content;

    @media(max-width: 600px) {
      max-width: 98%;
      gap: 20px;
      padding-left: 5px;
      padding-right: 5px;
      padding-top: 5px;
      padding-bottom: 5px;
    }

    &_body {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0px;
      padding-bottom: 30px;
    }

    &_top {
      display: inline-block;
      align-items: center;
      justify-content: space-between;
      text-align: center;
    }

    &_title {
      display: inline-block;
      font-weight: 700;
      font-size: 36px;
      line-height: 41px;
      color: var(--modal-text);

      @media(max-width: 400px) {
        font-size: 30px;
        line-height: 38px;
      }
    }

    &_button {
      display: inline-block;
      margin-right: 0px;
      margin-left: auto;
      width: 155px;
      height: 50px;
      margin-top: auto;
      margin-bottom: auto;
    }

    &_close {
      display: flex;
      opacity: 1;
      transition: opacity 0.3s ease;
      cursor: pointer;
      margin-right: 0px;
      margin-left: auto;
      width: fit-content;

      &:hover {
        opacity: 0.7;
      }
    }

    &_capcha {
        width: 262;
        margin-right: auto;
        margin-left: 0px;
        margin-top: auto;
        margin-bottom: auto;
    }

    &_bottom {
        display: flex;
        width: 100%;
        align-content: center;
        justify-content: center;
    }
  }
}
</style>
