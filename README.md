## Authors / 作者
- Si Yu Chen（Brno login: xchensi00）
- Yi Hsuan Kuo（Brno login: xkuoyih00）

# Taoyuan City Travel Guide Website (English Version)

## 1. Project Overview

This project is a **city introduction and travel guide website** for Taoyuan, Taiwan.  
It showcases Taoyuan’s **natural scenery, history and Hakka culture, local food, transportation and tourism services**, and supports **Traditional Chinese, English and Czech**.

## 2. Main Features

- **Full page set**
  - `index.html`: Home – hero section, image carousel, quick links.
  - `news.html`: News & events page powered by JSON data.
  - `history.html`: History timeline and Hakka culture.
  - `sights.html`: Key attractions such as Lalashan, Xiaowulai, Shihmen Reservoir, Daxi Old Street, Zhongzhen New Village, Taoyuan Airport.
  - `food.html`: Local food including live fish cuisine, Yunnan food in Zhongzhen, Hakka dishes, Daxi tofu and peanut candy.
  - `services.html`: Transportation, visitor services, migrant support, tourism info.
  - `contact.html`: Contact information and useful phone numbers.

- **Multi-language structure**
  - Root folder: Traditional Chinese pages.
  - `/en/`: English versions of all pages.
  - `/cs/`: Czech versions of all pages.
  - Shared header and footer are implemented as custom elements `<site-header>` and `<site-footer>` in `scripts/shared-component.js`.
  - `scripts/language-switcher.js` handles language buttons, URL mapping between languages, and preference storage.

- **Interactive UI and data-driven content**
  - Carousels implemented with `carousel.js` and `fish-carousel.js`.
  - News & events are loaded from a JSON source (`assets/events.json` in the original design) by `news.js`, `news_en.js`, `news_cs.js`.
  - Animated blob background (`.bg-blobs` and `.blob-1` ~ `.blob-4`) uses pure CSS animations with blur and low opacity, fixed behind all content.

## 3. File & Folder Structure

See the tree diagram in the Chinese section above for a full overview.  
Key folders:

- `css/style.css`: global styles, layout system, responsive breakpoints, animated background.
- `scripts/`: shared components, language switcher, carousels, and news rendering logic.
- `assets/images/`: images for attractions, food, and branding (`Logo.png`).

## 4. Technology Highlights

