<script setup>
import { ref } from "vue";
import { modalStore } from "@/store/modal";
import { useThemeStore } from "~/store/themeNew";
import { useReviewCreate } from '@/hooks/use-query/review'

let modals = modalStore();
let theme = useThemeStore();
const { mutate, data, isSuccess, isLoading, isError, error } = useReviewCreate()

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
      <div v-if="isSuccess && data" class="modal-content-success">
        <div class="modal-content_top">
          <div class="modal-content_close" v-on:click="modals.hideModal('review')">
            <img src="@/assets/icons/x.svg"/>
          </div>
        </div>
        <div class="modal-content_body-success">
          <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style="transform: translate(0px, 30px)" d="M49.25 33.75C49.25 35.1203 48.7057 36.4344 47.7367 37.4034C46.7678 38.3723 45.4536 38.9167 44.0833 38.9167H13.0833L2.75 49.25V7.91667C2.75 6.54638 3.29434 5.23222 4.26328 4.26328C5.23222 3.29434 6.54638 2.75 7.91667 2.75H44.0833C45.4536 2.75 46.7678 3.29434 47.7367 4.26328C48.7057 5.23222 49.25 6.54638 49.25 7.91667V33.75Z" :stroke="theme.darkTheme? 'white' : '#C9A788'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path style="transform: translate(31px, 29px);" d="M1.99951 2.5C1.99951 17 9.99951 26.5 19.4998 30.5" :stroke="theme.darkTheme? 'black' : 'white'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path style="transform: translate(35px, 7px);" d="M26.4583 50.7917C39.8973 50.7917 50.7917 39.8973 50.7917 26.4583C50.7917 13.0194 39.8973 2.125 26.4583 2.125C13.0194 2.125 2.125 13.0194 2.125 26.4583C2.125 39.8973 13.0194 50.7917 26.4583 50.7917Z" :stroke="theme.darkTheme? 'white' : '#C9A788'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path style="transform: translate(76px, 48px);" d="M28 26.5L2.64355 2.6438" :stroke="theme.darkTheme? 'white' : '#C9A788'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="modal-content_title-success">Спасибо!</div>
          <div class="modal-content_body-success-text">Прежде чем опубликовать, Ваш отзыв будет проверен модератором</div>
          <medium-button @click="navigateTo('/'); modals.hideModal('review')" class="modal-content_body-success-button" text="На главную" color="orange"/>
        </div>
      </div>
      <div class="modal-content-error" v-else-if="isError && error?.response?.data?.heading">
          <div class="modal-content_top">
            <div class="modal-content_close" v-on:click="modals.hideModal('review')">
              <img src="@/assets/icons/x.svg"/>
            </div>
          </div>
          <div class="modal-content_body-error">
              <svg class="modal-content_body-warning" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="42" cy="42" r="42" fill="#DBC1AB"/>
                  <path style="transform: translate(37px, 20px);" d="M7.72375 30.92H2.28375L0.87575 13V0.199997H9.19575V13L7.72375 30.92ZM5.03575 36.168C6.35842 36.168 7.48908 36.6373 8.42775 37.576C9.36642 38.5147 9.83575 39.6453 9.83575 40.968C9.83575 42.2907 9.36642 43.4213 8.42775 44.36C7.48908 45.2987 6.35842 45.768 5.03575 45.768C3.71308 45.768 2.58242 45.2987 1.64375 44.36C0.705084 43.4213 0.23575 42.2907 0.23575 40.968C0.23575 39.6453 0.68375 38.5147 1.57975 37.576C2.51842 36.6373 3.67042 36.168 5.03575 36.168Z" fill="white"/>
              </svg>
              <div class="modal-content_title-error">{{ error?.response?.data?.heading }}</div>
              <medium-button @click="navigateTo('/'); modals.hideModal('review')" class="modal-content_body-error-button" text="На главную" color="orange"/>
          </div>
      </div>
      <div v-else class="modal-content">
        <div class="modal-content_top">
          <div class="modal-content_close" v-on:click="modals.hideModal('review')">
            <img src="@/assets/icons/x.svg"/>
          </div>
          <div class="modal-content_title">Оставить отзыв</div>
        </div>
        <form @submit.prevent="onSubmit" class="modal-content_body">
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
            <!--<img src="@/assets/images/capcha.png" class="modal-content_capcha"/>-->
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
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.log(e);
    }
  },

  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        //handleSubmit()
        console.log('ReCaptcha token:', token)
      } catch (error) {
        console.log('Review error:', error)
      }
    },
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
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

    &-error {
      display: flex;
      flex-direction: column;
      background: var(--modal-background);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 17px;
      box-sizing: border-box;
      padding: 25px;
      gap: 35px;
      overflow: hidden;
      width: 400px;
      height: 300px;
    }

    &-success {
      @extend .modal-content;
      height: 585px;
      gap: 0px;
      justify-content: center;
    }

    &_body {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0px;
      padding-bottom: 30px;
      &-warning {
          transform: translate(0px, -60px);
          & circle {
              fill: var(--sell-modal-warning-color);
          }
          & path {
              fill: var(--sell-modal-exclamation-mark-color);
          }
      }
      &-error {
        @extend .modal-content_body;
        justify-content: center;
        align-items: center;
        &-button {
          width: 155px;
          height: 49px;
          border-radius: 14px;
          margin-top: 26px;
          transform: translate(0px, -34px);
          margin-bottom: 0px;
          margin-top: auto;
          &:hover {
            transform: translate(0px, -34px);
          }
        }
      }
      
      &-success {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-bottom: 33px;
        &-button {
          width: 155px;
          height: 49px;
          border-radius: 14px;
          margin-top: 26px;
        }
        &-text {
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
          letter-spacing: 0em;
          text-align: center;
          margin-top: 6px;
          color: var(--profile-stat-color);
        }
      }
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

      &-error {
        display: flex;
        font-size: 22px;
        font-weight: 600;
        text-align: center;
        line-height: 25px;
        transform: translate(0px, -47px);
        margin-top: auto;
        margin-bottom: auto;
        color: var(--modal-text);
      }

      &-success {
        @extend .modal-content_title;
        text-align: center;
        width: 100%;
      }

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
