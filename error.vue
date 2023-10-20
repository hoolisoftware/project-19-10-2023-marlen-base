<template>
    <NuxtLayout>
        <div class="error">
            <nuxt-img format="webp" src="/img/error.png" width="280" height="280"/>
            <h1 v-if="error.statusCode">Ошибка {{ error.statusCode }}</h1>
            <p>Вы попали на несуществующую страницу</p>
            <p>Кли грустит</p>
            <nuxt-link to="/">
                <div>
                    <medium-button text="Вернуться на главную"/>
                </div>
            </nuxt-link>
        </div>
    </NuxtLayout>
</template>
<script>
import MediumButton from "@/components/buttons/medium-button.vue";

export default {
    components: {MediumButton},
    head: {
        title: 'Kleewish | Ошибка'
    },
    props: ['error']
}
</script>

<style lang="scss">

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Regular.woff") format("woff");;
  font-weight: 400;
}

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Medium.woff") format("woff");;
  font-weight: 500;
}

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Semibold.woff") format("woff");;
  font-weight: 600;
}

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Bold.woff") format("woff");;
  font-weight: 700;
}

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Extrabold.woff") format("woff");;
  font-weight: 800;
}

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Black.woff") format("woff");;
  font-weight: 900;
}

body {
  font-family: 'Gilroy', sans-serif;
  margin: 0;
  background: #FFFFFF;
  color: #000000;
  transition: 0.3s;
}

body[data-theme="dark"] {
  font-family: 'Gilroy', sans-serif;
  margin: 0;
  background: #131212;
  color: #DBDBDB;
  transition: 0.3s;
}

.wrapper {
  background: #FFFFFF;
  color: #000000;
  transition: 0.3s;
}

.wrapper[data-theme="dark"] {
  background: #131212;
  color: #DBDBDB;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 80px 40px 40px 40px;
}

.error {
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin: 10px;
  }

  & p {
    margin: 5px 0;
    font-size: 14px;
    color: #9E9E9E;
  }

  & div {
    margin-top: 15px;
  }
}

</style>
