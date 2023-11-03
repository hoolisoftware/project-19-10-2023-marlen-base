<script setup>
import { modalStore } from "@/store/modal";
import { useThemeStore } from "~/store/themeNew";

let modals = modalStore();
let theme = useThemeStore();
</script>

<template>
    <!-- deposit -->
    <Transition name="fade">
        <div class="modal" v-if="modals.isModalShown('deposit')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_title">Пополнение</div>
                    <div class="modal-content_close" v-on:click="modals.hideModal('deposit')">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                                  :fill="theme.darkTheme ? 'white':'black'"/>
                        </svg>
                    </div>
                </div>

                <div class="modal-content_body">
                    <div class="deposit">
                        <div class="deposit-value">
                            <div class="deposit-input">
                                <div class="deposit-input_title">рублей</div>
                                <input type="number" v-model="rubValue" placeholder="Сумма"/>
                            </div>
                            <div class="deposit-equals">=</div>
                            <div class="deposit-input">
                                <div class="deposit-input_title">мор</div>
                                <input type="number" placeholder="Сумма" disabled/>
                            </div>
                        </div>
                        <input class="deposit-promo" placeholder="Промокод"/>
                        <div class="deposit-method">
                            <div class="deposit-method_title">Способ оплаты</div>
                            <div class="deposit-method_list">
                                <div class="deposit-method_item" v-on:click="activeMethod = 1">
                                    <svg v-if="activeMethod === 1" xmlns="http://www.w3.org/2000/svg" width="512"
                                         height="512" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512"
                                         xml:space="preserve"><path d="M256 42.667C138.453 42.667 42.667 138.453 42.667 256S138.453 469.333 256 469.333 469.333 373.547 469.333 256 373.547 42.667 256 42.667zm100.48 185.812L249.814 335.146a21.635 21.635 0 0 1-30.294 0l-64-64a21.42 21.42 0 1 1 30.294-30.292l48.853 49.063 91.519-91.729a21.42 21.42 0 0 1 30.294 30.291z" data-name="check-circle-Filled" fill="#32bb76" data-original="#000000"/></svg>
                                    <nuxt-img format="webp" src="/img/deposit/method_1.png"/>
                                </div>
                                <div class="deposit-method_item" v-on:click="activeMethod = 2">
                                    <svg v-if="activeMethod === 2" xmlns="http://www.w3.org/2000/svg" width="512"
                                         height="512" viewBox="0 0 512 512"
                                         style="enable-background:new 0 0 512 512"
                                         xml:space="preserve"><path d="M256 42.667C138.453 42.667 42.667 138.453 42.667 256S138.453 469.333 256 469.333 469.333 373.547 469.333 256 373.547 42.667 256 42.667zm100.48 185.812L249.814 335.146a21.635 21.635 0 0 1-30.294 0l-64-64a21.42 21.42 0 1 1 30.294-30.292l48.853 49.063 91.519-91.729a21.42 21.42 0 0 1 30.294 30.291z" data-name="check-circle-Filled" fill="#32bb76" data-original="#000000"/></svg>
                                    <nuxt-img format="webp" src="/img/deposit/method_2.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <medium-button color="green" text="К оплате"/>
                </div>
            </div>
        </div>
    </Transition>    
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";

export default {
    name: "modal-deposit",
    data() {
        return {
            rubValue: null,
            activeMethod: null,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.deposit {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  &-method {
    display: flex;
    flex-direction: column;
    gap: 5px;

    &_title {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: var(--modal-text);
      opacity: 0.3;
    }

    &_list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    &_item {
      display: flex;
      position: relative;
      height: 70px;
      width: 49%;
      min-width: 70px;
      justify-content: center;
      align-items: center;
      background: var(--modal-background);
      border: var(--modal-input-border);
      border-radius: 8px;
      box-sizing: border-box;
      padding: 11px;
      cursor: pointer;
      transition: opacity 0.3s ease;

      & svg {
        position: absolute;
        top: -5px;
        right: -5px;
        width: 24px;
        height: 24px;
      }

      &:hover {
        opacity: 0.8;
      }

      &__active {
        background: rgba(255, 255, 255, 0.2);

        &:hover {
          opacity: 0.8;
        }
      }

      & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    }
  }

  &-promo {
    display: flex;
    width: 100%;
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
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      opacity: 0.4;
    }
  }

  &-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    justify-content: space-between;
    gap: 15px;
    @media(max-width: 300px) {
      max-width: 260px;
      width: 100%;
    }
  }

  &-equals {
    display: flex;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    margin-top: 10px;
    text-align: center;
    color: var(--modal-text);
    opacity: 0.2;
  }

  &-input {
    display: flex;
    flex-direction: column;
    align-items: center;

    &_title {
      display: flex;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: var(--modal-text);
      opacity: 0.3;
    }

    & input {
      display: flex;
      background: var(--modal-input);
      border: var(--modal-input-border);
      max-width: 123px;
      width: 100%;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 13px 0;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: var(--modal-text);

      &::placeholder {
        font-size: 14px;
        font-weight: 500;
        opacity: 0.4;
      }

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
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
