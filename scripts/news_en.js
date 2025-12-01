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
        date: '07.12.2025',
        title: "Shimen Reservoir Marathon",
        location: "Shimen Reservoir South Parking Lot",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/112967/480x360_articles-image-muxvamivpe2he8luoachqq.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/6423"
    },
    {
        date: '31.12.2025',
        title: "2026 Taoyuan ON AIR New Year's Eve Party",
        location: "Rakuten Taoyuan Baseball Stadium",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/113314/480x360_articles-image-tq3dhtlqpeus7ib5thqtbw.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/5230"
    },
    {
        date: '01.03.2026',
        title: "IP Illustration Exhibition",
        location: "Chung Yuan Cultural And Creative Park",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/113308/480x360_articles-image-npssbnlg706ualkn9bt-sq.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/6639"
    }
];

const container = document.getElementById('timeline-container');

function renderEvents(year) {
    container.innerHTML = "";
    const filtered = events.filter(e => {
        const eventYear = e.date.slice(-4);
        return eventYear === year.toString();
    });

    filtered.forEach((e) => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-line"></div>
            <div class="timeline-card">
                <img class="card-image" src="${e.image_path}" />
                <h3 class="card-title">${e.title}</h3>
                <p class="card-date">${e.date}</p>
                <p class="card-location">${e.location}</p>
                <a class="card-btn" href="${e.link}" target="_blank">Learn More</a>
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
        "title": 'Daxi Dried Tofu Festival Postponed to Nov 22-23; "Hundred Person Banquet" Still On Nov 15',
        "date": "12.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6630",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113080/480x360_articles-image-erakh2ph5ewyhdpx3bolfq.jpg"
    },
    {
        "title": "Taoyuan City Deepens Education Tourism with Nippon Travel Agency Partnership",
        "date": "28.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6645",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113327/480x360_articles-image-gves-gpzkuec0md_z0tyvw.jpg"
    },
    {
        "title": "️Taoyuan New Year's Eve: Vivian Hsu Announced as Exclusive Opening Act",
        "date": "27.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6641",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113315/480x360_articles-image-ou_hmdhlzuocslrwohysja.jpg"
    },
    {
        "title": "Taoyuan Tourism Booth at 2025 Kobe Marathon Expo Enhances Sports Tourism Ties",
        "date": "17.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6634",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113176/480x360_articles-image-o83aqmn5a06jbfzqr__roq.jpg"
    },
    {
        "title": 'Cihu "Retro Chic" Light/Water Shows Resume Nov 13; Open-Air Cinema Debuts This Weekend',
        "date": "12.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6629",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113146/480x360_articles-image-fa1drb2aqkolmvczwm017a.jpg"
    },
    {
        "title": "Xiao Wulai Skywalk & Yunei River Hot Spring Open Afternoons; All Sites Ready by 10 AM",
        "date": "12.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6627",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113077/480x360_articles-image-o_ejgzftzuycu1wbjooe7w.jpg"
    },
    {
        "title": "Taoyuan Tourism Prepares Ahead for Typhoon Fung-Wong",
        "date": "10.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6625",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113074/480x360_articles-image-wj4o1nykbkcmvq2g619nxa.jpg"
    },
    {
        "title": 'ITF Taipei Travel Fair: "Shuhua Tours Taoyuan" Launches Missions, Gifts & Experiences',
        "date": "07.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6618",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113047/480x360_articles-image-pfadu27ifugjt43saqo6sw.jpg"
    },
    {
        "title": "\"2025 Taoyuan Halloween City 🎃Spider Demon Castle🕷️\" Attracts 1.08 Million Visitors",
        "date": "04.11.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6611",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113001/480x360_articles-image-mx0z4qr6ceubr5k5izczoa.jpg"
    },
    {
        "title": "\"2025 Taoyuan Halloween City: Spider Demon Castle\" Opens! Treasure Hunt Awaits",
        "date": "24.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6594",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112937/480x360_articles-image-ass0dgujvew9yoyesrqipa.jpg"
    },
    {
        "title": "Taoyuan Halloween City: Traffic Control & Shuttle Information for Commercial District Events",
        "date": "20.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6582",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112812/480x360_articles-image-bbkrgygvlegfifo3fkiabq.jpg"
    },
    {
        "title": "Cihu Golden Music Brightens Double Ten Holiday Nights in Taoyuan",
        "date": "09.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6570",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112607/480x360_articles-image-mdkoikytt0kuafqiam_aaa.jpg"
    },
    {
        "title": "K-POP Star Yeh Shuhua Named Taoyuan Tourism Ambassador; Interprets \"Taoyuan Sensibility\"",
        "date": "08.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6568",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112596/480x360_articles-image-flvjfjxrlkackqmtvv5gkq.jpg"
    },
    {
        "title": "Taoyuan's Cihu \"Retro Chic\" Kicks Off Mid-Autumn Festival with Water Dance & Light Show",
        "date": "05.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6564",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "【2025 Cihu Retro Chic】Mid-Autumn Festival Launch: Essential Traffic Information",
        "date": "03.10.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6562",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "Best Mid-Autumn Moon-Gazing Spots in Taoyuan",
        "date": "30.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6555",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112457/480x360_articles-image-mxcqqna2fk2aqpmrzpi-5g.jpg"
    },
    {
        "title": "Taoyuan's Cihu \"Retro Chic\": Eight Highlights of the Autumn Festival",
        "date": "24.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6552",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112409/480x360_articles-image-lzwmen_2meoi5o39gqq15w.jpg"
    },
    {
        "title": "Taoyuan Pearl Coast Smart Upgrade: Creating New Travel Experiences from Coast to Cloud",
        "date": "18.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6543",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112361/480x360_articles-image-fuz_v5m57ewsrhjmd56fug.jpg"
    },
    {
        "title": "Taoyuan Hosts First Osaka Tourism Presentation to Target Kansai Market",
        "date": "12.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6538",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112144/480x360_articles-image-rnjjjlkhou6v8a407u7esq.jpg"
    },
    {
        "title": "Taoyuan Deepens Japan Tourism Push: Partnering with Kobe & Osaka for Kansai Travelers",
        "date": "12.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6537",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112122/480x360_articles-image-x9moy96_j0umbcsjii70bq.jpg"
    },
    {
        "title": "Taoyuan Tourism Bureau Promotes Diverse Experiences in Da Nang and Ho Chi Minh City, Vietnam",
        "date": "08.09.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6531",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111745/480x360_articles-image-7kx5k1tp7esnd17aapc4nq.jpg"
    },
    {
        "title": "Beyond Music: Full Itinerary for Taoyuan Pearl Coast \"Seabreeze Journey\" (8/29-8/31) Revealed",
        "date": "27.08.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6524",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111697/480x360_articles-image-bi0dyljwyee9mzw-8wxzdq.jpg"
    },
    {
        "title": "Transportation Guide for the Taoyuan Pearl Coast International Music Festival (8/29-8/31)",
        "date": "25.08.2025",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6514",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111664/480x360_articles-image-nipwgphwe0ie7bjcwno5ra.jpg"
    },
    {
        "title": "The Concert Closest to the World: 2025 Taoyuan Pearl Coast International Music Festival Debuts!",
        "date": "19.08.2025",
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