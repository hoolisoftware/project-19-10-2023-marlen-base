<template>
    <input class="input"/>
</template>

<style scoped>
.input
{
    width: 100%;
    margin-bottom: 16px;
    padding: 7px 10px;
    font-size: 24px;
    font-weight: 500;
    border-radius: 8px;
    background-color: var(--color-page-purchase-user-input-bg);
    border: 1px solid var(--color-page-purchase-user-input-border);
    color: #979797;
    letter-spacing: .2em;
    text-align: center;
    transition: box-shadow .3s;

    &::placeholder {
      opacity: 1;
      color: #979797;
    }

    &:focus {
      box-shadow: inset 0 0 0 1px var(--color-page-purchase-user-input-border);
      outline: none;
    }
}

</style>