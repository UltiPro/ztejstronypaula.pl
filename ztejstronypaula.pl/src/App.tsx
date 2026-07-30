import { About } from './components/About';
import { Contact } from './components/Contact';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramRail } from './components/InstagramRail';
import { InstagramStrip } from './components/InstagramStrip';
import { Manifesto } from './components/Manifesto';
import { Offer } from './components/Offer';
import { Testimonials } from './components/Testimonials';
import { useHeroPassed } from './hooks/useHeroPassed';

export default function App() {
	const { markerRef, passed } = useHeroPassed();

	return (
		<>
			<Header heroPassed={passed} />

			<main id="content" tabIndex={-1} className="focus:outline-none">
				<Hero />
				{/* Marker for the header — tells it the hero has ended. */}
				<div ref={markerRef} aria-hidden="true" className="h-px" />

				<Manifesto />
				<Offer />
				<Gallery />
				<About />
				<Testimonials />
				<CtaBand />
				<InstagramStrip />
				<Contact />
			</main>

			<Footer />
			<InstagramRail />
		</>
	);
}
