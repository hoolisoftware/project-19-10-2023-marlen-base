<template>
    <NuxtErrorBoundary>
        <div class="wrapper" :data-theme="theme">
            <modal/>
            <website-header/>
            <main>
                <livedrop/>
                <slot />
                <about/>
            </main>
            <website-footer/>
        </div>
    </NuxtErrorBoundary>
</template>
<script>
import websiteHeader from "@/components/layout/website-header.vue";
import websiteFooter from "@/components/layout/website-footer.vue";
import card from "@/components/cards/case-card.vue";
import About from "@/components/blocks/about.vue";
import livedrop from "@/components/livedrop/livedrop.vue";
import modal from "@/components/blocks/modal.vue";
import Game from "@/pages/profile.vue";
import { themeStore } from '@/store/theme';

export default {
    components: {Game, About, websiteHeader, websiteFooter, card, livedrop, modal},

    computed: {
        theme() {
            return this.store.isDarkTheme ? 'dark':'light';
        }
    },
    data() {
        return {
            store: themeStore()
        };
    }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Regular.woff") format("woff");
  font-weight: 400;
  font-display: swap
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Medium.woff") format("woff");
  font-weight: 500;
  font-display: swap
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Semibold.woff") format("woff");
  font-weight: 600;
  font-display: swap
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Bold.woff") format("woff");
  font-weight: 700;
  font-display: swap
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Extrabold.woff") format("woff");
  font-weight: 800;
  font-display: swap
}
@font-face {
  font-family: 'Gilroy';
  src: url("/fonts/Gilroy-Black.woff") format("woff");
  font-weight: 900;
  font-display: swap
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

  @media(max-width: 1100px)
  {
    padding: 80px 15px 15px 15px;
  }
}
a {
  text-decoration: none;
}
</style>
