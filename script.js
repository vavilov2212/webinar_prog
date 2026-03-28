/* Logic for The Lab.js Static Site */

const translations = {
    en: {
        nav: {
            syllabus: "The Syllabus",
            notes: "Lab Notes",
            specimens: "Specimens",
            join: "Join the Cohort",
            start: "Start Experiment",
        },
        hero: {
            badge: "Cohort Alpha v1.0.1",
            title: "Code Your First",
            titleAccent: "Masterpiece.",
            description: "Step into the digital sanctum where logic meets alchemy. Transmute raw syntax into living, breathing web experiences through our high-intensity JavaScript immersion.",
            ctaPrimary: "Start Experiment",
            ctaSecondary: "View Syllabus",
            nodeLabel: "Process Node",
        },
        foundations: {
            title: "The Alchemist's Foundation",
            description: "We don't teach frameworks. We teach the elemental forces that govern the digital realm.",
            card1: {
                tag: "01. Logic Lens",
                title: "Seeing the Invisible",
                desc: "Develop the cognitive ability to decompose complex problems into atomic, logical operations before a single line is written.",
            },
            card2: {
                tag: "02. Syntax as Soil",
                title: "Deep Rooted Code",
                desc: "Master the primitive architecture of JavaScript. Learn how memory, execution contexts, and closures create the fertile ground for apps.",
            },
            card3: {
                tag: "03. Digital Bloom",
                title: "Organic Emergence",
                desc: "Orchestrate the final synthesis. Watch your logic blossom into high-fidelity user interfaces that feel alive and responsive.",
            },
        },
        gallery: {
            tag: "// Laboratory Results",
            title: "Specimen Gallery",
            desc: "Live observations from previous experiments in digital architecture.",
            subjects: {
                fluid: "Fluid Dynamics v1",
                neural: "Neural Topology",
                reactive: "Reactive Core",
                logic: "Logic Gate Beta",
            }
        },
        form: {
            badge: "LIMITED SLOTS",
            title: "The Lab Pass",
            subtitle: "Application for Alchemy Cohort Alpha",
            nameLabel: "Alchemist Name",
            namePlaceholder: "EX: ARIC_VOLLMER",
            emailLabel: "Signal Channel (Email)",
            emailPlaceholder: "CODE@THELAB.JS",
            expLabel: "Experience Index",
            expLevels: ["Novice", "Initiate", "Artisan", "Expert"],
            intentLabel: "Manifesto / Intent",
            intentPlaceholder: "DESCRIBE YOUR DIGITAL AMBITIONS...",
            submit: "Secure Passage",
            footer: "By submitting, you agree to the laws of digital alchemy.",
        },
        footer: {
            tagline: "Alchemy in Code.",
            links: ["Syllabus", "Privacy", "Terms", "Changelog"],
        }
    },
    ru: {
        nav: {
            syllabus: "Программа",
            notes: "Заметки Лаборатории",
            specimens: "Образцы",
            join: "Вступить в Когорту",
            start: "Начать Эксперимент",
        },
        hero: {
            badge: "Когорта Альфа v1.0.1",
            title: "Создай Свой Первый",
            titleAccent: "Шедевр.",
            description: "Шагните в цифровое святилище, где логика встречается с алхимией. Превратите сырой синтаксис в живые веб-интерфейсы через наше интенсивное погружение в JavaScript.",
            ctaPrimary: "Начать Эксперимент",
            ctaSecondary: "Программа",
            nodeLabel: "Узел Процесса",
        },
        foundations: {
            title: "Основы Алхимика",
            description: "Мы не учим фреймворкам. Мы учим стихийным силам, которые управляют цифровым миром.",
            card1: {
                tag: "01. Линза Логики",
                title: "Видеть Невидимое",
                desc: "Развивайте когнитивную способность разбивать сложные задачи на атомарные логические операции еще до написания первой строки кода.",
            },
            card2: {
                tag: "02. Синтаксис как Почва",
                title: "Глубокие Корни Кода",
                desc: "Освойте примитивную архитектуру JavaScript. Узнайте, как память, контексты выполнения и замыкания создают плодородную почву для приложений.",
            },
            card3: {
                tag: "03. Цифровое Цветение",
                title: "Органическое Появление",
                desc: "Оркеструйте финальный синтез. Наблюдайте, как ваша логика расцветает в высокотехнологичные интерфейсы, которые кажутся живыми и отзывчивыми.",
            },
        },
        gallery: {
            tag: "// Результаты Лаборатории",
            title: "Галерея Образцов",
            desc: "Живые наблюдения из предыдущих экспериментов в цифровой архитектуре.",
            subjects: {
                fluid: "Динамика Жидкости v1",
                neural: "Нейронная Топология",
                reactive: "Реактивное Ядро",
                logic: "Логический Вентиль Бета",
            }
        },
        form: {
            badge: "МЕСТ ОГРАНИЧЕНО",
            title: "Пропуск в Лабораторию",
            subtitle: "Заявка в Когорту Алхимии Альфа",
            nameLabel: "Имя Алхимика",
            namePlaceholder: "ПРИМЕР: АРИК_ФОЛЛМЕР",
            emailLabel: "Канал Связи (Email)",
            emailPlaceholder: "CODE@THELAB.JS",
            expLabel: "Индекс Опыта",
            expLevels: ["Новичок", "Посвященный", "Мастер", "Эксперт"],
            intentLabel: "Манифест / Намерения",
            intentPlaceholder: "ОПИШИТЕ ВАШИ ЦИФРОВЫЕ АМБИЦИИ...",
            submit: "Получить Доступ",
            footer: "Отправляя заявку, вы соглашаетесь с законами цифровой алхимии.",
        },
        footer: {
            tagline: "Алхимия в Коде.",
            links: ["Программа", "Приватность", "Условия", "Изменения"],
        }
    }
};

