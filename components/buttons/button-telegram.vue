<script setup>

const url = new URL("https://oauth.telegram.org/auth")
url.searchParams.set('bot_id', '6505934697')
url.searchParams.set('origin', 'https://core.telegram.org')
url.searchParams.set('embed', '1')
url.searchParams.set('request_access', 'write')
url.searchParams.set('return_to', 'http://leks.hooli.xyz/telegram-login')

</script>

<template>
  <a class="tg" :href="url.href">
    <div>Войти с помощью</div>
    <div>
      <img src="@/assets/icons/telegram.svg" />
    </div>
  </a>
</template>


<script>
export default {}
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
}</style>
