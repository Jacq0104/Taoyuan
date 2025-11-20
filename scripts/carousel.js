class Carousel {
  constructor() {
    this.currentIndex = 0;
    this.itemsPerView = 2; // 一次顯示2張圖
    this.slides = document.querySelectorAll('.carousel-slide');
    this.dotsContainer = document.querySelector('.carousel-dots');
    this.slidesContainer = document.querySelector('.carousel-slides');
    this.prevBtn = document.querySelector('.carousel-btn-prev');
    this.nextBtn = document.querySelector('.carousel-btn-next');
    
    if (this.slides.length === 0) return;
    
    this.totalPages = Math.ceil(this.slides.length / this.itemsPerView);
    this.init();
  }
  
  init() {
    // 創建指示點 - 每頁一個點
    for (let i = 0; i < this.totalPages; i++) {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => this.goToPage(i));
      this.dotsContainer.appendChild(dot);
    }
    
    // 綁定按鈕事件
    this.prevBtn.addEventListener('click', () => this.prevPage());
    this.nextBtn.addEventListener('click', () => this.nextPage());
    
    // 鍵盤控制
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevPage();
      if (e.key === 'ArrowRight') this.nextPage();
    });
    
    // 自動輪播（每 5 秒切換一次）
    setInterval(() => this.nextPage(), 5000);
  }
  
  goToPage(pageIndex) {
    this.currentIndex = pageIndex * this.itemsPerView;
    this.updateCarousel();
  }
  
  nextPage() {
    const nextIndex = this.currentIndex + this.itemsPerView;
    
    // 如果下一頁會超出範圍，循環回開始
    if (nextIndex >= this.slides.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex = nextIndex;
    }
    this.updateCarousel();
  }
  
  prevPage() {
    if (this.currentIndex >= this.itemsPerView) {
      this.currentIndex -= this.itemsPerView;
    } else {
      // 回到最後一頁
      this.currentIndex = Math.max(0, (this.totalPages - 1) * this.itemsPerView);
    }
    this.updateCarousel();
  }
  
  updateCarousel() {
    // 計算當前頁碼
    const currentPage = this.currentIndex / this.itemsPerView;
    
    // 計算偏移百分比
    // 因為每張圖是 50% 寬度，每頁滑動 100%（2張圖）
    const offsetPercent = currentPage * 100;
    this.slidesContainer.style.transform = `translateX(-${offsetPercent}%)`;
    
    // 更新指示點
    const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      if (index === currentPage) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
    
    // 除錯：打印當前狀態
    console.log(`Page: ${currentPage + 1}/${this.totalPages}, Index: ${this.currentIndex}, Slides: ${this.slides.length}`);
  }
}

// 頁面加載完成後初始化輪播
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});
