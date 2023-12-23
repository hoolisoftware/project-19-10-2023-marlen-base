<template>
    <div class="slider">
        <div class="slider-text">
            Выберите количество кристаллов сотворения
        </div>
        
        <div class="slider-slider" ref="slider" @mousedown="move_thumb($event)">
            <svg class="slider-slider-left" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ref="slider_left">
                <circle cx="9" cy="9" r="7" fill="#606060" stroke="#DBC1AB" stroke-width="4"/>
            </svg>
            <svg @mousedown="start_following_cursor($event)" class="slider-slider-middle" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" ref="slider_thumb">
                <g filter="url(#filter0_d_519_8160)">
                <circle cx="14" cy="14" r="4" fill="#606060"/>
                <circle cx="14" cy="14" r="6.5" stroke="white" stroke-width="5"/>
                </g>
                <defs>
                <filter id="filter0_d_519_8160" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="2.5"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_519_8160"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_519_8160" result="shape"/>
                </filter>
                </defs>
            </svg>
            <div class="slider-slider-fill" ref="slider_fill">

            </div>
            <div class="slider-slider-value" ref="slider_value">
                <div class="slider-slider-value-rectangle">
                    <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="40" height="22" rx="4.5" fill="none" :stroke="theme.darkTheme? '#303030':'#C9A788'"/>
                    </svg>
                    <div class="slider-slider-value-rectangle-text">
                        {{ Math.floor(value) }}
                    </div>
                </div>
                <svg class="slider-slider-value-bottom" width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L4.16 9H9.36L13 0H0Z" fill="url(#paint0_linear_711_9223)"/>
                    <defs>
                    <linearGradient id="paint0_linear_711_9223" x1="6.5" y1="0" x2="6.5" y2="9" gradientUnits="userSpaceOnUse">
                    <stop :stop-color="theme.darkTheme? '#0C0C0C' : '#C3A284'"/>
                    <stop offset="1" :stop-color="theme.darkTheme? '#ffffff' : '#834711'"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <svg class="slider-slider-right" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="7" fill="white" stroke="#DBC1AB" stroke-width="4"/>
            </svg>
        </div>
        <div class="slider-cost">
            <div class="slider-cost-text">
                Стоимость составит:
            </div>
            <div class="slider-cost-value">
                456 руб
            </div>
        </div>
        <medium-button class="slider-button" color="green" text="Купить"/>
    </div>
</template>

<script>
import mediumButton from "@/components/buttons/medium-button.vue";
import { useThemeStore } from "~/store/themeNew";

export default {
  name: "shop-slider",
  components: {mediumButton},
  data() {
    return {
        slider_active: false,
        starting_cursor_x: null,
        starting_slider_x: null,
        min_slider: 5,
        max_slider: 145,
        value: 110,
        theme: useThemeStore(),
    }
  },
  methods: {
    start_following_cursor(event) {
        this.slider_active = true
        this.starting_cursor_x = event.clientX
        this.starting_slider_x = Number(window.getComputedStyle(this.$refs.slider_thumb).getPropertyValue("margin-left").replace("px", ""))
    },
    async move_thumb(event) {
        let slider_width = Number(window.getComputedStyle(this.$refs.slider).getPropertyValue("width").replace("px", ""))
        let thumb_width = Number(window.getComputedStyle(this.$refs.slider_thumb).getPropertyValue("width").replace("px", ""))
        let relative_click = event.clientX-document.querySelector(".slider-slider")?.getBoundingClientRect().x-thumb_width/2
        if (relative_click > slider_width-thumb_width/2) {
            relative_click = slider_width-thumb_width/2
        } else if (relative_click < -thumb_width/2) {
            relative_click = -thumb_width/2
        }
        this.$refs.slider_thumb.style["margin-left"]=`${relative_click}px`
        this.$refs.slider_fill.style["margin-left"]=`${relative_click}px`
        this.$refs.slider_value.style["margin-left"]=`${relative_click}px`
        let progress=(relative_click+thumb_width/2)/slider_width
        this.value = Math.floor(progress*(this.max_slider-this.min_slider)+this.min_slider)
        await this.$nextTick().then(async () => {
            this.start_following_cursor(event)
        })
    }
  },
  mounted() {
    let progress = (this.value-this.min_slider)/(this.max_slider-this.min_slider)
    let thumb_width = Number(window.getComputedStyle(this.$refs.slider_thumb).getPropertyValue("width").replace("px", ""))
    let max_move = Number(window.getComputedStyle(this.$refs.slider).getPropertyValue("width").replace("px", ""))
    this.$refs.slider_thumb.style["margin-left"]=`${progress*max_move-thumb_width/2}px`
    this.$refs.slider_fill.style["margin-left"]=`${progress*max_move-thumb_width/2}px`
    this.$refs.slider_value.style["margin-left"]=`${progress*max_move-thumb_width/2}px`
    document.addEventListener("mousemove", (event) => {
      if (this.slider_active) {
        let change = event.clientX-this.starting_cursor_x
        let max_move = Number(window.getComputedStyle(this.$refs.slider).getPropertyValue("width").replace("px", ""))
        let thumb_width = Number(window.getComputedStyle(this.$refs.slider_thumb).getPropertyValue("width").replace("px", ""))
        let abs_change = this.starting_slider_x+change

        if (abs_change > max_move-thumb_width/2) {
            abs_change = max_move-thumb_width/2
        } else if (abs_change < -thumb_width/2) {
            abs_change = -thumb_width/2
        }
        let progress=(abs_change+thumb_width/2)/max_move
        this.value = Math.floor(progress*(this.max_slider-this.min_slider)+this.min_slider)
        this.$refs.slider_thumb.style["margin-left"]=`${abs_change}px`
        this.$refs.slider_fill.style["margin-left"]=`${abs_change}px`
        this.$refs.slider_value.style["margin-left"]=`${abs_change}px`
      }
    });
    document.addEventListener("mouseup", (event) => {
      this.slider_active = false
    });
  }
}
</script>

<style lang="scss">
@import '../../public/colors';


.slider {
    width: 1034px;
    height: 161px;
    border-radius: 8px;
    border: var(--slider-border) solid 1px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &-cost {
        margin-top: 15px;
        &-value {
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: center;

        }
        &-text {
            font-size: 14px;
            font-weight: 500;
            line-height: 17px;
            letter-spacing: 0em;
            text-align: center;
            color: #767676;
        }
    }
    &-button {
        width: 198px !important;
        height: 45px;
        padding: 10px;
        border-radius: 10px !important;
        margin-top: 8px;
    }

    &-text {
        font-family: Gilroy;
        font-size: 22px;
        font-weight: 700;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: center;
        align-self: center;
        width: fit-content;
        padding: 10px;
        transform: translate(0%, -59%);
        background: var(--shop-background);
        z-index: 5;
        color: var(--title-color);
        transition: 0.3s;
    }

    &-slider{
        width: 846px;
        height: 10px;
        margin-top: 15px;
        background-image: var(--slider-background);
        display: flex;
        flex-flow: row;
        align-items: center;
        &-value {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translate(-6.5px, -23px);
            &-bottom {
            }
            &-rectangle {
                width: fit-content;
                height: 23px;
                align-items: center;
                justify-content: center;
                &-text {
                    font-family: Gilroy;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 14px;
                    letter-spacing: 0em;
                    margin-left: auto;
                    margin-right: auto;
                    transform: translateY(-153%);
                    width: fit-content;
                    align-self: center;
                    color: var(--title-color);
                }
            }
        }
        &-left {
            margin-left: -9px;
            margin-right: auto;
            z-index: 5;
            & circle {
                fill: var(--slider-left-edge-background);
                stroke: var(--slider-left-edge-border);
            }
        }
        &-right {
            margin-left: auto;
            margin-right: -9px;
            z-index: 5;
            & circle {
                fill: var(--slider-right-edge-background);
                stroke: var(--slider-right-edge-border);
            }
        }
        &-middle {
            margin-left: 500px;
            z-index: 6;
            width: 28px !important;
            height: 28px !important;
            position: absolute;
            cursor: pointer;
        }
        &-fill {
            border: 1px solid var(--slider-fill-border-color); 
            height: 10px;
            flex-grow: 1;
            display: flex;
            float: right;
            background: var(--slider-fill-color);
            margin-left: 0px;
            margin-right: -10px;
        }
    }
}
</style>