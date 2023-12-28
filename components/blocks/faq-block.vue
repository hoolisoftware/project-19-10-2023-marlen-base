<template>
    <div :class="`faq-block`" :style="`max-height: ${show_answer? `${height}px` : '100px'}`" @click="change_answer()">
        <div class="faq-block-question" ref="faq_block_question">
            <img class="faq-block-arrow" src="@/assets/icons/chevron-down.svg" :style="show_answer? 'transform: rotate(-180deg)' : 'transform: rotate(0deg)'">
            <div class="faq-block-question-text">
                {{ question }}
            </div>
        </div>
        <div class="faq-block-answer" :style="show_answer? 'opacity: 1;' : 'opacity: 0;'">
            {{ answer }}
        </div>
    </div>
</template>

<script>
export default {
  name: "faq-block",
  data() {
    return {
        show_answer: false,
        height: 100,
    }
  },
  props: {
    question: {
        type: String
    },
    answer: {
        type: String
    }
  },
  methods: {
    change_answer() {
        this.show_answer = !this.show_answer
    },
    define() {
        let faq_height = 100;
        let faq_question_height = Number(document.querySelector(".faq-block-question")?.getBoundingClientRect().height)
        let question_margin_top = (faq_height-faq_question_height)/2;
        this.$refs.faq_block_question.style["margin-top"] = `${question_margin_top}px`
        let faq_answer = document.querySelector(".faq-block-answer")?.getBoundingClientRect()
        let faq_block = document.querySelector(".faq-block")?.getBoundingClientRect()
        this.height = faq_answer.bottom-faq_block.top+37+1
    },
  },
  mounted() {
    this.define()
    window.addEventListener('resize', this.define)
  }
}
</script>

<style lang="scss" scoped>
@import '../../public/colors';

.faq-block {
    display: flex;
    flex-direction: column;
    width: min(700px, 100%);
    border-radius: 12px;
    background-color: var(--faq-block-background);
    transition: all 0.3s ease;
    overflow: hidden;
    height: auto;
    max-height: 100px;
    border: var(--faq-block-border);
    cursor: pointer;
    &-short {
        @extend .faq-block;
        max-height: 100px;
    }
    &-long {
        @extend .faq-block;
        max-height: 350px;
    }

    &-arrow {
        width: 24px;
        height: 24px;
        transition: 0.3s;
    }

    &-question {
        display: flex;
        flex-direction: row;
        margin-left: 29px;
        margin-right: 29px;
        align-items: center;
        &-text {
            font-size: 20px;
            font-weight: 700;
            line-height: 25px;
            letter-spacing: 0em;
            text-align: center;
            width: fit-content;
            margin-left: 10px;
        }
    }
    &-answer {
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 10px;
        color: var(--faq-answer-color);
        margin-left: 63px;
        margin-right: 63px;
        margin-bottom: 37px;
        transition: 0.3s;
        @media (max-width: 500px) {
            margin-right: 19px;
        }
    }
}
</style>