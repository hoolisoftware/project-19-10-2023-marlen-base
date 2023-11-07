

<template>
  <div class="tg" @click="tgPopup">
    <div>Войти с помощью</div>
      <div>
        <img src="@/assets/icons/telegram.svg" />
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
