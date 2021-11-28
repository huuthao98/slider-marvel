const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
slidePerScreen  =3
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const listImg =  $('.img-list')
const listDot = $('.list-dot')
const liDot = $('.li-dot')
const app = {
    currentIndex: 0,
    
    images: [
        {image: './pictures/11.jpeg'},
        {image: './pictures/12.jpeg'},
        {image: './pictures/13.jpeg'},
        {image: './pictures/14.jpeg'}
        
    ],

    render: function() {

        //render list img
        // const htmlListImg = this.images.map((image) => {
        //     return `
        //     <div class="img-show" style="background-image: url('${image.path}')"></div>
        //     `
        // })
        // listImg.innerHTML = htmlListImg.join('');
        //render list dot
        const htmlListDot = this.images.map((image, index) => {
            return `
            <li class="li-dot ${index === this.currentIndex ? 'active' : ''}" data-index="${index}" ></li>
            `
        })
        listDot.innerHTML = htmlListDot.join('');

    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentImage', {
            get: function() {
                return this.images[this.currentIndex]
            }
        })
    },
    handleEvent: function() {
        const _this = this

        //xu ly next image
        nextBtn.onclick = function() {
            _this.nextImage()
            _this.render()
        }
        //xu ly prev image
        prevBtn.onclick = function() {
            _this.prevImage()
            _this.render()
        }
        //xu ly auto next image 
        setInterval(function() {
            nextBtn.click()
        }, 10000)
        // xu ly click vào list dot
        listDot.onclick = function(e) {
        if(e.target.closest('.li-dot')) {
                _this.currentIndex = Number(e.target.closest('.li-dot').dataset.index)
                _this.loadCurrentImage()
                _this.render()
            }

        }
    },
    nextImage: function() {
        this.currentIndex++ 
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0
        }
        this.loadCurrentImage()
    },
    prevImage: function() {
        this.currentIndex-- 
        if (this.currentIndex < 0 ) {
            this.currentIndex = this.images.length -1
        }
        this.loadCurrentImage()
    },
    loadCurrentImage: function() {
        const imgShow = $('.img-show')
        imgShow.style.backgroundImage = `url('${this.currentImage.image}')`
    },

    
    start: function() {
        // dinh nghia thuoc tinh
        this.defineProperties()
        //lang nghe/xu ly su kien nguoi dung
        this.handleEvent()
        //tai anh đầu tiên khi chạy ứng dung 
        this.loadCurrentImage()
    
        //render giao dien nguoi dung
        this.render()
        
        
    }
}
app.start({

})