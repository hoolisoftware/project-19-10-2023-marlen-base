<script setup>
</script>

<template>
  <modal-deposit/>
  <modal-open-case/>
  <modal-review/>
  <modal-sign-in/>
</template>

<script>
import ModalDeposit from "./ModalDeposit"
import ModalOpenCase from "./ModalOpenCase"
import ModalReview from "./ModalReview"
import ModalSignIn from "./ModalSignIn"

export default {
  name: "modal",
  components: {ModalDeposit, ModalOpenCase, ModalReview, ModalSignIn}
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
</style>
