<template>
  <swiper
      slides-per-view="auto"
      :space-between=10
      :grab-cursor=true
  >
    <swiper-slide v-for="slide in slideList">
      <SliderSlide
          :names="slide.names"
          :title="slide.text"
          :img="slide.image"
      />
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  position: relative;
  overflow: visible;

  &::before,
  &::after {
    position: absolute;
    z-index: 2;
    top: 0;
    width: 120px;
    height: 100%;
    pointer-events: none;
  }

  &::before {
    left: -60px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--color-bg));
  }

  &::after {
    right: -60px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), var(--color-bg));
  }

  @media (min-width: 1024px) {
    &::before,
    &::after {
      content: "";
    }
  }
}

.swiper-slide {
  width: 236px !important;
}
</style>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import SliderSlide from "./SliderSlide.vue";

export default {
  components: {
    SliderSlide,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slideList = [
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize1.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize2.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize3.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize4.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize5.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize6.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize7.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize10.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize9.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize10.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize1.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize2.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize3.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize4.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize5.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize6.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize7.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize10.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize9.png',
      },
      {
        names: 'Гена и Ваня',
        text: 'Фрагмент нефрита Шивада',
        image: 'prize10.png',
      },
    ]

    return {
      slideList
    }
  }
};
</script>