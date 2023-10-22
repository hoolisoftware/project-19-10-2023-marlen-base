<template>
    <button
        class="theme-switcher"
        :class="switcherClass"
        @click="toggleColorMode"
        aria-label="Тема"
    >
      <nuxt-icon name="moon" class="theme-switcher__icon theme-switcher__icon--moon"/>
      <nuxt-icon name="sun" class="theme-switcher__icon theme-switcher__icon--sun"/>
    </button>
</template>

<style lang="scss" scoped>
.theme-switcher {
  position: relative;
  width: 80px;
  height: 32px;
  padding: 0;
  border-width: 0;
  background-color: var(--color-theme-switcher-bg);
  border-radius: 50px;

  &::before {
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    width: 50%;
    border-radius: 50px;
    background: var(--color-theme-switcher-runner);
    content: "";
    pointer-events: none;
    transition: transform .3s;
  }

  &--light {
    &::before {
      transform: translateX(100%) translateX(-4px);
    }
  }

  &__icon {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    pointer-events: none;

    &--moon {
      left: 14px;
      color: var(--color-theme-switcher-moon);
    }

    &--sun {
      right: 14px;
      color: var(--color-theme-switcher-sun);
    }
  }
}
</style>

<script>
import { computed } from 'vue'

export default {
  setup() {
    const colorMode = useColorMode()
    const switcherClass = computed(() => {
      return (colorMode.preference === 'dark' ? 'theme-switcher--dark' : 'theme-switcher--light')
    })
    const toggleColorMode = () => {
      colorMode.preference === 'dark' ? colorMode.preference = 'light' : colorMode.preference = 'dark'
    }
    return {
      switcherClass,
      toggleColorMode
    }
  }
}
</script>