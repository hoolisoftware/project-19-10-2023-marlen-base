<script setup>
</script>

<template>
  <modal-deposit/>
  <modal-open-case/>
  <new-modal-review/>
  <modal-sign-in/>
  <modal-order/>
  <modal-sell/>
</template>

<script>
import ModalDeposit from "./ModalDeposit"
import ModalOpenCase from "./ModalOpenCase"
import NewModalReview from "./NewModalReview"
import ModalSignIn from "./ModalSignIn"
import ModalOrder from "./ModalOrder"
import ModalSell from "./ModalSell"

export default {
  name: "modal",
  components: {ModalDeposit, ModalOpenCase, NewModalReview, ModalSignIn, ModalOrder, ModalSell}
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';
</style>
