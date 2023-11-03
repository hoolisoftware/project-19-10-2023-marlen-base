<template>
    <div>
        <roulette-item  
            v-for="item in items"
            :title="item.title" 
            :image="item.image" 
            :cost="item.cost"
            :winner="items.indexOf(item) === items.length-1-bufferItems? is_winner : false"
            :selected="(clicked !== false)? clicked === items.indexOf(item) : false"
            :unselected="(clicked !== false)? clicked !== items.indexOf(item) : false"
            :instantly="instantly"
            :id="`el${items.indexOf(item)}`"
            class="roulette_transitions"
        />
    </div>
</template>

<script>
import {modalStore} from '@/store/modal'; // Импортируем хранилище
import {authStore} from "@/store/auth"
import {rouletteStore} from "@/store/roulette"
import RouletteItem from "~/components/cards/roulette-item.vue";
import BezierEasing from "bezier-easing"

export default {
    name: "roulette-items",
    components: {RouletteItem},
    data() {
        return {
            modalStores: modalStore(),
            authStores: authStore(),
            rouletteStores: rouletteStore(),
            items: [
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
                {title: "None", image: "/img/items/item_1.png", cost: 1200},
                {title: "None", image: "/img/items/item_1.png", cost: 125},
                {title: "None", image: "/img/items/item_1.png", cost: 120},
            ],
            random_num: Math.random(),
            is_winner: false,
            animationStartTime: 0,
            animationCompletion: 0,
            animationDuration: 8000,
            clicked: false,
            instantly: false,
            bufferItems: 2,
        }
    },
    methods: {
        async moveElement() {
            this.items.forEach((item) => {
                const element = document.getElementById(`el${this.items.indexOf(item)}`);
                element.style.transform = `translateX(${-(this.items.length-this.bufferItems*2)/2*100+(10+this.random_num*80)}%)`;
            });
            const animationStartTime = Date.now();
            let currentTime = Date.now();
            let elapsed = currentTime - animationStartTime;
            let animationCompletion = 0;
            let newAnimationCompletion = 0;
            let bezierCurve = BezierEasing(.08,.67,.25,1)  //.05,.79,.25,1   .25, .1,.25, 1
            while (elapsed < this.animationDuration) {
                currentTime = Date.now();
                elapsed = currentTime - animationStartTime;
                newAnimationCompletion = bezierCurve(elapsed / this.animationDuration);
                this.instantly = (newAnimationCompletion-animationCompletion) > 0.03
                animationCompletion = newAnimationCompletion;

                this.clicked = Math.floor((this.items.length-this.bufferItems*2-(10+this.random_num*80)/100-0.5)*animationCompletion+0.5)+this.bufferItems;
                await new Promise(r => setTimeout(r, 30));
            }
            this.clicked = false;
            this.rouletteStores.animationState = 'ended';
            this.items.forEach(async (item) => {
                const element = document.getElementById(`el${this.items.indexOf(item)}`);
                element.style.transition = `all 0.6s ease`
                element.style.transform = `translateX(${-(this.items.length-this.bufferItems*2)/2*100+50}%)`;
                if (this.items.indexOf(item) === this.items.length-1-this.bufferItems){
                    element.style.opacity = 1;
                    await new Promise(r => setTimeout(r, 600));
                    this.is_winner = true;
                } else {
                    element.style.opacity = 0.4
                }
            })
        },
    },
    watch: {
        rouletteStores: {
            async handler(newValue) {
                if (newValue.animationState === "running") {
                    await this.moveElement()
                }
            },
            deep: true,
        }
    },
    mounted() {
        this.items.forEach((item) => {
            const element = document.getElementById(`el${this.items.indexOf(item)}`);
            element.style.transform = `translateX(${(this.items.length-this.bufferItems*2)/2*100-50}%)`;
        });
    },
};
</script>

<style lang="scss" scoped>

@keyframes testt {
  0% {
    transform: translateX(450%);
  }
  50% {
    transform: translateX(-450%);
  }
  100% {
    transform: translateX(450%);
  }
}

.test {
    animation: testt 7s infinite;
}

.roulette_transitions {
    transition: transform 8s cubic-bezier(.08,.67,.25,1);
}

</style>