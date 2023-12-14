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
    </div>
</template>

<script>

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
        &-name {
            font-size: 26px;
            font-weight: 600;
            text-align: left;

        }
        &-description {
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            max-width: 490px;
            padding-top: 15px;
            line-height: 16.98px;
            color: var(--profile-stat-color);
        }
        &-price {
            display: flex;
            flex-direction: column;
            justify-content: left;
            padding-top: 50px;
            &-text {
                font-size: 14px;
                font-weight: 500;
                text-align: left;
            }
            &-number {
                font-size: 32px;
                font-weight: 700;
                text-align: left;
                padding-top: 12px;
            }
        }
        &-info {
            display: flex;
            flex-direction: column;
            padding-left: 37px;
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