

<template>
  <div class="tg" @click="tgPopup">
    <div>Войти с помощью</div>
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24335 15.8309C11.9077 13.7988 15.018 12.459 16.5742 11.8118C21.0175 9.96363 21.9409 9.64257 22.5426 9.63195C22.675 9.62963 22.9709 9.66245 23.1626 9.81801C23.447 10.0488 23.4486 10.5496 23.417 10.8811C23.1762 13.4111 22.1344 19.5507 21.6043 22.3843C21.38 23.5833 20.9384 23.9854 20.5109 24.0247C19.5817 24.1102 18.8762 23.4106 17.9762 22.8208C16.568 21.8976 15.7725 21.323 14.4055 20.4223C12.8259 19.3813 13.8499 18.8091 14.7502 17.8741C14.9858 17.6294 19.0796 13.9057 19.1589 13.5679C19.1688 13.5256 19.178 13.3681 19.0844 13.285C18.9909 13.2019 18.8528 13.2303 18.7532 13.2529C18.6119 13.2849 16.3623 14.7719 12.0043 17.7136C11.3657 18.1521 10.7874 18.3658 10.2692 18.3546C9.69785 18.3423 8.59898 18.0316 7.78204 17.766C6.78004 17.4403 5.98367 17.2681 6.05304 16.7149C6.08917 16.4268 6.48592 16.1321 7.24335 15.8309Z" fill="white"/>
        </svg>
      </div>
    </div>
</template>


<script>
import {telegramLoginTemp} from 'vue3-telegram-login';
import { authStore } from '@/store/auth'
import { useRoute } from 'vue-router';
import api from '~/apiCaller';
import { themeStore } from '~/store/theme';
import {tgBotId, origin} from '@/config.js'
  
export default {
  components: {

  },
  methods: {
    async tgPopup() {
      const popup = window.open(
        `https://oauth.telegram.org/auth?bot_id=${tgBotId}&origin=${origin}/&request_access=write`,
        "_blank", "width=500,height=500"
        )
    },

    async handleTelegramResponse(event) {
      // Проверяем что это от телеги
      const data = JSON.parse(event.data)
      console.log(window.location.origin)
      if (data.origin.slice(0,-1) !== window.location.origin || data.event !== "auth_result") return // слайсом убрали лишний / в конце

      console.log(data)
      let authStores = authStore();

      const req = await api.post('user/auth/telegram_login/', {'user': data.result})
      console.log(req)
      authStores.setToken(req.data.data.token)
      authStores.setUser(req.data.data.user)
      this.$router.go(0);
    },
  },
  mounted() {
    window.addEventListener('message', this.handleTelegramResponse, false);
  },
  beforeUnmount() {
    window.removeEventListener('message', this.handleTelegramResponse, false);
  },
};
</script>
    

<style lang="scss" scoped>
.tg {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 332px;
  background: #26A5E4;
  border-radius: 8px;
  box-sizing: border-box;
  gap: 10px;
  transition: 0.3s;
  cursor: pointer;

  @media(max-width: 400px) {
    max-width: 100%;
  }
  &:hover {
    opacity: 0.9;
  }
  & div:nth-child(1) {
    display: flex;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  & div:nth-child(2) {
    display: flex;
    width: 32px;
    height: 32px;
  }
}
</style>
