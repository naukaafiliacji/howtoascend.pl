const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

function updateHeader() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 18);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("open");
        toggle.classList.toggle("open", isOpen);
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggle.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const answer = item.querySelector(".faq-answer");
        const isOpen = item.classList.toggle("open");

        button.setAttribute("aria-expanded", String(isOpen));
        answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
    });
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((element) => {
    revealObserver.observe(element);
});

// Dual business-mode homepage
(() => {
    const body = document.querySelector('.dual-home');
    if (!body) return;

    const modes = {
        dropshipping: {
            heroKicker: 'Dropshipping & obsługa klienta',
            heroTitle: 'Wspieramy Twój biznes na każdym etapie',
            heroLead: 'Kompleksowe wsparcie w modelu dropshipping — od realizacji zamówień po obsługę klienta. Ty rozwijasz markę, my zajmujemy się resztą.',
            heroBenefits: [
                '<strong>Szybka realizacja zamówień</strong> — wysyłka nawet w 24h',
                '<strong>Obsługa klienta 7 dni w tygodniu</strong> — czat, e-mail, social media',
                '<strong>Zwroty i reklamacje bez stresu</strong> — pełne wsparcie posprzedażowe',
                '<strong>Integracje z platformami</strong> — Shopify, WooCommerce, BaseLinker i inne'
            ],
            ctaButton: 'Rozwijaj swój biznes z nami',
            assurances: ['Bez ukrytych opłat','Umowa bez zobowiązań','Wszystko w jednym miejscu'],
            visualNote: 'Tysiące zamówień realizowanych każdego dnia',
            heroImage: 'assets/images/hero-dropshipping-visual-v4.webp',
            heroAlt: 'Zaplecze operacyjne sklepu internetowego z paczkami',
            heroThumb: 'assets/images/hero-dropshipping-inset-v4.webp',
            heroThumbAlt: 'Paczki przygotowywane do wysyłki',
            metrics: [
                ['100K+','Zrealizowanych zamówień','cart'],
                ['98%','Zadowolonych klientów','smile'],
                ['24h','Wysyłka nawet w 24h','clock'],
                ['50+','Rynków na całym świecie','globe'],
                ['99.8%','Niezawodności usług','shield']
            ],
            servicesKicker: 'Dropshipping',
            servicesTitle: 'Przejmujemy to, co zaczyna zabierać czas, gdy sklep rośnie.',
            servicesLead: 'Klient widzi jedną markę. Dlatego komunikacja, operacje i informacje o zamówieniu muszą działać jak jeden proces — niezależnie od tego, ilu dostawców i narzędzi jest w tle.',
            services: [
                ['Obsługa zapytań klientów','Kontakt przed zakupem, pytania o produkt, realizację zamówienia i kolejne kroki.'],
                ['Statusy, zwroty i reklamacje','Spójne odpowiedzi i uporządkowany sposób prowadzenia tematów posprzedażowych.'],
                ['Standardy komunikacji marki','Ton, zasady odpowiedzi i eskalacje dopasowane do sposobu, w jaki chcesz prowadzić sklep.'],
                ['Skalowalne procesy','Porządkujemy powtarzalne sytuacje tak, aby wzrost liczby klientów nie oznaczał chaosu.']
            ],
            processTitle: 'Najpierw poznajemy Twój sklep. Potem układamy obsługę wokół niego.',
            processLead: 'Nie wciskamy gotowego schematu. Najpierw ustalamy, jak działa sprzedaż, gdzie powstają pytania klientów i które elementy powinny zostać przejęte przez nasz zespół.',
            process: [
                ['Analiza procesu','Produkty, kanały kontaktu, typowe pytania, zwroty i punkty wymagające eskalacji.'],
                ['Wdrożenie standardu','Budujemy sposób pracy, odpowiedzi i przepływ informacji zgodny z Twoją marką.'],
                ['Codzienna obsługa','Zespół prowadzi kontakt z klientami, a Ty zachowujesz wgląd w najważniejsze tematy.']
            ],
            secondaryImage: 'assets/images/hero-customer-support-red-2026.webp',
            secondaryAlt: 'Obsługa klienta w środowisku e-commerce',
            whyKicker: 'Dlaczego łączymy te dwa obszary',
            whyTitle: 'Dobra obsługa klienta w dropshippingu nie może być oderwana od tego, jak działa sklep.',
            whyText: 'Pytanie klienta często zaczyna się od produktu, ale kończy na zamówieniu, dostawie, zwrocie albo ponownym zakupie. Dlatego patrzymy na customer support jako część operacji e-commerce, a nie osobny dział odpisujący na wiadomości.',
            ctaKicker: 'Dropshipping',
            ctaTitle: 'Porozmawiajmy o tym, co możemy przejąć w Twoim sklepie.'
        },
        support: {
            heroKicker: 'Obsługa klienta, która robi różnicę',
            heroTitle: 'Obsługa klienta, która wzmacnia Twoją markę',
            heroLead: 'Zapewniamy wyjątkowe doświadczenia Twoim klientom — szybkie odpowiedzi, empatyczną komunikację i profesjonalne wsparcie na każdym etapie ich drogi.',
            heroBenefits: [
                '<strong>Szybkie odpowiedzi</strong> — pierwsza reakcja nawet w 15 minut',
                '<strong>Spójna komunikacja</strong> — Twój głos, nasze standardy',
                '<strong>Obsługa zwrotów i zapytań o zamówienia</strong> — sprawnie i bez stresu',
                '<strong>Wsparcie w wielu językach</strong> — docieraj do klientów na całym świecie'
            ],
            ctaButton: 'Zadbaj o swoich klientów',
            assurances: ['Dedykowany zespół','Elastyczne godziny pracy','Raporty i analizy','Integracje z Twoimi systemami'],
            visualNote: 'Klienci czują się ważni, a Ty budujesz lojalność',
            heroImage: 'assets/images/hero-support-visual-v4.webp',
            heroAlt: 'Uśmiechnięta klientka korzystająca z telefonu',
            heroThumb: 'assets/images/hero-support-inset-v4.webp',
            heroThumbAlt: 'Konsultantka obsługi klienta podczas rozmowy',
            metrics: [
                ['98%','Zadowolonych klientów','smile'],
                ['15 min','Średni czas pierwszej odpowiedzi','clock'],
                ['24/7','Dostępność wsparcia','headset'],
                ['250K+','Rozmów obsłużonych miesięcznie','message'],
                ['20+','Języków obsługi','globe']
            ],
            servicesKicker: 'Obsługa klienta',
            servicesTitle: 'Customer support to nie samo odpisywanie. To sposób, w jaki klient zapamiętuje markę.',
            servicesLead: 'Projektujemy obsługę tak, aby klient otrzymywał jasną informację, zespół wiedział co robić w nietypowych sytuacjach, a firma miała kontrolę nad jakością komunikacji.',
            services: [
                ['Komunikacja z klientami','Pytania, problemy, wyjaśnienia i bieżący kontakt prowadzony zgodnie z ustalonym standardem.'],
                ['Procesy i eskalacje','Jasno określamy, które sprawy rozwiązujemy samodzielnie, a które wymagają decyzji po stronie firmy.'],
                ['Baza wiedzy i standard odpowiedzi','Porządkujemy informacje potrzebne zespołowi, żeby odpowiedzi były spójne i przewidywalne.'],
                ['Informacja zwrotna dla biznesu','Powtarzające się pytania i problemy klientów stają się sygnałem do poprawy procesu, produktu lub komunikacji.']
            ],
            processTitle: 'Wchodzimy w Twój sposób pracy zamiast narzucać własny.',
            processLead: 'Poznajemy markę, typy klientów i miejsca, w których najczęściej pojawiają się problemy. Dopiero wtedy układamy standard obsługi i zakres odpowiedzialności zespołu.',
            process: [
                ['Poznanie marki','Ton komunikacji, produkty, kanały, klienci i sytuacje wymagające szczególnej uwagi.'],
                ['Ułożenie procesu','Standard odpowiedzi, baza wiedzy, zasady eskalacji i sposób raportowania tematów.'],
                ['Stała współpraca','Prowadzimy obsługę i rozwijamy proces wraz ze zmianami w Twojej firmie.']
            ],
            secondaryImage: 'assets/images/hero-dropshipping-packages-2026.webp',
            secondaryAlt: 'Zaplecze operacyjne biznesu e-commerce',
            whyKicker: 'Obsługa osadzona w biznesie',
            whyTitle: 'Najlepszy support rozumie nie tylko klienta, ale też proces, który stoi za jego pytaniem.',
            whyText: 'Dlatego nie oddzielamy komunikacji od operacji. Żeby odpowiedź była naprawdę użyteczna, zespół musi rozumieć produkt, realizację zamówienia, ograniczenia procesu i to, kiedy sprawę trzeba eskalować.',
            ctaKicker: 'Obsługa klienta',
            ctaTitle: 'Zobaczmy, jak może wyglądać obsługa klienta po stronie Twojej firmy.'
        }
    };

    const qs = (selector) => document.querySelector(selector);
    const setText = (key, value) => {
        const el = qs(`[data-mode-text="${key}"]`);
        if (el) el.textContent = value;
    };

    function renderList(selector, values) {
        const list = qs(selector);
        if (!list) return;
        list.innerHTML = values.map((value) => `<li>${value}</li>`).join('');
    }

    function renderServices(values) {
        const wrapper = qs('[data-mode-services]');
        if (!wrapper) return;
        wrapper.innerHTML = values.map((item, index) => `
            <article class="dual-service-row">
                <span>${String(index + 1).padStart(2, '0')}</span>
                <div><h3>${item[0]}</h3><p>${item[1]}</p></div>
            </article>`).join('');
    }

    function renderProcess(values) {
        const wrapper = qs('[data-mode-process]');
        if (!wrapper) return;
        wrapper.innerHTML = values.map((item, index) => `
            <article>
                <span>${String(index + 1).padStart(2, '0')}</span>
                <h3>${item[0]}</h3><p>${item[1]}</p>
            </article>`).join('');
    }

    function iconSvg(name) {
        const common = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
        const paths = {
            cart: `<svg ${common}><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"/></svg>`,
            smile: `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M8.5 14.5c1 1.2 2.1 1.8 3.5 1.8s2.5-.6 3.5-1.8"/><path d="M9 9.5h.01M15 9.5h.01"/></svg>`,
            clock: `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
            globe: `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>`,
            shield: `<svg ${common}><path d="M12 3l7 3v5c0 4.8-3 8.1-7 10-4-1.9-7-5.2-7-10V6l7-3z"/><path d="M9.5 12l1.7 1.7 3.6-3.7"/></svg>`,
            headset: `<svg ${common}><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5zM20 13h-3v6h2a1 1 0 0 0 1-1v-5z"/><path d="M17 19c0 1.1-1.3 2-3 2h-2"/></svg>`,
            message: `<svg ${common}><path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-6a3 3 0 0 1-1-2V7a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v8z"/><path d="M8 9h8M8 13h5"/></svg>`
        };
        return paths[name] || paths.smile;
    }

    function assuranceSvg(index) {
        const names = ['tag','document','badge','team'];
        const common = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
        const icons = {
            tag: `<svg ${common}><path d="M20 13l-7 7-9-9V4h7l9 9z"/><circle cx="8.5" cy="8.5" r="1"/></svg>`,
            document: `<svg ${common}><path d="M6 3h10l2 2v16l-6-3-6 3V3z"/><path d="M9 8h6M9 12h6"/></svg>`,
            badge: `<svg ${common}><path d="M12 3l2 2 3-.3.3 3 2 2-2 2 .3 3-3 .3-2 2-2-2-3 .3-.3-3-2-2 2-2-.3-3 3-.3 2-2z"/><path d="M9.5 12l1.5 1.5 3.5-3.5"/></svg>`,
            team: `<svg ${common}><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2"/><path d="M3 20c.6-3.2 2.6-5 6-5s5.4 1.8 6 5M15 15c3 0 4.8 1.4 5.5 4"/></svg>`
        };
        return icons[names[index] || 'badge'];
    }

    function renderAssurances(values) {
        const wrapper = qs('[data-mode-assurances]');
        if (!wrapper) return;
        wrapper.innerHTML = values.map((value, index) => `<span><span class="assurance-icon" aria-hidden="true">${assuranceSvg(index)}</span>${value}</span>`).join('');
    }

    function renderMetrics(values) {
        const wrapper = qs('[data-mode-metrics]');
        if (!wrapper) return;
        wrapper.innerHTML = values.map((item) => `
            <div class="showcase-metric">
                <span class="showcase-metric__icon" aria-hidden="true">${iconSvg(item[2])}</span>
                <div><strong>${item[0]}</strong><small>${item[1]}</small></div>
            </div>`).join('');
    }

    function applyMode(modeName) {
        const mode = modes[modeName] || modes.dropshipping;
        body.classList.add('mode-transition');

        window.setTimeout(() => {
            body.dataset.businessMode = modeName;
            setText('hero-kicker', mode.heroKicker);
            setText('hero-title', mode.heroTitle);
            setText('hero-lead', mode.heroLead);
            setText('cta-button', mode.ctaButton);
            setText('visual-note', mode.visualNote);
            renderList('[data-mode-list="hero-benefits"]', mode.heroBenefits);
            renderAssurances(mode.assurances);
            renderMetrics(mode.metrics);
            setText('services-kicker', mode.servicesKicker);
            setText('services-title', mode.servicesTitle);
            setText('services-lead', mode.servicesLead);
            renderServices(mode.services);
            setText('process-title', mode.processTitle);
            setText('process-lead', mode.processLead);
            renderProcess(mode.process);
            setText('why-kicker', mode.whyKicker);
            setText('why-title', mode.whyTitle);
            setText('why-text', mode.whyText);
            setText('cta-kicker', mode.ctaKicker);
            setText('cta-title', mode.ctaTitle);

            const hero = qs('#mode-hero-image');
            if (hero) { hero.src = mode.heroImage; hero.alt = mode.heroAlt; }
            const thumb = qs('#mode-hero-thumb');
            if (thumb) { thumb.src = mode.heroThumb; thumb.alt = mode.heroThumbAlt; }
            const secondary = qs('#mode-secondary-image');
            if (secondary) { secondary.src = mode.secondaryImage; secondary.alt = mode.secondaryAlt; }

            document.querySelectorAll('[data-mode-button]').forEach((button) => {
                const active = button.dataset.modeButton === modeName;
                button.classList.toggle('is-active', active);
                button.setAttribute('aria-pressed', String(active));
            });

            document.title = modeName === 'support'
                ? 'Dropshipping How To Ascend — profesjonalna obsługa klienta'
                : 'Dropshipping How To Ascend — obsługa klienta dla e-commerce';

            body.classList.remove('mode-transition');
        }, 120);
    }

    document.querySelectorAll('[data-mode-button]').forEach((button) => {
        button.addEventListener('click', () => applyMode(button.dataset.modeButton));
    });

    const mobileToggle = qs('.dual-menu-toggle');
    const mobileMenu = qs('.dual-mobile-menu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            const open = mobileMenu.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', String(open));
            mobileMenu.setAttribute('aria-hidden', String(!open));
        });
        mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }));
    }

    // Dropshipping is the default. Internal pages can deep-link to the second mode.
    const requestedMode = new URLSearchParams(window.location.search).get('mode');
    applyMode(requestedMode === 'support' ? 'support' : 'dropshipping');
})();

// Mobile version of the new header on internal pages.
(() => {
    if (document.querySelector('.dual-home')) return;
    const mobileToggle = document.querySelector('.dual-menu-toggle');
    const mobileMenu = document.querySelector('.dual-mobile-menu');
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', String(open));
        mobileMenu.setAttribute('aria-hidden', String(!open));
    });
})();


// Pretty in-page navigation without URL hashes.
(() => {
    function cleanSectionParameter() {
        const url = new URL(window.location.href);
        const section = url.searchParams.get('section');
        if (!section) return;
        const target = document.getElementById(section);
        if (!target) return;
        window.requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            url.searchParams.delete('section');
            const query = url.searchParams.toString();
            window.history.replaceState({}, '', url.pathname + (query ? '?' + query : ''));
        });
    }

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[data-scroll-to]');
        if (!link) return;
        const section = String(link.dataset.scrollTo || '').trim();
        if (!section) return;
        const target = document.getElementById(section);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const url = new URL(window.location.href);
        url.searchParams.delete('section');
        const query = url.searchParams.toString();
        window.history.replaceState({}, '', url.pathname + (query ? '?' + query : ''));
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', cleanSectionParameter, { once: true });
    } else {
        cleanSectionParameter();
    }
})();
