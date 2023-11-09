<template>
  <div class="wrap" v-if="active">
    <div class="overl">
      <div class="game" :style="{ width: gameWidth }">
        <div class="game-rect" :style="{ left: rectPosition }"></div>
        <div class="game-target" :style="{ left: targetPosition }">
          <img src="@/assets/icons/game-fish.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "gamesss",
  watch: {
    active(newVar) {
      if (newVar === true) {
        console.log('запускаем игру');
        setTimeout(this.startGame, 1000)
      }
    }
  },
  data() {
    return {
      active: false,
      gameWidth: "30vw",
      rectPosition: "0vw",
      targetPosition: "1vw",
      direction: 1,
      timerId: null,
      counting: 45.0
    };
  },
  methods: {
    startGame() {
      this.gameWidth = `${this.$el.offsetWidth}px`;
      this.startMoving();
      window.addEventListener("keydown", this.handleKeyDown);
      window.addEventListener("keyup", this.handleKeyUp);
    },
    detectCollision() {
      const rect = document.querySelector('.game-rect');
      const target = document.querySelector('.game-target');

      const rectBounds = rect.getBoundingClientRect();
      const targetBounds = target.getBoundingClientRect();

      const rectLeft = rectBounds.left;
      const rectRight = rectBounds.right;
      const targetLeft = targetBounds.left;
      const targetRight = targetBounds.right;

      const overlapX = Math.max(0, Math.min(rectRight, targetRight) - Math.max(rectLeft, targetLeft));

      if (overlapX > 0) {
        this.counting += 0.1;
      } else {
        if (this.counting > 0) {
          this.counting -= 0.2;
        }
      }

      if (this.counting < 20) {
        rect.style.background = '#ff0000';
      }
      if (this.counting >= 20 && this.counting < 30) {
        rect.style.background = '#e84210';
      }
      if (this.counting >= 30 && this.counting < 40) {
        rect.style.background = '#e87e10';
      }
      if (this.counting >= 40 && this.counting < 50) {
        rect.style.background = '#ece926';
      }
      if (this.counting >= 50 && this.counting < 70) {
        rect.style.background = '#a1dc62';
      }
      if (this.counting >= 70 && this.counting < 80) {
        rect.style.background = '#50be42';
      }
      if (this.counting >= 80 && this.counting < 90) {
        rect.style.background = '#36d921';
      }
      if (this.counting >= 90) {
        rect.style.background = '#23e10a';
      }
      if (this.counting > 100) {
        this.counting = 0;
        console.log('Вы победили рыбу');
      }
      if (this.counting < 1) {
        this.counting = 45;
        console.log('Вы проиграли рыбе');
      }
    },
    startMoving() {
      this.timerId = setInterval(this.moveTarget, 20); // скорость движения
      this.setRandomDirectionChange();
    },
    stopMoving() {
      clearInterval(this.timerId);
      clearTimeout(this.directionChangeTimeoutId);
      window.removeEventListener("keydown", this.handleKeyDown);
      window.removeEventListener("keyup", this.handleKeyUp);
    },
    setRandomDirectionChange() {
      const time = Math.floor(Math.random() * 5000) + 3000;
      this.directionChangeTimeoutId = setTimeout(() => {
        this.direction *= -1;
        this.setRandomDirectionChange();
      }, time);
    },
    moveTarget() {
      this.detectCollision();
      const currentLeft = parseFloat(this.targetPosition);
      const maxLeft =
        parseFloat(this.gameWidth) -
        parseFloat(getComputedStyle(this.$el).paddingLeft) -
        parseFloat(document.querySelector(".game-target").clientWidth);
      const nextLeft = currentLeft + this.direction;
      if (nextLeft < 0 || nextLeft > maxLeft) {
        this.direction *= -1;
      }
      this.targetPosition = `${nextLeft}px`;
    },
    handleKeyDown(event) {
      const key = event.key.toLowerCase();
      if (key === "arrowleft") {
        this.moveRectLeft();
      } else if (key === "arrowright") {
        this.moveRectRight();
      }
    },
    handleKeyUp(event) {
      const key = event.key.toLowerCase();
      if (key === "arrowleft" || key === "arrowright") {
        this.stopRect();
      }
    },
    moveRectLeft() {
      this.rectPosition = `${Math.max(
        parseFloat(this.rectPosition) - 10,
        parseFloat(getComputedStyle(this.$el).paddingLeft)
      )}px`;
    },
    moveRectRight() {
      const maxLeft =
        parseFloat(this.gameWidth) -
        parseFloat(getComputedStyle(this.$el).paddingLeft) -
        parseFloat(document.querySelector(".game-rect").clientWidth);
      this.rectPosition = `${Math.min(
        parseFloat(this.rectPosition) + 10,
        maxLeft
      )}px`;
    },
    stopRect() {
    },
  },
  beforeDestroy() {
    this.stopMoving();
  },
};
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  background: rgba(0,0,0,0.6);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.overl {
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 1vw;
}

.game {
  position: relative;
  height: 3vw;
  width: 30vw;
  max-width: 30vw;
  min-width: 30vw;
  background: rgba(255, 255, 255, 0.1);
  overflow: visible;

  &-rect {
    position: absolute;
    left: 6.5vw; // размер прямоугольника
    top: 0;
    background: #ece926;
    border-left: 0.052vw solid rgba(0, 0, 0, 0.4);
    border-right: 0.052vw solid rgba(0, 0, 0, 0.4);
    width: 3vw;
    height: 100%;
    transition: all 0.2s, background 4.5s;
  }

  &-target {
    position: absolute;
    top: 0;
    height: 100%;
    width: 3.75vw;
    background: none;
    background-size: cover;

    & svg {
      width: 3.75vw;
      height: 2.75vw;
      object-fit: cover;
    }
  }
}
</style>
