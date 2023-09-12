const { createApp } = Vue

createApp({
    data() {
        return {
            activeSlide : 0,
            foto: './assets/img/01.webp',
            image: [
                {
                    'foto' : './assets/img/01.webp',
                },
                {
                    'foto' : './assets/img/02.webp', 
                },
                {
                    'foto' : './assets/img/03.webp', 
                },
                {
                    'foto' : './assets/img/04.webp',
                },
                {
                    'foto' :  './assets/img/05.webp',
                }
            ]
        }
    },
    methods: {
        next(){
            this.activeSlide++
            if(this.activeSlide > this.image.length -1){
                this.activeSlide = 0
            }
        },
        prev(){
            this.activeSlide--
            if(this.activeSlide < 0){
                this.activeSlide = this.image.length -1
            }
        }
    }
}).mount('#app')
  
  