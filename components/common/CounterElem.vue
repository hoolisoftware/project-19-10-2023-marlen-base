<template>
  <div class="counter-elem">
    <svg class="counter-elem__circle">
      <circle
          cx="32"
          cy="32"
          r="31"
          stroke-width="1.5"
          :stroke-dasharray="strokeArray"
          fill="none"
      />
    </svg>
    <p class="counter-elem__value">{{ value }}</p>
    <p class="counter-elem__text">{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.counter-elem {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  color: var(--color-counter-text);

  &__circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    transform: rotate(90deg);
    stroke: var(--color-counter-circle);
  }

  &__value {
    font-size: 22px;
    font-weight: 500;
  }

  &__text {
    font-size: 10px;
    font-weight: 500;
  }
}
</style>

<script>
export default {
  props: {
    maxValue: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  },
  setup({value, maxValue, text}) {
    const angle = (value / maxValue) * 360;
    const circumference = 2 * Math.PI * 31;
    const strokeDasharray = (angle / 360) * circumference;
    const strokeArray = `${strokeDasharray}, ${circumference - strokeDasharray}`

    return {
      strokeArray,
      value,
      text
    }
  }
}
</script>