// Přepínání karet
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

// Časová osa akcí
const events = [
    {
        date: '2025-12-07',
        title: "Maraton Přehrady Shihmen",
        location: "Jih Přehrady Shihmen, Parkoviště",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/112967/480x360_articles-image-muxvamivpe2he8luoachqq.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/6423"
    },
    {
        date: '2025-12-31',
        title: "2026 Taoyuan ON AIR Silvestrovský Galakoncert",
        location: "Rakuten Taoyuan Baseball Stadium",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/113314/480x360_articles-image-tq3dhtlqpeus7ib5thqtbw.jpg",
        link: "https://travel.tycg.gov.tw/zh-tw/event/calendardetail/5230"
    },
    {
        date: '2026-03-01',
        title: "Výstava IP Ilustrací",
        location: "Chung Yuan Cultural And Creative Park",
        image_path: "https://travel.tycg.gov.tw/content/images/articles/113308/480x360_articles-image-npssbnlg706ualkn9bt-sq.jpg",
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
                <img class="card-image" src="${e.image_path}" />
                <h3 class="card-title">${e.title}</h3>
                <p class="card-date">${e.date}</p>
                <p class="card-location">${e.location}</p>
                <a class="card-btn" href="${e.link}" target="_blank">Další Informace</a>
            </div>
        `;
        container.appendChild(item);
    });

    reveal();
}

// Přepínání roku akcí
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

// Seznam nejnovějších zpráv
const news = [
    {
        "title": "Festiva Daxi suchého tofua odložen na 22.-23. listopadu; Banket pro sto osob stále probíhá 15. listopadu",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6630",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113080/480x360_articles-image-erakh2ph5ewyhdpx3bolfq.jpg"
    },
    {
        "title": "Město Taoyuan Prohloubuje Vzdělávací Cestovní Ruch Partnerstvím s Agenturou Nippon Travel",
        "date": "2025-11-28",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6645",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113327/480x360_articles-image-gves-gpzkuec0md_z0tyvw.jpg"
    },
    {
        "title": "Silvestr Taoyuan: Vivian Hsu Oznámena jako Exkluzivní Zahajovací Čin",
        "date": "2025-11-27",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6641",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113315/480x360_articles-image-ou_hmdhlzuocslrwohysja.jpg"
    },
    {
        "title": "Stánek Cestovního Ruchu Taoyuan na Exposu Marathonu Kóbe 2025 Posiluje Vazby Sportovního Cestovního Ruchu",
        "date": "2025-11-17",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6634",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113176/480x360_articles-image-o83aqmn5a06jbfzqr__roq.jpg"
    },
    {
        "title": "Cihu Retro Chic Light/Water Shows Pokračují 13. listopadu; Open-Air Kino Debutuje Tento Víkend",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6629",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113146/480x360_articles-image-fa1drb2aqkolmvczwm017a.jpg"
    },
    {
        "title": "Nebeská Stezka Xiaowulai & Horká Pramen Yunei Řeky Otevřeny Odpolednem; Všechny Lokality Připraveny do 10:00",
        "date": "2025-11-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6627",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113077/480x360_articles-image-o_ejgzftzuycu1wbjooe7w.jpg"
    },
    {
        "title": "Cestovní Ruch Taoyuan se Připravuje na Tajfun Fung-Wong",
        "date": "2025-11-10",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6625",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113074/480x360_articles-image-wj4o1nykbkcmvq2g619nxa.jpg"
    },
    {
        "title": "ITF Taipei Travel Fair: Shuhua Tours Taoyuan Spouští Mise, Dárky & Zážitky",
        "date": "2025-11-07",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6618",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113047/480x360_articles-image-pfadu27ifugjt43saqo6sw.jpg"
    },
    {
        "title": "2025 Taoyuan Halloween City Přitáhne 1,08 Miliónu Návštěvníků",
        "date": "2025-11-04",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6611",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/113001/480x360_articles-image-mx0z4qr6ceubr5k5izczoa.jpg"
    },
    {
        "title": "2025 Taoyuan Halloween City: Pavoučí Démon Hrad Otevřen! Lovecká Pokladů Čeká",
        "date": "2025-10-24",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6594",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112937/480x360_articles-image-ass0dgujvew9yoyesrqipa.jpg"
    },
    {
        "title": "Taoyuan Halloween City: Informace o Řízení Provozu & Přepravě",
        "date": "2025-10-20",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6582",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112812/480x360_articles-image-bbkrgygvlegfifo3fkiabq.jpg"
    },
    {
        "title": "Cihu Golden Music Zdobí Noci Dvojí Desítky V Taoyuanu",
        "date": "2025-10-09",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6570",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112607/480x360_articles-image-mdkoikytt0kuafqiam_aaa.jpg"
    },
    {
        "title": "K-POP Hvězda Yeh Shuhua Jmenována Ambasadorkou Cestovního Ruchu Taoyuan",
        "date": "2025-10-08",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6568",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112596/480x360_articles-image-flvjfjxrlkackqmtvv5gkq.jpg"
    },
    {
        "title": "Taoyuan Cihu Retro Chic Zahajuje Středoautumnní Festival s Tancem Vody & Light Show",
        "date": "2025-10-05",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6564",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "2025 Cihu Retro Chic Středoautumnní Festivální Spuštění: Základní Informace o Provozu",
        "date": "2025-10-03",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6562",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112572/480x360_articles-image-t80oiknsmu-q2bpvlo1tww.jpg"
    },
    {
        "title": "Nejlepší Místa pro Pozorování Středoautumnního Měsíce v Taoyuanu",
        "date": "2025-09-30",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6555",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112457/480x360_articles-image-mxcqqna2fk2aqpmrzpi-5g.jpg"
    },
    {
        "title": "Taoyuan Cihu Retro Chic: Osm Zvláštností Podzimního Festivalu",
        "date": "2025-09-24",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6552",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112409/480x360_articles-image-lzwmen_2meoi5o39gqq15w.jpg"
    },
    {
        "title": "Taoyuan Pearl Coast Smart Upgrade: Vytváření Nových Cestovních Zážitků od Pobřeží po Mrak",
        "date": "2025-09-18",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6543",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112361/480x360_articles-image-fuz_v5m57ewsrhjmd56fug.jpg"
    },
    {
        "title": "Taoyuan Hostí První Prezentaci Cestovního Ruchu Osaky, Zaměřenou na Trh Kansai",
        "date": "2025-09-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6538",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112144/480x360_articles-image-rnjjjlkhou6v8a407u7esq.jpg"
    },
    {
        "title": "Taoyuan Prohloubuje Japonský Cestovní Push: Partnerství s Kóbe & Osakou pro Cestovatele Kansai",
        "date": "2025-09-12",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6537",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/112122/480x360_articles-image-x9moy96_j0umbcsjii70bq.jpg"
    },
    {
        "title": "Taoyuan Tourism Bureau Propaguje Různé Zážitky v Da Nangu a Ho Chi Minhu, Vietnam",
        "date": "2025-09-08",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6531",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111745/480x360_articles-image-7kx5k1tp7esnd17aapc4nq.jpg"
    },
    {
        "title": "Beyond Music: Úplný Itinerář pro Taoyuan Pearl Coast Seabreeze Journey (8/29-8/31) Odhalen",
        "date": "2025-08-27",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6524",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111697/480x360_articles-image-bi0dyljwyee9mzw-8wxzdq.jpg"
    },
    {
        "title": "Průvodce Dopravou pro Mezinárodní Hudební Festival Taoyuan Pearl Coast (8/29-8/31)",
        "date": "2025-08-25",
        "link": "https://travel.tycg.gov.tw/zh-tw/event/news/6514",
        "srcPath": "https://travel.tycg.gov.tw/content/images/articles/111664/480x360_articles-image-nipwgphwe0ie7bjcwno5ra.jpg"
    },
    {
        "title": "Koncert Nejblíže Světu: 2025 Taoyuan Pearl Coast Mezinárodní Hudební Festival Debutuje!",
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

