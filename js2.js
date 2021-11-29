//chua lam dc
//neu mới bấm next or prev thì set time auto = 0
// set number img show and move
//set margin when img move

const  $= document.querySelector.bind(document);
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

responsiveWant = [
    {want:{item:allBoxLength,slideMove:1}},
    {want:{item:1,slideMove:1}},
    {want:{item:2,slideMove:2}},
    {want:{item:3,slideMove:3}},
    {want:{item:2,slideMove:2}},
]

const yourWant = responsiveWant[1]
//logic tao lao
const sizeBox = allBox[0].offsetWidth
let currentSlideNumber = 0

const app = {
    
    render: function() {
        //render number img show
        if(yourWant == responsiveWant[0]) {
            sliderWrapper.style.width = `${sizeBox*allBoxLength}px`
        }else if(yourWant == responsiveWant[1]) {
            
            sliderWrapper.style.width = `${sizeBox}px`
        }else if(yourWant == responsiveWant[2]) {
            
            sliderWrapper.style.width = `${(sizeBox)*2}px`
        } else if(yourWant == responsiveWant[3]){
           
            sliderWrapper.style.width = `${sizeBox*3 }px`
        } else if(yourWant == responsiveWant[4]){
            
            sliderWrapper.style.width = `${sizeBox*4}px`
        } 
       
        //render list dot
        for(let i = 0; i < allBoxLength; i++) {
            const itemDot  = document.createElement('li')
            itemDot.classList.add('item-dot')
            listItemDot.appendChild(itemDot)

            itemDot.addEventListener('click', () => {
                this.nextSlider(i)
            })
        }
        //render class active to  fist li dot
        listItemDot.children[0].classList.add('active')
        //render class active to fist box
        allBox[0].classList.add('active')

        
    },
     //set margin left right box
     setMarginTop: function() {
        for(let i = 0; i <allBoxLength; i++ ){
            allBox[i].style =  `margin-top: 20px`  
        }  
    }
    ,
    handleEvent: function() {
        const _this = this
        //xu ly next image
        nextBtn.onclick = function() {
            if(currentSlideNumber >= allBoxLength -1 ) {
                _this.nextSlider(0)
                return;
            }
            currentSlideNumber++
            _this.nextSlider(currentSlideNumber)

        }
        //xu ly prev image
        prevBtn.onclick = function() {
            if(currentSlideNumber <= 0) {
                _this.prevSlider(allBoxLength-1)
                return;
            }
            currentSlideNumber--
            _this.prevSlider(currentSlideNumber)
           
        }
        //xu ly auto next image 
        // setInterval(function() {
        //     nextBtn.click()
        // }, 50000) 
        
       
    },
    nextSlider: function(slideNumber) { 
        slider.style = `transform: translateX(${-1*sizeBox*slideNumber }px)`
        currentSlideNumber = slideNumber

        this.moveActive()
    },
    prevSlider: function(slideNumber) {
        //đổi img 
        slider.style = `transform: translateX(${-1*sizeBox*slideNumber}px)`
        currentSlideNumber = slideNumber
        
        this.moveActive()

    },
    moveActive: function() {
        // check and add class active
        for(let i = 0; i <allBoxLength; i++) {
            if (listItemDot[i] !== currentSlideNumber && allBox[i] !== currentSlideNumber) {
                listItemDot.children[i].classList.remove('active')
                allBox[i].classList.remove('active')
            } 
            listItemDot.children[currentSlideNumber].classList.add('active')
            allBox[currentSlideNumber].classList.add('active')
        }
    },
    start: function() {
    
        //lang nghe/xu ly su kien nguoi dung
        this.handleEvent()
    
        //render giao dien nguoi dung
        this.render()
       
    }
}
app.start({

})