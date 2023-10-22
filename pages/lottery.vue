<template>
  <div class="lottery">
    <h1 class="heading1 lottery__title">Лотерея</h1>
    <div class="lottery__grid">
      <LotteryPrizes/>
      <LotteryBet/>
      <LotteryUsers/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lottery {
  max-width: 1040px;
  margin: 0 auto;
  padding: 70px 0 120px;

  &__title {
    margin-bottom: 57px;
  }

  &__grid {
    display: grid;
    grid-row-gap: 40px;
    text-align: center;
    max-width: 345px;
    margin: 0 auto;

    @media (min-width: 1024px) {
      max-width: 100%;
      grid-template: auto / 1.18fr 1.37fr 1fr;
    }
  }
}
</style>

<script>
import LotteryPrizes from "../components/lottery/LotteryPrizes.vue";
import LotteryBet from "../components/lottery/LotteryBet.vue";
import LotteryUsers from "../components/lottery/LotteryUsers.vue";

export default {
  components: {
    LotteryUsers,
    LotteryBet, LotteryPrizes
  },
  setup() {
    const userList = [
      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user3.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user4.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },

      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user3.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user4.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        score: 5
      }
    ]

    return {
      userList
    }
  }
}
</script>