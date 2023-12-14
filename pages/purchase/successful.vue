<template>
    <div class="purchase">
        <div class="purchase-title">
            Покупка прошла успешна!
        </div>
        <div class="purchase-body">
            <img class="purchase-body-image" src="https://api.kleewish.hoolisoftware.xyz/media/items/glowing-lines-human-heart-3d-shape-dark-background-generative-ai.jpg">
            <div class="purchase-body-info">
                <div class="purchase-body-name">
                    Название предмета
                </div>
                <div class="purchase-body-description">
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях.
                </div>
                <div class="purchase-body-price">
                    <div class="purchase-body-price-text">
                        Цена
                    </div>
                    <div class="purchase-body-price-number">
                        456 руб
                    </div>
                </div>
            </div>
        </div>
        <medium-button color="orange" text="На главную" class="purchase-body-button"/>
    </div>
</template>

<script>
import mediumButton from "@/components/buttons/medium-button.vue";
export default {
  name: "successful-purchase",
  components: {mediumButton}
}
</script>

<style lang="scss" scoped>
@import '../../public/colors.scss';
.purchase {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    &-title {
        font-size: 46px;
        font-weight: 700;
        text-align: center;
    }
    &-body {
        display: flex;
        flex-direction: row;
        margin-top: 35px;
        justify-content: center;
        @media (max-width: 850px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        &-button {
            width: fit-content;
            height: fit-content;
            margin-top: 35px;
            align-self: center;
            @media (max-width: 850px) {
                margin-top: 10px;
                align-self: center;
            }
        }
        &-name {
            font-size: 26px;
            font-weight: 600;
            text-align: left;
            @media (max-width: 850px) {
                text-align: center;
                font-size: 18px;
                margin-top: 25px
            }
        }
        &-description {
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            max-width: 490px;
            padding-top: 15px;
            line-height: 16.98px;
            color: var(--profile-stat-color);
            @media (max-width: 850px) {
                text-align: center;
                padding-left: 0px;
            }
        }
        &-price {
            display: flex;
            flex-direction: column;
            justify-content: left;
            padding-top: 40px;
            @media (max-width: 850px) {
                justify-content: center;
            }
            &-text {
                font-size: 14px;
                font-weight: 500;
                text-align: left;
                @media (max-width: 850px) {
                    text-align: center;
                }
            }
            &-number {
                font-size: 32px;
                font-weight: 700;
                text-align: left;
                padding-top: 12px;
                @media (max-width: 850px) {
                    text-align: center;
                }
            }
        }
        &-info {
            display: flex;
            flex-direction: column;
            padding-left: 37px;
            @media (max-width: 850px) {
                text-align: center;
                padding-left: 0px;
            }
        }
        &-image {
            width: 261px;
            height: 269px;
            border-radius: 8px;
            border: var(--profile-border);
        }
    }
}
</style>