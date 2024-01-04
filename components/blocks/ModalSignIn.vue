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
                    <close-button class="modal-content_close" v-on:click="modals.hideModal('signIn')"/>
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
import CloseButton from '@/components/common/CloseButton'

export default {
    name: "modal-sign-in",
    components: {CloseButton}
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
    }
  }
}

</style>
