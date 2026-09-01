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
            heroLead: 'Kompleksowe wsparcie w modelu dropshipping — od obsługi zamówień po kontakt z klientem. Ty rozwijasz markę, my porządkujemy proces po swojej stronie.',
            heroBenefits: [
                '<strong>Obsługa komunikacji z klientami</strong> — przed i po zakupie',
                '<strong>Zwroty i reklamacje</strong> — uporządkowany proces',
                '<strong>Statusy zamówień</strong> — jasna informacja dla klienta',
                '<strong>Skalowalne standardy</strong> — proces rośnie razem ze sklepem'
            ],
            ctaButton: 'Porozmawiajmy o współpracy',
            assurances: ['Spójna komunikacja','Jasne zasady współpracy','Jeden proces'],
            visualNote: 'Dropshipping i obsługa klienta w jednym modelu',
            heroImage: 'assets/images/hero-dropshipping-visual-v4.webp',
            heroAlt: 'Zaplecze operacyjne sklepu internetowego z paczkami',
            heroThumb: 'assets/images/hero-dropshipping-inset-v4.webp',
            heroThumbAlt: 'Paczki przygotowywane do wysyłki',
            metrics: [
                ['2','obszary w jednym modelu'],
                ['A–Z','proces obsługi klienta'],
                ['1','zespół po Twojej stronie'],
                ['B2B','model współpracy'],
                ['Scale','proces gotowy na wzrost']
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
            heroLead: 'Budujemy profesjonalny customer support, który jest spójny z Twoją marką i osadzony w realnym procesie firmy — od pierwszego pytania klienta po sprawy posprzedażowe.',
            heroBenefits: [
                '<strong>Spójna komunikacja</strong> — zgodna z tonem Twojej marki',
                '<strong>Obsługa przed i po sprzedaży</strong> — jeden standard',
                '<strong>Zwroty i pytania o zamówienia</strong> — bez chaosu',
                '<strong>Eskalacje i baza wiedzy</strong> — jasne zasady dla zespołu'
            ],
            ctaButton: 'Zadbaj o swoich klientów',
            assurances: ['Dedykowany standard','Elastyczny proces','Raportowanie','Integracja z operacjami'],
            visualNote: 'Klient dostaje spójną odpowiedź na każdym etapie',
            heroImage: 'assets/images/hero-support-visual-v4.webp',
            heroAlt: 'Uśmiechnięta klientka korzystająca z telefonu',
            heroThumb: 'assets/images/hero-support-inset-v4.webp',
            heroThumbAlt: 'Konsultantka obsługi klienta podczas rozmowy',
            metrics: [
                ['A–Z','obsługa komunikacji'],
                ['1','spójny standard'],
                ['B2B','model współpracy'],
                ['360°','widok na potrzeby klienta'],
                ['Scale','wraz z Twoją firmą']
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

    function renderAssurances(values) {
        const wrapper = qs('[data-mode-assurances]');
        if (!wrapper) return;
        wrapper.innerHTML = values.map((value) => `<span><i aria-hidden="true"></i>${value}</span>`).join('');
    }

    function renderMetrics(values) {
        const wrapper = qs('[data-mode-metrics]');
        if (!wrapper) return;
        const icons = ['◇','◎','◷','◉','↗'];
        wrapper.innerHTML = values.map((item, index) => `
            <div class="showcase-metric">
                <span class="showcase-metric__icon" aria-hidden="true">${icons[index] || '•'}</span>
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
