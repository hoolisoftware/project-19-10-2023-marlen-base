<template>
  <div class="case" :data-theme="theme">
    <div class="case-image">
      <img :src="image" alt="Предмет">
    </div>
    <div class="case-title">{{title}}</div>
    <div class="case-bottom">
      <div class="case-cost">
        <div>Стоимость</div>
        <div>
          <img alt="moon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKrSURBVHgBTZLNTxNBGMaf2Zn9XpZtqSKosVHESgjGoImJGjEa9WiI8WRiwBhvHPDGyYSrCd70hvgPePHjwsEEJSIq8hW+LIIUKf2i3ZbtbtttHQ8QJ5lkMnmed+b5vS/Bf2thYqLBOGT2qZJ/hyB50sktEsXUZjf/lMamZueHenqere1pyd5henz0QUv7macicy1vdwWKsYGKayPz6xvUBg1UPp7+PC08vnmzf2TfOPVx5H5b5/WXmbUZMKyjrqkOTnYZTHbgFRzktuOwcx6OnTmLxZ+B3otd/cPk/evn4a4bVyfjC+Oh+mABcr0BUfGRWf0BQWS8bA1KkMJO5hFbSOD4ua5seruhhYXD1b7d1HAIXh6S2YRyMc+NMiBwS7UGQVFQcor86zqYRLGzNmMJ0oE+FrScK5loAgdaGrExuQSByAhfbOUhBEhGEOnYFrLROHyfAmUXqysZHI6wbqFc2u3wHB+EVnGo4yCIpMKO2/A9BYnoNuJz65DUemS3UihkbFSKJbiZbCtz8imUSy6HUELND/G9jJVPq/CcCoSqD9d2UdhIwDraxIHZ8HJFXqRAWXxxK0prlVO5GOUXX7EVTfJsPhipoeRWUHbKCDWb2NlMQLUM3gYflPhz9FZHsNlQzMtuNontWAZWUOYvAdlUHjJn1Nga4MIqRE1GjVTAGEVVk9/S8+2RhYDoPNxNpWVaq2KH50tz9JougYgCCjkHii5Cs2RQRkBU3QtGmu/S0S+r+UijXqQl71YuX4Z5UIXBapBVCk0TYSgURK6HFDRAJQK7enrg0u0X7/ZH7sm9toHIUX3wSDgg6KYISZEgqgxag85pD8Kxv7ux3/GBts5HQ//0dM/4YSY5dq3dfOUxEtAtKSRpsqlYTRDqDid88cTw/BLp7bzQ/WZP/xcxCyDDiOREJwAAAABJRU5ErkJggg=="/>
          <span>{{cost}}</span>
        </div>
      </div>
      <medium-button text="Купить"/>
    </div>
  </div>
</template>

<script>
import mediumButton from "@/components/buttons/medium-button.vue";
import {themeStore} from "~/store/theme";
export default {
  props: {
    title: String,
    image: String,
    cost: Number
  },
  components: {mediumButton},
  name: "card",
  computed: {
    theme() {
      return this.theme.isDarkTheme() ? 'dark' : 'light';
    }
  },
    data() {
      return {
          theme: themeStore()
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.case {
  display: flex;
  flex-direction: column;
  width: 314px;
  height: max-content;
  box-sizing: border-box;
  padding: 15px 20px;
  background: var(--case-background);
  border: var(--case-border);
  border-radius: 28px;
  gap: 10px;
  &:hover > .case-image > img {
    transform: scale(1.06);
  }
  &-title {
    display: flex;
    width: 100%;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  &-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 200px;
    background: var(--case-image);
    border-radius: 20px;
    & img {
      max-width: 100%;
      max-height: 100%;
      transition: 0.3s;
    }
  }
  &-cost {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & div:nth-child(1) {
      display: flex;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #A6A6A6;
    }
    & div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 5px;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      & img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
