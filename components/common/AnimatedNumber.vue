<script setup>
</script>


<template>
    <div id="odometer" class="odometer" :style="`height: ${height}px;`">
        <div v-for="(digit, index) in String(value)" class="odometer-num" :style="`width: ${width[Number(digit)]}px;transform: translateY(${-Number(digit)*height}px); transition: ${animation? 0.5:0}s`">
            <div ref="digit0" id="digit0" class="odometer-num-component">0</div>
            <div class="odometer-num-component">1</div>
            <div class="odometer-num-component">2</div>
            <div class="odometer-num-component">3</div>
            <div class="odometer-num-component">4</div>
            <div class="odometer-num-component">5</div>
            <div class="odometer-num-component">6</div>
            <div class="odometer-num-component">7</div>
            <div class="odometer-num-component">8</div>
            <div class="odometer-num-component">9</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "animated-number",
    components: {
    },
    props: {
        value: {
            type: Number,
            required: true,
        }
    },
    methods: {
        getTextWidth(inputText, font) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(inputText);
            return metrics.width;
        } 
    },
    data() {
        return {
            height: 0,
            width: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            animation: false,
        }
    },
    async mounted() {
        let font_size = getComputedStyle(document.querySelector('.odometer-num-component'))['font-size']
        let font_family = getComputedStyle(document.querySelector('.odometer-num-component'))['font-family']
        this.width = [
            this.getTextWidth('0', `${font_size} ${font_family}`),
            this.getTextWidth('1', `${font_size} ${font_family}`),
            this.getTextWidth('2', `${font_size} ${font_family}`),
            this.getTextWidth('3', `${font_size} ${font_family}`),
            this.getTextWidth('4', `${font_size} ${font_family}`),
            this.getTextWidth('5', `${font_size} ${font_family}`),
            this.getTextWidth('6', `${font_size} ${font_family}`),
            this.getTextWidth('7', `${font_size} ${font_family}`),
            this.getTextWidth('8', `${font_size} ${font_family}`),
            this.getTextWidth('9', `${font_size} ${font_family}`)
        ]
        this.height = digit0.clientHeight
        await new Promise(r => setTimeout(r, 100));
        this.animation = true
    },
    updated() {
        this.height = digit0.clientHeight
        let font_size = getComputedStyle(document.querySelector('.odometer-num-component'))['font-size']
        let font_family = getComputedStyle(document.querySelector('.odometer-num-component'))['font-family']
        this.width = [
            this.getTextWidth('0', `${font_size} ${font_family}`),
            this.getTextWidth('1', `${font_size} ${font_family}`),
            this.getTextWidth('2', `${font_size} ${font_family}`),
            this.getTextWidth('3', `${font_size} ${font_family}`),
            this.getTextWidth('4', `${font_size} ${font_family}`),
            this.getTextWidth('5', `${font_size} ${font_family}`),
            this.getTextWidth('6', `${font_size} ${font_family}`),
            this.getTextWidth('7', `${font_size} ${font_family}`),
            this.getTextWidth('8', `${font_size} ${font_family}`),
            this.getTextWidth('9', `${font_size} ${font_family}`)
        ]
    }
}
</script>


<style lang="scss" scoped>
.odometer {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: baseline !important; 
  gap: 0px !important;
  &-num {
    position: relative;
    &-component {
        text-align: center;
    }
  }
}
</style>