let currentLang = 'en';

function getTranslation(path, lang) {
    return path.split('.').reduce((obj, key) => obj && obj[key], translations[lang]);
}

function updateContent() {
    const t = translations[currentLang];
    
    // Update elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
        const path = el.getAttribute('data-t');
        const translation = getTranslation(path, currentLang);
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });

    // Update special elements
    document.getElementById('lang-flag').textContent = currentLang === 'en' ? '🇺🇸' : '🇷🇺';
    document.getElementById('lang-text').textContent = currentLang === 'en' ? 'EN' : 'RU';
    document.getElementById('lang-toggle').title = currentLang === 'en' ? 'Switch to Russian' : 'Переключить на английский';

    // Update Foundations Title (with <br>)
    const foundationsTitle = document.getElementById('foundations-title');
    if (foundationsTitle) {
        const title = t.foundations.title;
        foundationsTitle.innerHTML = title.replace('Foundation', '<br>Foundation').replace('Основы', 'Основы<br>');
    }

    // Update Subject labels in Gallery
    document.querySelectorAll('.subject-label').forEach(el => {
        el.textContent = currentLang === 'en' ? 'Subject' : 'Предмет';
    });

    // Re-inject Experience Levels
    const expLevelsContainer = document.getElementById('exp-levels');
    if (expLevelsContainer) {
        expLevelsContainer.innerHTML = '';
        t.form.expLevels.forEach((level, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = `flex-shrink-0 px-4 py-2 border text-[10px] md:text-xs font-mono uppercase transition-all ${idx === 1 ? "bg-primary-container/20 border-primary text-primary" : "bg-surface-container-high border-outline-variant text-on-surface-variant hover:border-primary/50"}`;
            btn.textContent = level;
            expLevelsContainer.appendChild(btn);
        });
    }

    // Re-inject Footer Links
    const footerLinksContainer = document.getElementById('footer-links');
    if (footerLinksContainer) {
        footerLinksContainer.innerHTML = '';
        t.footer.links.forEach(link => {
            const a = document.createElement('a');
            a.href = '#';
            a.className = "font-headline text-xs tracking-widest uppercase text-on-surface/40 hover:text-primary transition-colors nav-link-effect";
            a.textContent = link;
            footerLinksContainer.appendChild(a);
        });
    }

    // Re-initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    updateContent();
});

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    
    // Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
