<script setup>
import { modalStore } from "@/store/modal"
import { useThemeStore } from "~/store/themeNew";

const modals = modalStore()
const theme = useThemeStore()

</script>

<template>

    <Transition name="fade">
        <div class="modal" v-if="modals.isModalShown('order')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_title">Вывод</div>
                </div>
                <div class="modal-content_close" v-on:click="modals.hideModal('order')">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                                :fill="theme.darkTheme ? 'white':'black'"/>
                    </svg>
                </div>
                <div class="item-UID">
                    <div class="item-UID-title">Введите UID</div>
                    <input class="item-UID-input" placeholder="Не указан">
                    <svg class="item-UID-input-line" width="calc(100%+100px)" height="2" viewBox="0 0 500 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="0.5" x2="500" y2="0.5"/>
                    </svg>

                </div>
                <div class="item-profile">
                    <img class="item-profile-avatar" src="https://www.hpcwire.com/wp-content/uploads/2014/05/Mandelbrot_400x.jpg">
                    <div class="item-profile-name">Dmitryi Ravos</div>
                    <div class="item-profile-title">AR15</div>
                </div>
                <div class="modal-content_body">
                    <order-item :cost="1000" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                    <order-item :cost="100" :title="'Предме т Пред fffffff'" :image="'https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg'"/>
                </div>
                <medium-button class="item-button" color="green" text="Подтвердить"/>
                <div class="modal-footer">Eсли заказов будет много, Ваш вывод может немного задержаться, если Вы считаете что вывод не прошел - <a href="about:blank">пишите в поддержку</a></div>
            </div>
        </div>
    </Transition>
    
</template>

<script>
import OrderItem from "@/components/cards/order-item.vue";
import mediumButton from "@/components/buttons/medium-button.vue";

export default {
    name: "modal-order",
    components: {OrderItem, mediumButton},
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

/* .modal-content_body::-webkit-scrollbar {
  width: 12px;               
}

.modal-content_body::-webkit-scrollbar-track {
  background: orange;       
}

.modal-content_body::-webkit-scrollbar-thumb {
  background-color: blue;    
  border-radius: 20px;   
  border: 3px solid orange;  
}

 */

.item {
    &-button {
        margin-top: 10px;
        align-self: center;
        height: 45px;
        width: 157px;
        border-radius: 10px;
    }

    &-UID {
        display: flex;
        flex-direction: column;
        transform: translate(0%, -20px);
        justify-content: center;
        align-items: center;
        &-title {
            font-size: 16px;
            font-weight: 400;
            text-align: center;
        }
        &-input {
            border-color: var(--profile-input-border);
            background-color: var(--profile-input-background);
            color: var(--profile-input-color);
            margin-top: 8px;
            text-align: center;
            width: 223px;
            height: 43px;
            border-radius: 8px;
            border-style: solid;
            border-width: 1px;
            font-weight: 500;
            font-size: 24px;
            letter-spacing: 3px;
            z-index: 1;
            &-line {
                transform: translate(0%, -21.5px);
                & line {
                    stroke: var(--profile-input-border);
                }
            }
            &:focus{
                outline: none;
            }
        }
    }

    &-profile {
        transform: translate(0%, -7px);
        display: flex;
        flex-direction: column;
        align-items: center;
        &-avatar {
            width: 58px;
            height: 58px;
            object-fit: cover;
            border-radius: 120px;
        }
        &-name {
            margin-top: 7px;
            font-size: 22px;
            font-weight: 600;
        }
        &-title {
            margin-top: 7px;
            font-size: 16px;
            font-weight: 500;
            color: #767676;
        }
    }
}

::-webkit-scrollbar {
    width: 3px;
}

::-webkit-scrollbar-track {
    background: var(--scroll-track-color);
}

::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-color);
    border-radius: 5px;
    min-height: 50px !important;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--scroll-thumb-hovered-color);
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

  &-footer {
    margin-top: 18px;
    font-size: 11px;
    color: #968B88;
    text-align: center;
    & a {
        color: var(--order-support-link-color);
        text-decoration: underline;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    background: var(--modal-background);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 17px;
    box-sizing: border-box;
    padding: 25px;
      overflow: hidden;
      width: 80%;
      max-width: 500px;
    @media(max-width: 400px) {
      width: 95%;
      gap: 20px;
    }

    &_body {
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 15px;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 310px;
      overflow-y: auto;
      box-sizing: border-box;
      padding-right: 5px;
      scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);
      scrollbar-width: 3px;
    }

    &_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_title {
      display: flex;
      font-weight: 700;
      font-size: 24px;
      color: var(--modal-text);
      width: 100%;
      text-align: center;
      justify-content: center;
      @media(max-width: 400px) {
        font-size: 30px;
      }
    }

    &_close {
      display: flex;
      opacity: 0.2;
      transition: opacity 0.3s ease;
      cursor: pointer;
      width: 100%;

      &:hover {
        opacity: 0.5;
      }
      & svg {
        margin-right: 0px;
        margin-left: auto;
        transform: translate(0%, -50%);
      }
    }
  }
}

</style>