- **HTML5 semantic structure** with `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- **Responsive layout** using CSS Grid and Flexbox, plus media queries for different screen widths.
- **Design system** based on Taoyuan city brand colors with CSS variables (`--brand`, `--accent-blue`, `--accent-yellow`, `--accent-green`, etc.), consistent border-radius and shadow tokens.
- **No CSS framework** – all styling is implemented with hand-written CSS to meet the course requirements.

## 5. Usage & Notes

1. Open `landingPage.html` or `index.html` in a modern browser to view the site.
2. For JSON-based features (news/events), running through a simple local server is recommended.
3. All images and media in this project are for academic use only and should be replaced or licensed properly before any public deployment.

---

# 桃園城市展示網站｜Taoyuan City Travel Guide

## 一、專案概述（繁體中文版）

這是一個以「桃園 Taoyuan」為主題的旅遊導覽網站，讓使用者可以從**自然景觀、歷史文化、美食、旅遊服務**等面向，快速認識桃園這座「山海之間的國門城市」。  
網站同時支援 **繁體中文／英文／捷克文** 三種語言，方便不同背景的使用者瀏覽。

## 二、網站主要特色（繁體）

- **完整的分頁導覽**
  - `index.html`：首頁－城市形象、輪播圖、快速導覽
  - `news.html`：新聞／活動／行事曆（由 `assets/events.json` 動態載入）
  - `history.html`：歷史沿革與客家文化介紹
  - `sights.html`：拉拉山、小烏來、石門水庫、大溪老街、忠貞新村、桃園機場等景點
  - `food.html`：活魚料理、忠貞新村雲南料理、大溪豆乾與花生糖、客家美食等
  - `services.html`：交通、旅遊諮詢、住宿與各類服務資訊
  - `contact.html`：聯絡資訊與服務窗口

- **三語版本與共用元件**
  - `/en/` 資料夾：英文版對應的七個分頁
  - `/cs/` 資料夾：捷克文版對應的七個分頁
  - 透過 Web Components 自訂元素 `<site-header>`、`<site-footer>`，由 `scripts/shared-component.js` 統一產生全站的導覽列與頁尾。
  - `scripts/language-switcher.js` 搭配 header 的語系按鈕，根據網址自動切換並記錄語言偏好。

- **互動與資料驅動內容**
  - 首頁與部分區塊使用 `scripts/carousel.js`、`scripts/fish-carousel.js` 製作圖片輪播。
  - `news.html`／`en/news.html`／`cs/news.html` 使用 `news.js`、`news_en.js`、`news_cs.js` 自 `assets/events.json` 讀取活動與新聞資料並渲染到畫面。

- **動畫背景與設計系統**
  - 全站加入可重複使用的 `.bg-blobs` 動態背景，3～4 個柔和的漸層圓形使用 CSS Animation 緩慢漂移，搭配 `filter: blur()`、`pointer-events: none`，不影響操作。
  - 透過 CSS 變數（如 `--brand`, `--accent-blue`, `--accent-yellow`, `--accent-green`）統一控制主色與陰影、圓角等設計。

## 三、檔案與目錄結構（繁體）

```text
Taoyuan/
├── landingPage.html          # 語言入口頁（連到中／英首頁）
├── index.html                # 繁體中文首頁
├── news.html                 # 繁中：新聞／活動
├── history.html              # 繁中：歷史／文化／客家
├── sights.html               # 繁中：景點介紹
├── food.html                 # 繁中：美食專區
├── services.html             # 繁中：旅遊與在地服務
├── contact.html              # 繁中：聯絡資訊
├── en/                       # 英文版所有分頁
│   ├── index.html
│   ├── news.html
│   ├── history.html
│   ├── sights.html
│   ├── food.html
│   ├── services.html
│   └── contact.html
├── cs/                       # 捷克文版所有分頁
│   ├── index.html
│   ├── news.html
│   ├── history.html
│   ├── sights.html
│   ├── food.html
│   ├── services.html
│   └── contact.html
├── css/
│   ├── style.css             # 全站共用樣式（含 RWD、動態背景、版面配置）
│   └── landingPage.css       # 語言入口頁樣式
├── scripts/
│   ├── shared-component.js   # `<site-header>`、`<site-footer>` 定義與導覽列／語系切換
│   ├── language-switcher.js  # 語系切換邏輯與偏好記錄
│   ├── carousel.js           # 首頁等一般輪播
│   ├── fish-carousel.js      # 活魚料理專區輪播
│   ├── news.js               # 繁中新聞／活動渲染
│   ├── news_en.js            # 英文新聞／活動渲染
│   └── news_cs.js            # 捷克文新聞／活動渲染
├── assets/
│   ├── images/               # 網站圖片（景點、美食、LOGO 等）
│   │   ├── Logo.png
│   │   ├── lalashan.png / xiaowulai.png / zhongzhen.jpg ...
│   │   └── README.md         # 圖片授權與來源說明
│   └── mountains.MP4         # 影片素材（如有使用）
└── README.md                 # 本說明文件（中英雙語）
```

## 四、技術與設計重點（繁體）

- **HTML5 語意化標籤**
  - 全站使用 `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` 等標籤，清楚區分導覽列、主內容、側邊欄與頁尾。
  - 重要內容（例如卡片、景點介紹）以 `article` 包裝，提升可讀性與可維護性。

- **CSS 版面與 RWD**
  - 以 `display: grid` 和 `display: flex` 建立多欄版面，例如 `.layout`, `.grid-2`, `.grid-3`, `.sidebar`。
  - 使用 Media Queries 在不同寬度（如 980px 以下）自動改成單欄或調整間距，以適配桌機／平板／手機。
  - 使用 CSS 變數統一控制色彩與圓角、陰影：`--brand`, `--accent-blue`, `--accent-yellow`, `--accent-green`, `--radius`, `--shadow` 等。

- **JavaScript／互動**
  - Web Components：`customElements.define('site-header', ...)` 與 `customElements.define('site-footer', ...)` 產生共用的導覽與頁尾。
  - Carousel：使用 `setInterval` 搭配左右按鈕與指示點，自動與手動切換圖片。
  - News：以 JSON 檔案為資料來源，依日期篩選並渲染活動／新聞列表。
  - 語言切換：根據目前網址判斷語系，並在切換時導到對應語言的同名頁面。

## 五、使用說明與注意事項（繁體）

1. 直接以瀏覽器打開根目錄的 `landingPage.html` 或 `index.html` 即可預覽網站。
2. 若要於本機完整測試 JSON 載入功能，建議透過簡單的本機伺服器（如 VS Code Live Server）開啟專案。
3. 本網站所有圖片與影片僅供課程與學術展示使用，實際發佈前請再次確認版權。

