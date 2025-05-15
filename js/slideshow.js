class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelector('.slideshow-dots');
        this.currentSlide = 0;
        this.isPlaying = true;
        this.interval = 5000;
        this.timer = null;

        this.createDots();
        this.addControls();
        this.startShow();
    }

    createDots() {
        this.slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = `dot${i === 0 ? ' active' : ''}`;
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dots.appendChild(dot);
        });
    }

    addControls() {
        document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.next').addEventListener('click', () => this.nextSlide());
        document.querySelector('.pause').addEventListener('click', () => this.togglePlay());
    }

    goToSlide(index) {
        document.querySelector('.slide.active').classList.remove('active');
        document.querySelector('.dot.active').classList.remove('active');
        this.slides[index].classList.add('active');
        this.dots.children[index].classList.add('active');
        this.currentSlide = index;
    }

    nextSlide() {
        this.goToSlide((this.currentSlide + 1) % this.slides.length);
    }

    prevSlide() {
        this.goToSlide((this.currentSlide - 1 + this.slides.length) % this.slides.length);
    }

    togglePlay() {
        const btn = document.querySelector('.pause i');
        if (this.isPlaying) {
            this.stopShow();
            btn.className = 'fas fa-play';
        } else {
            this.startShow();
            btn.className = 'fas fa-pause';
        }
        this.isPlaying = !this.isPlaying;
    }

    startShow() {
        if (this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => this.nextSlide(), this.interval);
    }

    stopShow() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => new Slideshow());
