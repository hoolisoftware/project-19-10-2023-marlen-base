<template>
  <div class="results">
    <h1 class="heading1 results__title">Результаты лотереи</h1>
    <div class="results__grid">
      <template v-for="user in userList">
        <ResultsUser
            :avatar="user.avatar"
            :name="user.name"
            :tickets-number="user.ticketsNumber"
            :prize="user.prize"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  max-width: 980px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 124px;

  @media (min-width: 1024px) {
    padding-bottom: 30px;
  }

  &__title {
    margin-bottom: 68px;
  }

  &__grid {
    display: grid;
    grid-gap: 12px 20px;

    @media (min-width: 1024px) {
      grid-template: auto / repeat(2, 1fr);
    }
  }
}
</style>
<script>
import ResultsUser from "../components/results/ResultsUser.vue";

export default {
  components: {ResultsUser},
  setup() {
    const userList = [
      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize1.png'
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize2.png'
      },
      {
        avatar: 'user3.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize3.png'
      },
      {
        avatar: 'user4.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize4.png'
      },

      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize5.png'
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize6.png'
      },
      {
        avatar: 'user3.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize7.png'
      },
      {
        avatar: 'user4.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize10.png'
      },
      {
        avatar: 'user1.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize1.png'
      },
      {
        avatar: 'user2.jpg',
        name: 'Dmitryi Ravos',
        ticketsNumber: 5,
        prize: 'prize2.png'
      }
    ]

    return {
      userList
    }
  }
}
</script>