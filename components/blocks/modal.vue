<script setup>
</script>

<template>
  <modal-deposit/>
  <modal-open-case/>
  <new-modal-review/>
  <modal-sign-in/>
</template>

<script>
import ModalDeposit from "./ModalDeposit"
import ModalOpenCase from "./ModalOpenCase"
import NewModalReview from "./NewModalReview"
import ModalSignIn from "./ModalSignIn"

export default {
  name: "modal",
  components: {ModalDeposit, ModalOpenCase, NewModalReview, ModalSignIn}
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
</style>
