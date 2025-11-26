class FishCarousel {
  constructor(container) {
    this.container = container;
    this.slides = container.querySelectorAll('.carousel-slide');
    this.slidesContainer = container.querySelector('.carousel-slides');
    this.currentPage = 0;
    this.itemsPerView = 1;
    this.totalPages = Math.ceil(this.slides.length / this.itemsPerView);
    
    this.init();
  }

  init() {
    this.updateCarousel();
    this.setupButtons();
    this.startAutoPlay();
  }

  setupButtons() {
    const prevBtn = this.container.querySelector('.carousel-btn.prev');
    const nextBtn = this.container.querySelector('.carousel-btn.next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevPage());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextPage());
  }

  nextPage() {
    this.currentPage = (this.currentPage + 1) % this.totalPages;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  prevPage() {
    this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  updateCarousel() {
    const offsetPercent = this.currentPage * 100;
    this.slidesContainer.style.transform = `translateX(-${offsetPercent}%)`;
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.nextPage(), 6000);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}

// 初始化所有 carousel（支援多個）
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.fish-carousel').forEach(carousel => {
    new FishCarousel(carousel);
  });
});

