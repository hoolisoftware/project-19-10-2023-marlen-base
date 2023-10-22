<template>
  <Panel class="users">
    <h2 class="heading2 users__title">Участники</h2>
    <PerfectScrollbar class="users__user-list">
      <template v-for="user in userList">
        <Participant
            :avatar="user.avatar"
            :name="user.name"
            :score="user.score"
            :is-score-green=true
        />
      </template>
    </PerfectScrollbar>
  </Panel>
</template>

<style lang="scss" scoped>
.users {
  text-align: left;

  &__title {
    margin-bottom: 27px;
  }

  &__user-list {
    display: grid;
    grid-row-gap: 16px;
    height: 340px;
    padding-right: 20px;
  }
}
</style>

<script>
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'
import Panel from "../../components/common/Panel.vue";
import Participant from "../common/Participant.vue";

export default {
  components: {PerfectScrollbar, Participant, Panel},
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