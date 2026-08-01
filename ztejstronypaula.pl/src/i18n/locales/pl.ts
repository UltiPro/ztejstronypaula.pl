import type { CategoryKey } from '../../content/images';
import { site } from '../../content/site';
import type { Dictionary } from '../types';

/*
Polski ma trzy formy liczby mnogiej: 1 zdjęcie, 2–4 zdjęcia, 5+ zdjęć.
Wyjątkiem są nastki — 12, 13, 14 idą z formą dopełniaczową.
*/
function photoNoun(count: number): string {
	if (count === 1) return 'zdjęcie';

	const lastDigit = count % 10;
	const lastTwoDigits = count % 100;
	const isTeen = lastTwoDigits >= 12 && lastTwoDigits <= 14;

	return lastDigit >= 2 && lastDigit <= 4 && !isTeen ? 'zdjęcia' : 'zdjęć';
}

const AUTO_ALT: Record<CategoryKey | 'instagram', string> = {
	women: 'Kadr z sesji kobiecej',
	family: 'Kadr z sesji rodzinnej',
	couples: 'Kadr z sesji pary',
	bridal: 'Kadr z wieczoru panieńskiego lub ślubu',
	dance: 'Kadr z sesji tanecznej',
	instagram: 'Kadr z Instagrama',
};

