<template>
  <div class="auction">
    <h1 class="heading1 auction__title">Аукцион</h1>
    <div class="auction__grid">
      <!-- Bet -->
      <Panel>
        <h2 class="heading2 auction__lot-title">Лот</h2>
        <div class="auction__lot-grid">
          <div class="auction__lot-img-box">
            <NuxtImg
                src="lot.png"
                format="avif,webp"
                densities="x1 x2"
                class="auction__lot-img"
            />
          </div>
          <div class="auction__lot-content">
            <p class="auction__big-text">Название предмета</p>
            <p class="auction__text">До окончания лотереи осталось:</p>
            <Counter class="auction__counter"/>
            <p class="auction__text">Сделайте вашу ставку:</p>
            <div class="auction__bet-box">
              <input type="text" class="auction__bet-input" value="2458"/>
              <Button color="green" text="Подтвердить ставку" class="auction__bet-btn"/>
            </div>
            <div class="auction__text-box">
              <p class="auction__text">Последняя ставка была:
                <span class="auction__text-value">2458</span>
              </p>
              <p class="auction__text">Минимальный шаг:
                <span class="auction__text-value">50</span>
              </p>
            </div>
          </div>
        </div>
      </Panel>
      <!-- Users -->
      <Panel>
        <h2 class="heading2 auction__lot-title auction__lot-title--users">Участники</h2>
        <PerfectScrollbar class="auction__user-list">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auction {
  padding-top: 67px;
  padding-bottom: 20px;
  max-width: 345px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1040px;
  }

  &__title {
    margin-bottom: 44px;

    @media (min-width: 1024px) {
      margin-bottom: 64px;
    }
  }

  &__grid {
    display: grid;
    grid-gap: 50px 24px;

    @media (min-width: 1024px) {
      grid-template: auto / 2.47fr 1fr;
    }
  }

  &__lot-title {
    margin-bottom: 12px;

    &--users {
      margin-bottom: 16px;
    }
  }

  &__lot-grid {
    display: grid;
    grid-gap: 20px 24px;

    @media (min-width: 1024px) {
      grid-template: auto / 1fr 1.06fr;
    }
  }

  &__lot-img-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__lot-img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  &__lot-content {
    padding-top: 8px;
  }

  &__big-text {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 600;
  }

  &__text {
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 500;
    color: #767676;

    .auction__text-box & {
      margin-bottom: 4px;
    }
  }

  &__text-value {
    color: var(--color-text);
  }

  &__counter {
    margin-bottom: 28px;
  }

  &__bet-box {
    display: grid;
    grid-template: auto / 1fr 2.56fr;
    grid-gap: 22px;
    width: 100%;
    max-width: 320px;
    margin-bottom: 19px;
  }

  &__bet-input {
    min-width: 0;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--color-page-auction-input-bg);
    border: 1px solid var(--color-page-auction-input-border);
    font-size: 24px;
    font-weight: 500;
    color: #979797;
    text-align: center;
  }

  &__bet-btn {
  }

  &__user-list {
    display: grid;
    grid-row-gap: 16px;
    height: 300px;
    padding-right: 20px;
  }
}
</style>
<script>
import {PerfectScrollbar} from 'vue3-perfect-scrollbar'
import Panel from "../components/common/Panel.vue";
import Counter from "../components/common/Counter.vue";
import Button from "../components/common/Button.vue";
import Participant from "../components/common/Participant.vue";

export default {
  components: {PerfectScrollbar, Participant, Button, Counter, Panel},
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