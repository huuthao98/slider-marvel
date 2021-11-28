const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//khai bao bien dieu khien
const nextBtn = $('.btn.btn-next');
const prevBtn = $('.btn-prev');

//khia bao slider show
const slider = $('#slider');
const allBox = $$('.slider_box');
const sliderWrapper = $('#slider-wrapper');
const listItemDot = $('.btn-dot');
//khai bao length 
const allBoxLength = allBox.length

//logic tao lao
const items = 1 //you are can set from 1 to 4
const sizeBox = allBox[0].offsetWidth
let positionX = 0
let marginX = 0
let indexImg = 0
let currentSlideNumber = 0
const app = {
    
    render: function() {
       
    },
    
    handleEvent: function() {
        const _this = this

        //xu ly next image
        nextBtn.onclick = function() {
            if(currentSlideNumber >= allBoxLength -1 ) {
                _this.nextSlider(0)
                // slider.style = `transition: none`

                currentSlideNumber = 0
                return;
            }
            currentSlideNumber++
            _this.nextSlider(currentSlideNumber)
        }
        //xu ly prev image
        prevBtn.onclick = function() {
            if(currentSlideNumber <= 0) {
                _this.prevSlider(allBoxLength-1)
                currentSlideNumber = allBoxLength -1
                return;
            }
            currentSlideNumber--
            _this.prevSlider(currentSlideNumber)
           
        }
        //xu ly auto next image 
        setInterval(function() {
            nextBtn.click()
        }, 50000)
    },
    nextSlider: function(slideNumber) { 
        // đổi img 
        if(marginX > (allBoxLength-2)*20) {
            marginX = 0 

        } else {
            marginX += 20
        }
        slider.style = `transition: all 900ms cubic-bezier(0.48, 0.15, 0.18, 1)`
        slider.style = `transform: translateX(${-1*sizeBox*slideNumber - marginX}px)`

    },
     
    prevSlider: function(slideNumber) {
        //đổi img 
        if(marginX <= 0) {
            marginX = (allBoxLength-1)*20
        } else {
            marginX -= 20
        }
        slider.style = `transform: translateX(${-1*sizeBox*slideNumber - marginX}px)`
       
    },
    loadNumberImg: function() {
        if(items == 1) {
            sliderWrapper.style.width = `${sizeBox + 20}px`
        }else if(items == 2) {
            sliderWrapper.style.width = `${sizeBox*2 + 40}px`
        } else if(items == 3){
            sliderWrapper.style.width = `${sizeBox*3 + 40}px`
        } else if(items == 4){
            sliderWrapper.style.width = `${sizeBox*4 + 80}px`
        } 
    },
    loadBtnDot: function() {
        var itemDot = ''
        for(let i = 0; i < allBoxLength; i++) {
            itemDot  = itemDot + `<li class="item-dot"></li>`
        }
        listItemDot.innerHTML = itemDot
    },
    start: function() {
        //load img show
        this.loadNumberImg()
        this.loadBtnDot()
        //lang nghe/xu ly su kien nguoi dung
        this.handleEvent()
        //tai anh đầu tiên khi chạy ứng dung 
        //render giao dien nguoi dung
        this.render()
        
        
    }
}
app.start({

})