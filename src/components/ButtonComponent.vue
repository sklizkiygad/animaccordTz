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
.classic-button{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    border: none;
    background: #702C7E;
    padding: 14px 45px;
    border-radius: 18px;
    letter-spacing: 1px;
    margin: 10px 0;
    cursor: pointer;

}
    .primary{
        background: #702C7E;
    }
    .secondary{
        background: #C4296C;
    }
    .warning{
        background: #F4BA46;
    }
    .disabled{
        background: #EFEFEF;
        color: #767679;
    }
    .info{
        background: #0083B6;
    }
    .danger{
        background: #DF3F3E;
    }
    .action{
        background: #ED732E;
    }

    .button-timer{
        display: flex;
        background: #EFEFEF;
        padding: 14px 45px;
        border-radius: 18px;
        justify-content: space-between;
        gap: 11px;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #767679;
        letter-spacing: 1px;
        cursor: pointer;
    }
    .button-timer__timer{
        background: #DF3F3E;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        min-width: 60px;
        height: 24px;
        border-radius: 18px;
        color: #FFFFFF;
        letter-spacing: 1px;
    }

    .button-multi-sized{
        padding: 20px;
        border-radius: 15px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0;
    }

.button-multi-sized img{
    object-fit: contain;
    height: 30px;
    width: 30px;
}

    .button-link{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        text-decoration: none;
        border-bottom: 1px solid;
        color: #FFFFFF;
        transition: 0.5s;
    }

.button-link:hover{
    color: #767679;
}

.button-link:visited{
    color: #C4296C;
}


    @media (max-width: 640px) {

        .button-multi-sized img{
            height: 25px;
            width: 25px;
        }
        .button-multi-sized {
            padding: 18px;
        }
    }




</style>