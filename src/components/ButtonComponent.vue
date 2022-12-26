<template>
    <div class="main-button">
        <button class="classic-button"
                :class="colorTypeOfButton"
                v-if="typeOfButton==='classic'">
            {{textOfButton}}
        </button>

        <button class="button-timer"
                v-if="typeOfButton==='timer'">
            {{textOfButton}}
            <div class="button-timer__timer">
                {{showTimer()}}
            </div>
        </button>

        <button class="button-multi-sized"
                :class="colorTypeOfButton"
                v-if="typeOfButton==='multi-sized'">
            <img :src="showImage()" :alt="textOfButton">
        </button>

        <a
                class="button-link"
                :href="linkAddress"
                v-if="typeOfButton==='link-button'"
                target="_blank"
        >
            {{textOfButton}}
        </a>


    </div>

</template>

<script>
    export default {
        name:'ButtonComponent',
        data(){
            return{
                currentTime: 0,
                timer: null,
            }
        },
        props:{
            typeOfButton:{
                type:String,
                default:'classic'
            },
            textOfButton:{
                type:String,
                default:'Отправить письмо'
            },
            colorTypeOfButton:{
                type:String,
                default:'primary'
            },
            timerOfButton:{
                type:Number,
                default:0
            },
            linkAddress:{
                type:String,
                default:''
            },

        },
        methods:{
            startTimer() {
                this.timer = setInterval(() => {
                    this.currentTime--
                }, 1000)
            },
            stopTimer() {
                clearTimeout(this.timer)
            },
            setCurrentTimeVar() {
                if(this.timerOfButton){
                    this.currentTime=this.timerOfButton;
                }
            },
            showTimer(){
                let timerToShow=(Math.floor(this.currentTime/60) < 10? '0'+Math.floor(this.currentTime/60):Math.floor(this.currentTime/60)) + ':' +(this.currentTime%60 <10?'0'+Math.floor(this.currentTime%60):Math.floor(this.currentTime%60))
                return timerToShow
            },
            showImage(){
                return require('@/assets'+this.textOfButton);
            }
        },
        watch: {
            currentTime(time) {
                if (time == 0) {
                    this.stopTimer()
                }
            }
        },
        mounted() {
            this.setCurrentTimeVar()
            this.startTimer()
        },
        destroyed() {
            this.stopTimer()
        },

    }
</script>

<style scoped>

</style>