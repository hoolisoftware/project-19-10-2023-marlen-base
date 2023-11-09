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
        <div class="modal" v-if="modals.isModalShown('signIn')">
            <div class="modal-content">
                <div class="modal-content_top">
                    <div class="modal-content_title">Авторизация</div>
                    <div class="modal-content_close" v-on:click="modals.hideModal('signIn')">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                                  :fill="theme.darkTheme ? 'white':'black'"/>
                        </svg>
                    </div>
                  </div>
                  <div class="modal-content_body">
                    <button-vk/>
                    <button-telegram id="telegram-login-button"/>
                  </div>
                  <div class="modal-content_title">Через токен (Тест)</div>
                  <input type="text" placeholder="Введите токен" v-model="kwt">
                  <button @click="() => {auth.setKwt(kwt); modals.hideModal('signIn')}">Сохранить токен</button>
            </div>
        </div>
    </Transition>
    
</template>

<script>
import ButtonVk from "@/components/buttons/button-vk.vue";
import ButtonTelegram from "@/components/buttons/button-telegram.vue";

export default {
    name: "modal-sign-in",
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
