<template>
  <div class="panel">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.panel {
  @media (min-width: 1024px) {
    padding: 20px;
    background-color: var(--color-bg2);
    border: 1px solid var(--color-panel-border);
    border-radius: 10px;
  }
}
</style>
