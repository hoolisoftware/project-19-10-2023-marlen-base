<template>
    <div class="vk" @click="vkAuth">
      <div>Войти с помощью</div>
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_214_8103)">
            <path d="M0 15.3333C0 8.10512 0 4.491 2.2455 2.2455C4.491 0 8.10512 0 15.3333 0H16.6666C23.8948 0 27.5089 0 29.7544 2.2455C32 4.491 32 8.10512 32 15.3333V16.6666C32 23.8948 32 27.5089 29.7544 29.7544C27.509 32 23.8949 32 16.6667 32H15.3334C8.10519 32 4.49106 32 2.24556 29.7545C0 27.509 0 23.8949 0 16.6667V15.3333Z" fill="#2787F5"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.66727 10H6.33339C5.66658 10 5.5332 10.3139 5.5332 10.6599C5.5332 11.2779 6.32445 14.3432 9.21733 18.3972C11.146 21.1659 13.8631 22.6666 16.3357 22.6666C17.8193 22.6666 18.0028 22.3333 18.0028 21.7591V19.6666C18.0028 18.9999 18.1433 18.8669 18.613 18.8669C18.9592 18.8669 19.5526 19.0399 20.9373 20.3748C22.5197 21.9569 22.7806 22.6666 23.6706 22.6666H26.0045C26.6714 22.6666 27.0048 22.3333 26.8125 21.6755C26.602 21.0199 25.8465 20.0686 24.8439 18.9411C24.2999 18.2984 23.484 17.6062 23.2367 17.2601C22.8906 16.8152 22.9895 16.6174 23.2367 16.2219C23.2367 16.2219 26.0802 12.2172 26.3769 10.8577C26.5252 10.3633 26.3769 10 25.6711 10H23.3372C22.7438 10 22.4702 10.3139 22.3218 10.6599C22.3218 10.6599 21.135 13.5521 19.4537 15.4309C18.9097 15.9747 18.6625 16.1478 18.3657 16.1478C18.2174 16.1478 18.0026 15.9747 18.0026 15.4804V10.8577C18.0026 10.2644 17.8305 10 17.3358 10H13.6683C13.2975 10 13.0745 10.2753 13.0745 10.5363C13.0745 11.0987 13.9151 11.2284 14.0018 12.8105V16.2466C14.0018 16.9999 13.8656 17.1366 13.569 17.1366C12.7778 17.1366 10.8531 14.2314 9.7117 10.9071C9.48814 10.261 9.26377 10 8.66727 10Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_214_8103">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
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
