// 切換標籤
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

function activateTabBySelector(selector) {
    const target = document.querySelector(selector);
    if (!target) return;

    tabContents.forEach(tc => tc.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    target.classList.add('active');

    const activeTab = document.querySelector(`[data-tab-target="${selector}"]`);
    if (activeTab) activeTab.classList.add('active');
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const selectoe = tab.dataset.tabTarget;
        activateTabBySelector(selectoe);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;

    if (hash === '#event') {
        activateTabBySelector('#event');
    } else {
        activateTabBySelector('#news');
    }
});

// 活動時間軸 
const events = [
    {
        date: '2025-12-07',
        title: "石門水庫馬拉松",
        location: "石門水庫南苑停車場",
        image: "assets/images/marathon.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/6423"
    },
    {
        date: '2025-12-31',
        title: "2026桃園 ON AIR 跨年晚會",
        location: "樂天桃園棒球場",
        image: "assets/images/newYear.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/5230"
    },
    {
        date: '2026-03-01',
        title: "IP 插畫展",
        location: "中原文創園區",
        image: "assets/images/picture.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/6639"
    }
];

const container = document.getElementById('timeline-container');

function renderEvents(year) {
    container.innerHTML = "";
    const filtered = events.filter(e => e.date.startsWith(year.toString()));

    filtered.forEach((e) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-line"></div>
            <div class="timeline-card">
                <img class="card-image" src="${e.image}" />
                <h3 class="card-title">${e.title}</h3>
                <p class="card-date">${e.date}</p>
                <p class="card-location">${e.location}</p>
                <a class="card-btn" href="${e.link}" target="_blank">了解更多</a>
            </div>
        `;
        container.appendChild(item);
    });

    reveal();
}

// 切換活動年分
const years = [2025, 2026];
let currentYearIndex = 0;

const yearText = document.getElementById('year-text');
const prevYearBtn = document.getElementById('prev-year');
const nextYearBtn = document.getElementById('next-year');

function updateYear() {
    prevYearBtn.disabled = currentYearIndex === 0;
    nextYearBtn.disabled = currentYearIndex === years.length - 1;
}

prevYearBtn.addEventListener('click', () => {
    if (currentYearIndex > 0) {
        currentYearIndex--;
        const year = years[currentYearIndex];
        yearText.textContent = year;
        updateYear();
        renderEvents(year);
    }
});

nextYearBtn.addEventListener('click', () => {
    if (currentYearIndex < years.length - 1) {
        currentYearIndex++;
        const year = years[currentYearIndex];
        yearText.textContent = year;
        updateYear();
        renderEvents(year);
    }
});

renderEvents(years[currentYearIndex]);

function reveal() {
    document.querySelectorAll('.timeline-item').forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('show');
        }
    });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// 最新消息列表
const news = [
    {
        "title": "因應颱風影響，大溪豆干節延期至11月22、23日「百人豆干宴」15日如期登場",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6630",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113080/480x360_articles-image-erakh2ph5ewyhdpx3bolfq.jpg"
    },
    {
        "title": "桃園市政府攜手株式會社日本旅行，推動教育旅遊合作再升級",
        "date": "2025-11-28",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6645",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113327/480x360_articles-image-gves-gpzkuec0md_z0tyvw.jpg"
    },
    {
        "title": "️桃園跨年首波卡司亮相 Vivian Hsu徐若瑄驚喜獨家開場獻唱",
        "date": "2025-11-27",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6641",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113315/480x360_articles-image-ou_hmdhlzuocslrwohysja.jpg"
    },
    {
        "title": "桃園觀光設攤2025神戶馬拉松博覽會 雙城運動觀光推廣交流再升級",
        "date": "2025-11-17",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6634",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113176/480x360_articles-image-o83aqmn5a06jbfzqr__roq.jpg"
    },
    {
        "title": "「來慈湖 潮復刻」光環境、音樂光雕、水舞11月13日起恢復展演，本週末露天電影院登場",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6629",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113146/480x360_articles-image-fa1drb2aqkolmvczwm017a.jpg"
    },
    {
        "title": "小烏來天空步道與宇內溪溫泉下午開放，各景點上午環境整備10點全面啟用",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6627",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113077/480x360_articles-image-o_ejgzftzuycu1wbjooe7w.jpg"
    },
    {
        "title": "因應鳳凰颱風來襲　桃園觀光提前整備",
        "date": "2025-11-10",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6625",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113074/480x360_articles-image-wj4o1nykbkcmvq2g619nxa.jpg"
    },
    {
        "title": "ITF台北國際旅展「舒華遊桃園」! 多元體驗、多重好禮、全區任務全面開啟",
        "date": "2025-11-07",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6618",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113047/480x360_articles-image-pfadu27ifugjt43saqo6sw.jpg"
    },
    {
        "title": "「2025桃園萬聖城 🎃魔蛛古堡🕷️」 吸引108萬人次對完成尋寶之旅💰",
        "date": "2025-11-04",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6611",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113001/480x360_articles-image-mx0z4qr6ceubr5k5izczoa.jpg"
    },
    {
        "title": "「2025桃園萬聖城。魔蛛古堡」開城囉! 「魔蛛古堡寶藏箱」等你來尋寶",
        "date": "2025-10-24",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6594",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112937/480x360_articles-image-ass0dgujvew9yoyesrqipa.jpg"
    },
    {
        "title": "「桃園萬聖城」群魔亂舞鬧商圈，交通接駁及管制資訊搶先看！",
        "date": "2025-10-20",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6582",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112812/480x360_articles-image-bbkrgygvlegfifo3fkiabq.jpg"
    },
    {
        "title": "雙十連假遊桃園 慈湖金曲愈夜愈精彩",
        "date": "2025-10-09",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6570",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112607/480x360_articles-image-mdkoikytt0kuafqiam_aaa.jpg"
    },
    {
        "title": "K-POP巨星葉舒華擔任桃園觀光大使 回家演繹「桃園感性」引發國際共鳴",
        "date": "2025-10-08",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6568",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112596/480x360_articles-image-flvjfjxrlkackqmtvv5gkq.jpg"
    },
    {
        "title": "桃園「來慈湖 潮復刻」中秋連假開跑 水舞光雕點亮慈湖璀璨夜空",
        "date": "2025-10-05",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6564",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "【2025來慈湖・潮復刻】中秋連假正式登場，交通資訊一次看",
        "date": "2025-10-03",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6562",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "中秋賞月好去處 桃園最美月色一次看",
        "date": "2025-09-30",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6555",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112457/480x360_articles-image-mxcqqna2fk2aqpmrzpi-5g.jpg"
    },
    {
        "title": "桃園「來慈湖 潮復刻」 八大亮點共譜慈湖秋日盛會",
        "date": "2025-09-24",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6552",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112409/480x360_articles-image-lzwmen_2meoi5o39gqq15w.jpg"
    },
    {
        "title": "從海岸走向雲端~桃園珍珠海岸智慧升級！ 打造旅遊新體驗",
        "date": "2025-09-18",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6543",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112361/480x360_articles-image-fuz_v5m57ewsrhjmd56fug.jpg"
    },
    {
        "title": "桃園首度辦理大阪觀光推介會 攜業者推廣「桃園 旅的起點 即刻出發」魅力 開拓關西客源",
        "date": "2025-09-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6538",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112144/480x360_articles-image-rnjjjlkhou6v8a407u7esq.jpg"
    },
    {
        "title": "桃園市赴日推廣觀光再深化！ 攜手神戶、大阪開拓關西來台旅遊商機",
        "date": "2025-09-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6537",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112122/480x360_articles-image-x9moy96_j0umbcsjii70bq.jpg"
    },
    {
        "title": "桃園觀旅局前進越南峴港、胡志明市推廣桃園多元旅遊體驗",
        "date": "2025-09-08",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6531",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111745/480x360_articles-image-7kx5k1tp7esnd17aapc4nq.jpg"
    },
    {
        "title": "不只音樂節！8/29-8/31桃園珍珠海岸「海風之旅」超完美行程曝光",
        "date": "2025-08-27",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6524",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111697/480x360_articles-image-bi0dyljwyee9mzw-8wxzdq.jpg"
    },
    {
        "title": "享受最接近世界的音樂節！8/29-8/31桃園珍珠海岸國際音樂節交通攻略曝光",
        "date": "2025-08-25",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6514",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111664/480x360_articles-image-nipwgphwe0ie7bjcwno5ra.jpg"
    },
    {
        "title": "離世界最近音樂會2025桃園珍珠海岸國際音樂節震撼登場！",
        "date": "2025-08-19",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6505",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111636/480x360_articles-image-anyrfxhvrkcsnyyrpuzn1g.jpg"
    }
]

function renderNews() {
    const container = document.getElementById('newsList');

    news.forEach(item => {
        container.innerHTML += `
      <div class="news-card">
        <img src="${item.srcPath}" class="news-image" />
        <div class="news-content">
            <a href="${item.link}" target="_blank" class="news-title">${item.title}</a>
            <div class="news-date">${item.date}</div>
        </div>
      </div>
    `;
    });
}
renderNews();