<template>
  <div class="purchase-item">
    <div class="purchase-item__img-box">
      <img
          :src="img"
          format="avif,webp"
          densities="x1 x2"
          class="purchase-item__img"
          width="261"
          height="261"
      />
    </div>
    <div class="purchase-item__content">
      <h2 class="purchase-item__name">{{ name }}</h2>
      <p class="purchase-item__text"> {{ description }} </p>
      <div class="purchase-item__price-box">
        <p class="purchase-item__price-text">Цена</p>
        <p class="purchase-item__price">{{ price }} руб</p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
  }
}
</script>


<style lang="scss" scoped>
.purchase-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-gap: 25px 37px;
    grid-template: auto / 1fr 2.1fr;
    text-align: left;
    align-items: unset;
  }

  &__img-box {
    width: 261px;
    margin-bottom: 28px;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  &__img {
    max-width: 100%;
    border: 1px solid var(--color-page-purchase-border);
    border-radius: 8px;
  }

  &__name {
    margin-bottom: 26px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -.035em;

    @media (min-width: 1024px) {
      margin-bottom: 16px;
      font-size: 28px;
    }
  }

  &__text {
    max-width: 330px;
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    color: #767676;

    @media (min-width: 1024px) {
      max-width: 490px;
    }
  }

  &__price-text {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;

    @media (min-width: 1024px) {
      margin-bottom: 15px;
    }
  }

  &__price {
    font-size: 32px;
    font-weight: 700;
  }
}
</style>
