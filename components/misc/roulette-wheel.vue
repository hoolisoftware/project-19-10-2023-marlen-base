<script setup>
const stores = rouletteStore()
console.log(stores.caseId)
const { mutate, data, isSuccess, isLoading, error } = useOpenCase(stores.caseId)


async function startSpin() {
    if ((stores.animationState === null) || (stores.animationState === 'ended')) {
        mutate()
        while (isLoading._object.status === "loading") {
            await new Promise(r => setTimeout(r, 30));
        }
        if (isSuccess._object.status == "success") {
            stores.winItem = data._object.data.data.item
            if (stores.animationState === null) {
                stores.animationState = 'running'
            } else if (stores.animationState === 'ended') {
                stores.animationState = 'again'
            }
        } else if (isSuccess._object.status == "error") {
            const heading = error._object.error.response.data.heading
            const message = error._object.error.response.data.message
            alert(`${heading}\n${message}`)
        }
    }
}
</script>


<template>
    <div class="roulette-parent">
        <div class="roulette-arrow">
            <img src="@/assets/icons/roulette-arrow.svg">
        </div>
        <div class="roulette-overflow">
            <roulette-items class="roulette-items" />
        </div>
        <div v-if="rouletteStores.animationState === 'ended'">
            <div class="roulette-note">🎉 Поздравляем с выигрышем!</div>
            <div class="roulette-winner">
                <span>{{ rouletteStores.winItem.name }}</span>
                <div>
                    <img src="/img/icons/crystall.png" alt="Кристаллов" />
                    <p>{{ rouletteStores.winItem.price }}</p>
                </div>
            </div>
            <div class="roulette-win">
                <p>Все ваши предметы будут сохраняться в профиле. Их можно продавать сайту, получая деньги за предмет на ваш баланс и открывать что-то дороже, или выводить прямо себе в игру по UID, если предмет выбился дороже 60 кристаллов. </p>
                <p>Удачи и крутых впечатлений!</p>
            </div>
            <div class="roulette-buttons">
                <medium-button color="green" text="Продать" @click="rouletteStores.animationState = null; modalStores.hideModal('caseOpen')"/>
                <medium-button text="Ещё раз" @click="startSpin()"/>
            </div>
        </div>
        <div v-else>
            <medium-button 
                :text="rouletteStores.animationState === 'again'? 'Ещё раз' : 'Открыть'" 
                :style="{transition: `opacity 0.6s ease`, opacity: (rouletteStores.animationState === null? 1: 0.6)}"
                @click="startSpin()"
            />
        </div>
    </div>
</template>

<script>
import MediumButton from "@/components/buttons/medium-button.vue";
import {modalStore} from '@/store/modal'; // Импортируем хранилище
import {authStore} from "@/store/auth"
import RouletteItems from "~/components/misc/roulette-items.vue";
import { rouletteStore } from "~/store/roulette";
import { useOpenCase } from '@/hooks/use-query/case'

export default {
    name: "roulette-wheel",
    components: {RouletteItems, MediumButton},
    data() {
        return {
            modalStores: modalStore(),
            authStores: authStore(),
            rouletteStores: rouletteStore(),
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.roulette {
    &-buttons {
        display: flex;
        justify-content: center;
        gap: 10px;
        padding-top: 10px;
    }
    &-arrow {
        display: flex;
        width: 100%;
        justify-content: center;
        & img {
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
        padding-bottom: 10px;
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