export const pl: Dictionary = {
	meta: {
		htmlLang: 'pl',
		name: 'Polski',
		short: 'PL',
		documentTitle: `${site.logotype} — fotografia Warszawa, Trójmiasto, Ełk`,
		description:
			'Sesje kobiece, rodzinne, pary, wieczory panieńskie i śluby oraz fotografia taneczna. Warszawa, Trójmiasto, Ełk i okolice.',
	},

	common: {
		skipToContent: 'Przejdź do treści',
		openMenu: 'Otwórz menu',
		closeMenu: 'Zamknij menu',
		scrollDown: 'Przewiń',
		languageLabel: 'Język',
		switchTo: (language) => `Przełącz na ${language}`,
	},

	nav: {
		offer: 'Oferta',
		gallery: 'Galeria',
		about: 'O mnie',
		testimonials: 'Opinie',
		contact: 'Kontakt',
	},

	hero: {
		eyebrow: 'Fotografia · Warszawa · Trójmiasto · Ełk',
		title: 'Zdjęcia, do których wraca się latami',
		lead: 'Sesje kobiece, rodzinne, pary, wieczory panieńskie i śluby — robione w świetle dziennym, bez sztywnego pozowania.',
		primaryCta: 'Zobacz galerię',
		secondaryCta: 'Sprawdź termin',
	},

	manifesto: {
		eyebrow: 'Jak pracuję',
		quote: 'Nie ustawiam Was do zdjęcia. Daję pretekst, żeby być blisko siebie —',
		quoteAccent: 'i fotografuję to, co dzieje się samo.',
		body: 'Sesja to zwykle spacer, rozmowa i dużo śmiechu. Kadry powstają pomiędzy — wtedy, kiedy przestajecie myśleć o aparacie.',
	},

	offer: {
		eyebrow: 'Oferta',
		title: 'Co możemy razem zrobić',
		intro: 'Pięć rodzajów sesji, które robię najczęściej. Każdą wyceniam indywidualnie — napisz, co masz w głowie, a odpiszę z terminem i ceną.',
		categories: {
			women: {
				name: 'Kobiece',
				description:
					'Portret i sesja buduarowa. Dla siebie, we własnym tempie.',
			},
			family: {
				name: 'Rodzinne',
				description:
					'W plenerze albo u Was w domu. Dzieci nie muszą siedzieć grzecznie.',
			},
			couples: {
				name: 'Pary',
				description:
					'Sesje narzeczeńskie i plenery we dwoje, o każdej porze roku.',
			},
			bridal: {
				name: 'Panieńskie i śluby',
				description:
					'Wieczór panieński i reportaż z całego dnia ślubu, bez pozowania.',
			},
			dance: {
				name: 'Taneczne',
				description:
					'Tancerze, sport, projekty autorskie. Studio albo przestrzeń industrialna.',
			},
		},
	},

	gallery: {
		eyebrow: 'Galeria',
		title: 'Portfolio',
		intro: 'Wybierz kategorię albo przewiń wszystko. Kliknij zdjęcie, żeby powiększyć.',
		filterGroupLabel: 'Filtruj galerię',
		filterAll: 'Wszystko',
		empty: 'W tej kategorii nie ma jeszcze zdjęć.',
		zoomLabel: (alt) => `Powiększ: ${alt}`,
		showMore: 'Pokaż więcej',
		counter: (shown, total) => `${shown} z ${total} ${photoNoun(total)}`,
	},

	lightbox: {
		label: 'Podgląd zdjęcia',
		close: 'Zamknij podgląd',
		previous: 'Poprzednie zdjęcie',
		next: 'Następne zdjęcie',
	},

	about: {
		eyebrow: 'O mnie',
		title: site.fullName,
		lead: 'Cześć! Jestem Paula. Fotografuję emocje — tak, żeby za kilka lat można było wrócić do zdjęcia i poczuć dokładnie ten dzień.',
		body: 'Zaczęło się, kiedy telefon przestał wystarczać, a malowanie światłem wciągnęło mnie na dobre. Podczas sesji najważniejsza jest dla mnie relacja i swobodna atmosfera — dopiero wtedy zdjęcia wyglądają jak Wy.',
		signature: site.logotype,
		// PLACEHOLDER — liczby przykładowe, do potwierdzenia albo wycięcia.
		facts: [
			{ value: '5', label: 'rodzajów sesji' },
			{ value: '100%', label: 'światła dziennego' },
			{ value: '14', label: 'dni na zdjęcia' },
		],
	},

	testimonials: {
		eyebrow: 'Opinie',
		title: 'Co mówią klientki',
		badge: 'Treść do uzupełnienia',
		// PLACEHOLDER — struktura gotowa, treść do wymiany na prawdziwe wypowiedzi.
		items: [
			{
				quote: 'Miejsce na prawdziwą opinię — wklej tu 2–3 zdania z wiadomości od klientki. Najlepiej takie, które mówi, jak się czuła na sesji.',
				author: 'Imię i pierwsza litera nazwiska',
				context: 'Sesja rodzinna · 2025',
			},
			{
				quote: 'Druga opinia. Dobrze działają konkrety: ile trwała sesja, jak szybko dostała zdjęcia, co ją zaskoczyło.',
				author: 'Imię i pierwsza litera nazwiska',
				context: 'Wieczór panieński · 2025',
			},
			{
				quote: 'Trzecia opinia. Jeśli masz zgodę, dopisz imię i rodzaj sesji — anonimowe cytaty budują dużo mniej zaufania.',
				author: 'Imię i pierwsza litera nazwiska',
				context: 'Sesja pary · 2024',
			},
		],
	},

	ctaBand: {
		title: 'Zróbmy z Waszego dnia coś, do czego będziecie wracać',
		lead: 'Napisz kilka zdań o tym, co chcecie uwiecznić. Odpisuję w ciągu doby.',
		action: 'Napisz do mnie',
	},

	instagram: {
		eyebrow: site.instagramHandle,
		title: 'Najnowsze kadry',
		intro: 'Najświeższe sesje wrzucam najpierw na Instagram.',
		action: 'Obserwuj na Instagramie',
		tileLabel: (alt) => `${alt} — otwórz Instagram`,
	},

	contact: {
		eyebrow: 'Kontakt',
		title: 'Napisz, co chcesz uwiecznić',
		intro: 'Odpowiadam zwykle w ciągu doby. Jeśli masz konkretną datę — podaj ją od razu.',
		form: {
			name: 'Imię',
			namePlaceholder: 'Jak się do Ciebie zwracać?',
			email: 'E-mail',
			emailPlaceholder: 'twoj@email.pl',
			sessionType: 'Rodzaj sesji',
			sessionTypePlaceholder: 'Wybierz…',
			date: 'Orientacyjny termin',
			datePlaceholder: 'np. czerwiec 2026',
			message: 'Wiadomość',
			messagePlaceholder:
				'Opowiedz krótko, co masz w głowie — miejsce, klimat, ile osób.',
			submit: 'Wyślij wiadomość',
			note: 'Formularz w wersji docelowej wyśle wiadomość przez EmailJS — bez backendu.',
			notWired:
				'Formularz nie jest jeszcze podłączony. Napisz proszę bezpośrednio na',
		},
		sessionTypes: [
			'Kobieca / buduarowa',
			'Rodzinna',
			'Para',
			'Wieczór panieński lub ślub',
			'Taneczna',
			'Jeszcze nie wiem',
		],
		channels: {
			emailLabel: 'E-mail',
			instagramLabel: 'Instagram',
			areaLabel: 'Obszar',
			areaValue: 'Warszawa, Trójmiasto, Ełk i okolice',
			responseLabel: 'Czas odpowiedzi',
			responseValue: 'Zwykle do 24 godzin',
		},
	},

	footer: {
		description:
			'Fotografia rodzinna, ślubna i portretowa. Warszawa, Trójmiasto, Ełk i okolice.',
		siteHeading: 'Strona',
		contactHeading: 'Kontakt',
	},

	/* Opisy tego, co faktycznie widać na zdjęciu — czytnik ekranu i wyszukiwarka
     dostają treść, nie numer slotu. */
	imageAlt: {
		'hero-desktop': 'Para młoda przytulona nad brzegiem jeziora o zmierzchu',
		'hero-mobile': 'Para młoda na plaży, kadr pionowy',

		'offer-women':
			'Kobieta w marynarce i jeansach, portret całej sylwetki w studio',
		'offer-family': 'Dwoje dzieci wtulonych w siebie na kraciastym kocu',
		'offer-couples': 'Para przytulona na plaży o poranku',
		'offer-bridal':
			'Panna młoda z przyjaciółkami przed fontanną Neptuna w Gdańsku',
		'offer-dance': 'Tancerka w pozie na podłodze studia',
		'about-portrait': `${site.fullName} z aparatem w dłoni`,
		'cta-band': 'Para stojąca nad brzegiem morza, patrząca w stronę wody',

		'3-galeria/kobiece/martyna-27':
			'Kobieta oparta o kremową sofę w ciepłym wnętrzu',
		'3-galeria/kobiece/martyna-29':
			'Portret kobiety przy kremowej sofie i gałęziach oliwnych',
		'3-galeria/kobiece/martyna-28': 'Kobieta leżąca na kremowej sofie',
		'3-galeria/kobiece/martyna-11':
			'Portret kobiety z długimi włosami na jasnym tle',
		'3-galeria/kobiece/martyna-16':
			'Kobieta klęcząca na białym podeście w studio',
		'3-galeria/kobiece/martyna-10':
			'Kobieta siedząca na podłodze studia, oparta na dłoni',
		'3-galeria/kobiece/julia-7':
			'Portret buduarowy — sylwetka z uniesionymi ramionami w ciemnym studiu',
		'3-galeria/kobiece/julia-51':
			'Portret buduarowy — wygięta sylwetka w bocznym świetle',
		'3-galeria/kobiece/julia-54':
			'Portret buduarowy — odchylona głowa i uniesione ramię',
		'3-galeria/kobiece/julia':
			'Portret buduarowy — sylwetka z profilu w smudze światła',
		'3-galeria/kobiece/julia-50':
			'Portret buduarowy — postać stojąca bokiem na czarnym tle',

		'3-galeria/pary/ania-kacper-18':
			'Zbliżenie na twarze pary opartej o siebie czołami',
		'3-galeria/pary/ania-kacper-6': 'Para stojąca na brzegu morza, kadr poziomy',
		'3-galeria/pary/ania-kacper-10':
			'Para przytulona na plaży, on obejmuje ją od tyłu',
		'3-galeria/pary/ania-kacper-3': 'Para całująca się na tle morza',
		'3-galeria/pary/ania-kacper': 'Para na plaży, ona wtulona w jego ramię',
		'3-galeria/pary/ania-kacper-9': 'Para patrząca na morze, widok od tyłu',

		'3-galeria/panienskie-i-sluby/panienski-22-06-24-15':
			'Panna młoda z przyjaciółkami przed fontanną Neptuna w Gdańsku',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-8':
			'Grupa przyjaciółek idąca ulicą gdańskiej starówki',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-28':
			'Przyszła panna młoda z rękami uniesionymi nad głową',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-12':
			'Dłonie przyjaciółek złożone razem na środku kręgu',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-11':
			'Wieczór panieński — grupa w różowych sukienkach na starówce',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-23':
			'Przyszła panna młoda w białej sukience przed bramą',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-16':
			'Przyszła panna młoda oparta o balustradę',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-18':
			'Kobieta siedząca przed kwiaciarnią wśród hortensji',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-9':
			'Przyszła panna młoda pod deszczem konfetti nad kanałem',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-10':
			'Grupa przyjaciółek z pamiątkowymi szarfami',
		'3-galeria/panienskie-i-sluby/panienski-22-06-24-24':
			'Wieczór panieński przy zabytkowej karuzeli',

		'3-galeria/rodzinne/asia-i-rodzinka-20':
			'Rodzice z dwoma synami na trawie przed domem',
		'3-galeria/rodzinne/asia-i-rodzinka-35':
			'Tata wiozący dzieci w taczce w słońcu sadu',
		'3-galeria/rodzinne/asia-i-rodzinka-11':
			'Mama z synem leżący na kraciastym kocu',
		'3-galeria/rodzinne/asia-i-rodzinka-13':
			'Chłopiec podlewający grządki konewką',
		'3-galeria/rodzinne/asia-i-rodzinka-3':
			'Chłopiec puszczający bańki mydlane w ogrodzie',
		'3-galeria/rodzinne/asia-i-rodzinka-15':
			'Chłopiec jedzący arbuza pod ścianą porośniętą różami',
		'3-galeria/rodzinne/asia-i-rodzinka-6': 'Chłopiec odpoczywający w hamaku',
		'3-galeria/rodzinne/asia-i-rodzinka-2':
			'Chłopiec idący pod górę przy starej szklarni',
		'3-galeria/rodzinne/asia-i-rodzinka-9':
			'Mama z synem leżący obok siebie, kadr z góry',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-9':
			'Sesja ciążowa — kobieta w białej koszuli odwrócona do obiektywu',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-2':
			'Sesja ciążowa — cała sylwetka na plaży o zachodzie słońca',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-26':
			'Sesja ciążowa — kobieta z dłonią we włosach, kremowy sweter',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-33':
			'Sesja ciążowa — kobieta patrząca w stronę morza',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-38':
			'Sesja ciążowa — uniesione ramię, wiatr we włosach',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-12':
			'Sesja ciążowa — kobieta z rękami uniesionymi nad głową',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-15':
			'Sesja ciążowa — dłonie ułożone w serce na brzuchu',
		'3-galeria/rodzinne/martyna-sesja-brzuszkowa-3':
			'Sesja ciążowa — zbliżenie dłoni obejmujących brzuch',
	},

	imageAltAuto: (of, index) => `${AUTO_ALT[of]} nr ${index}`,

	placeholder: {
		label: (alt) => `Miejsce na zdjęcie: ${alt}`,
	},
};
