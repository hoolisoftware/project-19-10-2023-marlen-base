<script setup>
</script>


<template>
    <div id="odometer" class="odometer" :style="`height: ${height}px;`">
        <div v-for="digit in String(value)" class="odometer-num" :style="`height: ${height*10}px;width: ${width[Number(digit)]}px; transform: translateY(${-Number(digit)*height}px); transition: ${animation? 0.5:0}s`">
            <div class="odometer-num-component" :style="`height: ${height}px;`">0</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">1</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">2</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">3</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">4</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">5</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">6</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">7</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">8</div>
            <div class="odometer-num-component" :style="`height: ${height}px;`">9</div>
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
            return Math.ceil(metrics.width);
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
        this.height = Number(font_size.replace("px", ''))
        await new Promise(r => setTimeout(r, 100));
        this.animation = true
    },
    updated() {
        let font_size = getComputedStyle(document.querySelector('.odometer-num-component'))['font-size']
        let font_family = getComputedStyle(document.querySelector('.odometer-num-component'))['font-family']
        this.height = Number(font_size.replace("px", ''))
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
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
  }
}
</style>