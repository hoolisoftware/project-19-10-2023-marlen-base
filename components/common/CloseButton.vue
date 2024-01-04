<template>
    <div class="close-button">
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.34315 2.34315C0 4.68629 0 8.45753 0 16V18C0 25.5425 0 29.3137 2.34315 31.6569C4.68629 34 8.45753 34 16 34H18C25.5425 34 29.3137 34 31.6569 31.6569C34 29.3137 34 25.5425 34 18V16C34 8.45753 34 4.68629 31.6569 2.34315C29.3137 0 25.5425 0 18 0H16C8.45753 0 4.68629 0 2.34315 2.34315ZM22.3525 10L23.9995 11.647L18.6468 16.9997L23.9997 22.3526L22.3527 23.9996L16.9998 18.6467L11.647 23.9995L10 22.3525L15.3528 16.9997L10.0001 11.647L11.6471 10L16.9998 15.3527L22.3525 10Z"
                    :fill="theme.darkTheme ? 'white':'black'"/>
        </svg>
    </div>
</template>

<script>
import { useThemeStore } from "~/store/themeNew";

export default {
    name: 'close-button',
    data() {
        return {
            theme: useThemeStore()
        }
    }
}
</script>

<style lang="scss" scoped>
.close-button {
    display: flex;
    opacity: 0.2;
    transition: opacity 0.3s ease;
    cursor: pointer;
    margin-right: 0px;
    margin-left: auto;

    &:hover {
    opacity: 0.5;
    }
}
</style>