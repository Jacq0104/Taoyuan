class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="site-header">
                <div class="header-wrap">
                    <a class="brand" href="index.html" aria-label="Taoyuan Home">
                        <span class="brand-logo" aria-hidden="true">
                        <img src="assets/images/Logo.png" alt="桃園市LOGO">
                        </span>
                        <span class="brand-title">Taoyuan • 桃園</span>
                    </a>
                    <nav class="main-nav" aria-label="Global">
                        <ul>
                        <li><a href="index.html">首頁</a></li>
                        <li><a href="news.html">新聞/活動</a></li>
                        <li><a href="history.html">歷史/文化</a></li>
                        <li><a href="sights.html">景點</a></li>
                        <li><a href="food.html">美食</a></li>
                        <li><a href="services.html">服務</a></li>
                        <li><a href="contact.html">聯絡</a></li>
                        </ul>
                        <div class="language-switcher">
                        <a href="index.html" class="lang-btn active">繁中</a>
                        <a href="en/index.html" class="lang-btn">EN</a>
                        <a href="cs/index.html" class="lang-btn">CS</a>
                        </div>
                    </nav>
                </div>
            </header>
        `;
        this.setActiveNavLink();
    }

    setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('.main-nav a');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}

customElements.define('site-header', HeaderComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-wrap">
            <div>
                <strong>Taoyuan • 桃園</strong><br>
                山海相連的國門城市
            </div>
            <div>
                <a href="contact.html">聯絡我們</a> ｜ <a href="news.html">活動與新聞</a> ｜ <a href="services.html">旅遊服務</a>
            </div>
            <small>© 2025 Taoyuan City Student Project. 圖片僅供學術用途。</small>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', FooterComponent);