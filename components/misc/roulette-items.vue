<script setup>
</script>

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
        />
    </div>
</template>

<script>
import {modalStore} from '@/store/modal'; // Импортируем хранилище
import {authStore} from "@/store/auth"
import {rouletteStore} from "@/store/roulette"
import RouletteItem from "~/components/cards/roulette-item.vue";
import BezierEasing from "bezier-easing"
import { useCase } from "~/hooks/use-query/case";
import { SERVER_URL } from "~/config";

export default {
    name: "roulette-items",
    components: {RouletteItem},
    data() {
        return {
            modalStores: modalStore(),
            authStores: authStore(),
            rouletteStores: rouletteStore(),
            items: [],
            case_data: null,
            random_num: Math.random(),
            is_winner: false,
            animationStartTime: 0,
            animationCompletion: 0,
            animationDuration: null,
            clicked: false,
            instantly: false,
            bufferItems: 3,
            min_items: 21,
            max_items: 41,
            min_animation_duration: 0,
            max_animation_duration: 0,
        }
    },
    methods: {
        async moveElement() {
            this.is_winner = false;
            this.clicked = false;
            this.instantly = false;
            const wait_before_again = 100;

            this.items.forEach(async (item) => {
                const element = document.getElementById(`el${this.items.indexOf(item)}`);
                element.style.opacity = ""
                if (this.rouletteStores.animationState === 'again') {
                    element.style.transition = `transform 0.01s ease`
                    element.style.transform = `translateX(${(this.items.length-this.bufferItems*2)/2*100-50}%)`;
                    await new Promise(r => setTimeout(r, wait_before_again));
                }
                element.style.transition = `transform ${this.animationDuration/1000}s cubic-bezier(.08,.67,.25,1)`
                element.style.transform = `translateX(${(-(this.items.length-this.bufferItems*2)/2*100+(10+this.random_num*80))}%)`;
            }); 

            if (this.rouletteStores.animationState === 'again') {
                await new Promise(r => setTimeout(r, wait_before_again));
            }

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
        async populateItems(winItem) {
            const caseItems = this.case_data.data.case.items
            const items = []
            
            const len_items = Math.floor((this.min_items+Math.random()*(this.max_items-this.min_items))/2)*2+1
            const animationDuration = this.min_animation_duration+Math.random()*(this.max_animation_duration-this.min_animation_duration)

            for (let i = 0; i < len_items; i++) {
                if ((winItem !== null) && (i === (len_items - this.bufferItems - 1))) {
                    items.push({title: winItem.name, image: SERVER_URL + winItem.photo_url, cost: winItem.price})
                } else {
                    const item = caseItems[Math.floor((Math.random()*caseItems.length))]
                    items.push({title: item.name, image: SERVER_URL + item.photo_url, cost: item.price})
                }
            }
            return {items, animationDuration}
        },
        async insertWinItem(winItem) {
            this.items[this.items.length - this.bufferItems - 1] = {title: winItem.name, image: SERVER_URL + winItem.photo_url, cost: winItem.price}
        }
    },
    watch: {
        rouletteStores: {
            async handler(newValue) {
                if (newValue.animationState === "running") {
                    await this.insertWinItem(newValue.winItem)
                    await this.$nextTick().then(async () => { 
                        await this.moveElement()
                    })
                } else if (newValue.animationState === "again") {
                    const data = await this.populateItems(newValue.winItem)
                    this.items = data.items
                    this.animationDuration = data.animationDuration
                    this.random_num = Math.random()
                    await this.$nextTick().then(async () => { 
                        await this.moveElement()
                    })
                }
            },
            deep: true,
        }
    },
    created() {
        const {data} = useCase(this.rouletteStores.caseId.toString())
        this.case_data = data
        this.populateItems(null).then(data => {
            this.items = data.items
            this.animationDuration = data.animationDuration
        })
    },
    async mounted() {
        while (this.items.length === 0) {
            await new Promise(r => setTimeout(r, 30));
        }
        this.items.forEach((item) => {
            const element = document.getElementById(`el${this.items.indexOf(item)}`);
            element.style.transition = `transform 0s ease`
            element.style.transform = `translateX(${(this.items.length-this.bufferItems*2)/2*100-50}%)`;
        });
    },
};
</script>

<style lang="scss" scoped>
.placeholder {
    color: white
}
</style>