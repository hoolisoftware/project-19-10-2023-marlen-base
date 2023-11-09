<template>
    <div class="vk" @click="vkAuth">
      <div>Войти с помощью</div>
      <div>
        <img src="@/assets/icons/vk.svg" />
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { origin } from '~/config';
import { vkBotId } from '~/config';

const VK_APP_ID = vkBotId;
const REDIRECT_URI = origin;
const VK_AUTH_URL = `https://oauth.vk.com/authorize?client_id=${VK_APP_ID}&display=page&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=friends&response_type=token&v=5.130`;

export default {
  methods: {
    vkAuth: () => {
      const authWindow = window.open(VK_AUTH_URL, 'VK_auth', 'width=700,height=350');
    }
  }
}
</script>


<style lang="scss" scoped>
.vk {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 62px;
  width: 332px;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 2px solid #2787F5;
  border-radius: 8px;
  gap: 10px;
  transition: 0.3s;
  cursor: pointer;
  @media(max-width: 400px) {
    max-width: 100%;
  }
  &:hover {
    background: #2787F5;
    & div:nth-child(1) {
      color: #ffffff;
    }
  }
  & div:nth-child(1) {
    display: flex;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    transition: 0.3s;
  }
  & div:nth-child(2) {
    display: flex;
    width: 32px;
    height: 32px;
  }
}
</style>
