<template>
    <div class="roulette-parent">
        <div class="roulette-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64" xml:space="preserve"><path d="M30.926 60.575V31.369L5.232 19.419zm2.244-29.217v29.183l25.436-41.335zm0-26.783v24.292l25.818-12.331zm-2.244 24.314V4.575L4.962 16.816z" fill="#dbc1ab" data-original="#000000"/></svg>
        </div>
        <div class="roulette-overflow">
            <roulette-items class="roulette-items" />
        </div>
        <div v-if="rouletteStores.animationState === 'ended'">
            <div class="roulette-note">🎉 Поздравляем с выигрышем!</div>
            <div class="roulette-winner">
                <span>Шлёпанцы индюка</span>
                <div>
                    <img src="/img/icons/crystall.png" alt="Кристаллов" />
                    <p>33</p>
                </div>
            </div>
            <div class="roulette-win">
                <p>Все ваши предметы будут сохраняться в профиле. Их можно продавать сайту, получая деньги за предмет на ваш баланс и открывать что-то дороже, или выводить прямо себе в игру по UID, если предмет выбился дороже 60 кристаллов. </p>
                <p>Удачи и крутых впечатлений!</p>
            </div>
            <div class="roulette-buttons">
                <medium-button color="green" text="Продать"/>
                <medium-button text="Ещё раз"/>
            </div>
        </div>
        <div v-else>
            <medium-button 
                text="Открыть" 
                :style="{transition: `opacity 0.6s ease`, opacity: (rouletteStores.animationState === null? 1: 0.6)}"
                @click="(rouletteStores.animationState === null)? (rouletteStores.animationState = 'running') : false"
            />
        </div>
    </div>
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";
import {modalStore} from '@/store/modal'; // Импортируем хранилище
import {themeStore} from "~/store/theme";
import {authStore} from "@/store/auth"
import RouletteItems from "~/components/misc/roulette-items.vue";
import { rouletteStore } from "~/store/roulette";

export default {
    name: "roulette-wheel",
    components: {RouletteItems, MediumButton},
    data() {
        return {
            modalStores: modalStore(),
            themeStores: themeStore(),
            authStores: authStore(),
            rouletteStores: rouletteStore(),
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.roulette {
    &-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    &-arrow {
        display: flex;
        width: 100%;
        justify-content: center;
        & svg {
            width: 32px;
            height: 32px;
        }
    }
    &-note {
        display: flex;
        justify-content: center;
        font-weight: 600;
        font-size: 16px;
        color: var(--modal-text);
    }
    &-winner {
        display: flex;
        align-items: center;
        justify-content: center;
        & span {
            font-weight: 600;
            font-size: 16px;
            color: var(--modal-text);
        }
        & div {
            display: flex;
            align-items: center;
            margin-left: 10px;
            & img {
                width: 24px;
                height: 24px;
            }
            & p {
                margin: 0;
                font-weight: 500;
                font-size: 14px;
                color: var(--modal-text);
            }
        }
    }
    &-win {
        display: flex;
        flex-direction: column;
        font-size: 13px;
        background: rgba(51, 189, 73, 0.15);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 10px 15px;
        gap: 10px;
        width: 100%;
        max-width: 550px;
        & p {
            margin: 0;
        }
    }
    &-items {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 550px;
        height: 180px;
        justify-content: center;
        @media(max-width: 620px) {
            max-width: 90vw;
        }
    }
    &-overflow {
      overflow: hidden;
    }
}
</style>