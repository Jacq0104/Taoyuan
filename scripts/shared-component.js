class HeaderComponent extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isEnglish = currentPath.includes('/en/');
        const isCzech = currentPath.includes('/cs/');
        const pathPrefix = isEnglish || isCzech ? '../' : '';
        const logoPath = pathPrefix + 'assets/images/Logo.png';
        
        // Navigation items based on language
        let navItems, langSwitcher;
        
        if (isEnglish) {
            navItems = `
                <li><a href="index.html">Home</a></li>
                <li><a href="news.html">News/Events</a></li>
                <li><a href="history.html">History/Culture</a></li>
                <li><a href="sights.html">Attractions</a></li>
                <li><a href="food.html">Food</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
            `;
            langSwitcher = `
                <a href="../index.html" class="lang-btn">繁中</a>
                <a href="index.html" class="lang-btn active">EN</a>
                <a href="../cs/index.html" class="lang-btn">CS</a>
            `;
        } else if (isCzech) {
            navItems = `
                <li><a href="index.html">Domů</a></li>
                <li><a href="news.html">Novinky/Akce</a></li>
                <li><a href="history.html">Historie/Kultura</a></li>
                <li><a href="sights.html">Atrakce</a></li>
                <li><a href="food.html">Jídlo</a></li>
                <li><a href="services.html">Služby</a></li>
                <li><a href="contact.html">Kontakt</a></li>
            `;
            langSwitcher = `
                <a href="../index.html" class="lang-btn">繁中</a>
                <a href="../en/index.html" class="lang-btn">EN</a>
                <a href="index.html" class="lang-btn active">CS</a>
            `;
        } else {
            navItems = `
                <li><a href="index.html">首頁</a></li>
                <li><a href="news.html">新聞/活動</a></li>
                <li><a href="history.html">歷史/文化</a></li>
                <li><a href="sights.html">景點</a></li>
                <li><a href="food.html">美食</a></li>
                <li><a href="services.html">服務</a></li>
                <li><a href="contact.html">聯絡</a></li>
            `;
            langSwitcher = `
                <a href="index.html" class="lang-btn active">繁中</a>
                <a href="en/index.html" class="lang-btn">EN</a>
                <a href="cs/index.html" class="lang-btn">CS</a>
            `;
        }
        
        this.innerHTML = `
            <header class="site-header">
                <div class="header-wrap">
                    <a class="brand" href="${pathPrefix}index.html" aria-label="Taoyuan Home">
                        <span class="brand-logo" aria-hidden="true">
                        <img src="${logoPath}" alt="桃園市LOGO">
                        </span>
                        <span class="brand-title">Taoyuan • 桃園</span>
                    </a>
                    <nav class="main-nav" aria-label="Global">
                        <ul>
                        ${navItems}
                        </ul>
                        <div class="language-switcher">
                        ${langSwitcher}
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
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.setAttribute('aria-current', 'page');
            }
        });
    }
}

customElements.define('site-header', HeaderComponent);

class FooterComponent extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname;
        const isEnglish = currentPath.includes('/en/');
        const isCzech = currentPath.includes('/cs/');
        const pathPrefix = isEnglish || isCzech ? '../' : '';
        
        let footerContent, footerLinks, copyright;
        
        if (isEnglish) {
            footerContent = 'Gateway city connecting mountains and sea';
            footerLinks = `
                <a href="contact.html">Contact Us</a> ｜ <a href="news.html">Events & News</a> ｜ <a href="services.html">Tourism Services</a>
            `;
            copyright = '© 2025 Taoyuan City Student Project. Images for academic use only.';
        } else if (isCzech) {
            footerContent = 'Brána spojující hory a moře';
            footerLinks = `
                <a href="contact.html">Kontaktujte nás</a> ｜ <a href="news.html">Akce a novinky</a> ｜ <a href="services.html">Turistické služby</a>
            `;
            copyright = '© 2025 Taoyuan City Student Project. Obrázky pouze pro akademické účely.';
        } else {
            footerContent = '山海相連的國門城市';
            footerLinks = `
                <a href="contact.html">聯絡我們</a> ｜ <a href="news.html">活動與新聞</a> ｜ <a href="services.html">旅遊服務</a>
            `;
            copyright = '© 2025 Taoyuan City Student Project. 圖片僅供學術用途。';
        }
        
        this.innerHTML = `
        <footer>
            <div class="footer-wrap">
            <div>
                <strong>Taoyuan • 桃園</strong><br>
                ${footerContent}
            </div>
            <div>
                ${footerLinks}
            </div>
            <small>${copyright}</small>
            </div>
        </footer>
        `;
    }
}

customElements.define('site-footer', FooterComponent);