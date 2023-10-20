<template>
  <div class="wrap" v-if="active">
    <div class="overl">
      <div class="game" :style="{ width: gameWidth }">
        <div class="game-rect" :style="{ left: rectPosition }"></div>
        <div class="game-target" :style="{ left: targetPosition }">
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M66.0374 46.6875C66.0374 42.75 71.5499 33.8625 68.9624 31.1625C66.1499 28.2375 59.6249 40.725 56.3624 40.725C52.4249 40.725 50.0624 35.8875 48.1499 33.8625C46.5749 32.2875 51.0749 25.9875 49.0499 25.5375C40.6124 23.5125 39.4874 28.4625 34.8749 27.225C31.2749 26.325 27.5624 25.7625 23.9624 25.7625C10.4624 25.7625 7.87488 35.4375 5.51238 44.4375C5.06238 45.7875 18.6749 57.375 18.6749 57.375C18.6749 57.375 8.32488 51.525 8.54988 52.875C10.2374 60.3 17.2124 65.025 25.0874 66.825C27.3374 67.3875 29.6999 67.6125 31.9499 67.6125C46.3499 67.6125 48.5999 56.475 56.3624 55.125C61.0874 54.3375 66.1499 63.45 68.8499 60.6375C71.7749 57.7125 66.0374 51.3 66.0374 46.6875Z"
              fill="#728389"/>
            <path
              d="M54.1125 68.0625C52.7625 69.4125 50.0625 71.1 47.1375 68.0625C44.2125 65.025 41.0625 59.625 42.4125 58.275C43.7625 56.925 48.9375 60.1875 51.8625 63.225C54.7875 66.15 55.4625 66.7125 54.1125 68.0625Z"
              fill="#8D9BA3"/>
            <path
              d="M37.5751 43.3125C38.942 43.3125 40.0501 41.7008 40.0501 39.7125C40.0501 37.7243 38.942 36.1125 37.5751 36.1125C36.2082 36.1125 35.1001 37.7243 35.1001 39.7125C35.1001 41.7008 36.2082 43.3125 37.5751 43.3125Z"
              fill="#8D9BA3"/>
            <path
              d="M42.3002 46.9126C43.0458 46.9126 43.6502 45.6534 43.6502 44.1001C43.6502 42.5468 43.0458 41.2876 42.3002 41.2876C41.5546 41.2876 40.9502 42.5468 40.9502 44.1001C40.9502 45.6534 41.5546 46.9126 42.3002 46.9126Z"
              fill="#8D9BA3"/>
            <path
              d="M44.8876 42.4126C45.2604 42.4126 45.5626 41.5564 45.5626 40.5001C45.5626 39.4439 45.2604 38.5876 44.8876 38.5876C44.5149 38.5876 44.2126 39.4439 44.2126 40.5001C44.2126 41.5564 44.5149 42.4126 44.8876 42.4126Z"
              fill="#8D9BA3"/>
            <path
              d="M5.96255 51.5251C7.01879 51.5251 7.87505 50.6185 7.87505 49.5001C7.87505 48.3817 7.01879 47.4751 5.96255 47.4751C4.9063 47.4751 4.05005 48.3817 4.05005 49.5001C4.05005 50.6185 4.9063 51.5251 5.96255 51.5251Z"
              fill="#75D6FF"/>
            <path
              d="M7.0875 31.3875C9.75918 31.3875 11.925 29.1209 11.925 26.325C11.925 23.529 9.75918 21.2625 7.0875 21.2625C4.41582 21.2625 2.25 23.529 2.25 26.325C2.25 29.1209 4.41582 31.3875 7.0875 31.3875Z"
              fill="#75D6FF"/>
            <path
              d="M14.3999 20.925C19.3705 20.925 23.3999 16.7445 23.3999 11.5875C23.3999 6.43054 19.3705 2.25 14.3999 2.25C9.42934 2.25 5.3999 6.43054 5.3999 11.5875C5.3999 16.7445 9.42934 20.925 14.3999 20.925Z"
              fill="#75D6FF"/>
            <path
              d="M21.0375 51.6376C25.4489 51.6376 29.025 47.9103 29.025 43.3125C29.025 38.7148 25.4489 34.9875 21.0375 34.9875C16.6262 34.9875 13.05 38.7148 13.05 43.3125C13.05 47.9103 16.6262 51.6376 21.0375 51.6376Z"
              fill="#FCFCFA"/>
            <path
              d="M21.0374 49.0499C24.0819 49.0499 26.5499 46.4812 26.5499 43.3124C26.5499 40.1437 24.0819 37.575 21.0374 37.575C17.9929 37.575 15.5249 40.1437 15.5249 43.3124C15.5249 46.4812 17.9929 49.0499 21.0374 49.0499Z"
              fill="#29251C"/>
          </svg>
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
