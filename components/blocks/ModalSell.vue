<script setup>
import { modalStore } from "@/store/modal"
import { useThemeStore } from "~/store/themeNew";
import { useAuthStore } from "~/store/authNew";

const modals = modalStore()
const theme = useThemeStore()
const auth = useAuthStore()

</script>

<template>

    <Transition name="fade">
        <div class="modal" v-if="modals.isModalShown('sell')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_close" v-on:click="modals.hideModal('sell')">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                                    :fill="theme.darkTheme ? 'white':'black'"/>
                        </svg>
                    </div>
                </div>
                <div class="modal-content_body">
                    <svg class="modal-content_body-warning" width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="42" cy="42" r="42" fill="#DBC1AB"/>
                        <path style="transform: translate(37px, 20px);" d="M7.72375 30.92H2.28375L0.87575 13V0.199997H9.19575V13L7.72375 30.92ZM5.03575 36.168C6.35842 36.168 7.48908 36.6373 8.42775 37.576C9.36642 38.5147 9.83575 39.6453 9.83575 40.968C9.83575 42.2907 9.36642 43.4213 8.42775 44.36C7.48908 45.2987 6.35842 45.768 5.03575 45.768C3.71308 45.768 2.58242 45.2987 1.64375 44.36C0.705084 43.4213 0.23575 42.2907 0.23575 40.968C0.23575 39.6453 0.68375 38.5147 1.57975 37.576C2.51842 36.6373 3.67042 36.168 5.03575 36.168Z" fill="white"/>
                    </svg>
                    <div class="modal-content_title">Вы уверены что хотите продать предметы?</div>
                    <div class="modal-content_body-buttons">
                        <div class="modal-content_body-button-left" @click="on_sell()"><div>Да</div></div>
                        <div class="modal-content_body-button-right" @click="modals.hideModal('sell')"><div>Нет</div></div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
    
</template>

<script>
export default {
    name: "modal-sell",
    methods: {
        on_sell() {
            console.log("sell items")
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
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
    width: 400px;
    height: 300px;
    @media(max-width: 400px) {
      max-width: 100%;
      gap: 20px;
    }

    &_body {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        &-warning {
            transform: translate(0px, -60px);
            & circle {
                fill: var(--sell-modal-warning-color);
            }
            & path {
                fill: var(--sell-modal-exclamation-mark-color);
            }
        }
        &-button {
            display: flex;
            font-size: 12px;
            border-width: 1px;
            height: 45px;
            width: 92px;
            border-style: solid;
            border-color: var(--sell-modal-warning-color);
            transition: 0.3s;
            &:hover {
                opacity: 0.8;
            }
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
            flex-direction: row;
            font-weight: 500;
            white-space: nowrap;
            &-left {
                @extend .modal-content_body-button;
                border-radius: 10px 0px 0px 10px;
                background-color: var(--sell-modal-warning-color);
                color: var(--sell-modal-exclamation-mark-color);
            }
            &-right {
                @extend .modal-content_body-button;
                border-radius: 0px 10px 10px 0px;
                background-color: var(--profile-item-background);
                color: var(--profile-item-order-button-color);
            }    
        }
        &-buttons {
            display: flex;
            margin-left: 0px; 
            margin-right: 10px;
            transform: translate(0px, -27px);
        }  
    }

    &_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_title {
      display: flex;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
      line-height: 25px;
      transform: translate(0px, -40px);

      color: var(--modal-text);
    }

    &_close {
      display: flex;
      opacity: 0.2;
      transition: opacity 0.3s ease;
      cursor: pointer;
      margin-right: 0px;
      margin-left: auto;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}

</style>
