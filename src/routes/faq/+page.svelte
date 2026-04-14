<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card } from '$lib/components';

	const googleMapsApiKey = 'AIzaSyDaOWyFEtrBvDClGBuCBDJ8Q8HcvuctLSI';
	const venueAddress = 'Respirium, CIIRC CTU in Prague, Jugoslavskych partyzanu 1580/3, 160 00 Praha 6, Dejvice';
	const venueMapLink = 'https://maps.app.goo.gl/qL3Cz3EkNWWd37JT6';
	const venueEmbedQuery = encodeURIComponent(venueAddress);
	const directionsQuery = encodeURIComponent(venueAddress);
	const accommodationCenter = 'Masaryk Institute of Advanced Studies, Kolejní 2637/2a, 160 00 Praha 6, Czech Republic';
	const accommodationSearchQuery = encodeURIComponent(`accommodation near ${accommodationCenter}`);
	const accommodationSearchLink = `https://www.google.com/maps/search/?api=1&query=${accommodationSearchQuery}`;
</script>

<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-12 -left-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl"></div>
		<div class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl"></div>
	</div>

	<Container class="relative z-10">
		<div class="mx-auto max-w-5xl text-center">
			<div class="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-700 shadow-lg backdrop-blur-sm">
				<span>FAQ</span>
				<span class="text-gray-300">|</span>
				<span>International Project Workshop</span>
			</div>

			<h1 class="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
				Frequently asked questions
			</h1>
			<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Practical information for the Prague kick-off, arrival, and accommodation.
			</p>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">
				<span class="text-gradient">In Prague</span>
			</h2>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-accent-600"></div>
		</div>

		<div class="space-y-8">
			<Card>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">When it starts</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>
						The Prague part starts on <strong>Monday, October 5, 2026, at 9:00</strong>.
					</p>
					<p>
						<a
							href="{base}/calendar/ipw-2026-kickoff.ics"
							class="inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-700"
						>
							Add IPW 2026 Kick-off to calendar
						</a>
					</p>
				</div>
			</Card>

			<Card>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Where it starts</h3>
				<div class="space-y-5 text-lg leading-relaxed text-gray-700">
					<p>
						We start in <strong>Respirium at CIIRC, CTU in Prague</strong>.
					</p>

					<div class="rounded-2xl border border-gray-200 bg-gray-50 p-5">
						<p>České vysoké učení technické v Praze</p>
						<p>Český institut informatiky, robotiky a kybernetiky</p>
						<p>Room RESPIRIUM</p>
						<p>Jugoslávských partyzánů 1580/3</p>
						<p>160 00 Praha 6, Dejvice</p>
					</div>

					<div class="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
						<iframe
							title="Map of the IPW 2026 kick-off venue"
							src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${venueEmbedQuery}`}
							class="h-80 w-full border-0"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							allowfullscreen
						></iframe>
					</div>

					<div class="flex flex-wrap gap-3">
						<a
							href={venueMapLink}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-base font-semibold text-primary-700 transition-colors duration-300 hover:bg-primary-100"
						>
							Open in Google Maps
						</a>
						<a
							href={`https://www.google.com/maps/dir/?api=1&destination=${directionsQuery}`}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-base font-semibold text-gray-700 transition-colors duration-300 hover:bg-gray-50"
						>
							Navigate to venue
						</a>
					</div>

					<p>
						There will be signs from the entrance guiding you upstairs via the glass staircase.
						Respirium is at the top of those stairs.
					</p>
				</div>
			</Card>

			<Card>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">How to get there</h3>
				<div class="space-y-5 text-lg leading-relaxed text-gray-700">
					<div>
						<h4 class="mb-2 text-xl font-semibold text-gray-900">By car</h4>
						<p>
							We have <strong>three parking places</strong>, but they must be arranged in advance.
						</p>
					</div>

					<div>
						<h4 class="mb-2 text-xl font-semibold text-gray-900">By public transport</h4>
						<p>
							Please use Google Maps for the best current public transport connection to CIIRC / CTU in Prague.
						</p>
					</div>
				</div>
			</Card>

			<Card>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Where to stay</h3>
				<div class="space-y-6 text-lg leading-relaxed text-gray-700">
					<div>
						<h4 class="mb-2 text-xl font-semibold text-gray-900">Masaryk Dormitory</h4>
						<p>
							We recommend:
							<a
								href="https://www.suz.cvut.cz/en/dormitory-accommodation/masaryk-dormitory"
								target="_blank"
								rel="noopener noreferrer"
								class="font-medium text-blue-600 hover:text-blue-700"
							>
								Masaryk Dormitory
							</a>
						</p>
						<p>
							We recommend booking as early as possible. It is in the same block as MIAS.
						</p>
					</div>

					<div>
						<h4 class="mb-2 text-xl font-semibold text-gray-900">Other nearby options</h4>
						<p>
							You can also look up other accommodation nearby using Google Maps.
						</p>
						<p>
							The map below is centered on MIAS / Dejvice and highlights accommodation options in the surrounding area.
						</p>
					</div>

					<div class="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
						<iframe
							title="Accommodation options near MIAS CTU"
							src={`https://www.google.com/maps/embed/v1/search?key=${googleMapsApiKey}&q=${accommodationSearchQuery}`}
							class="h-96 w-full border-0"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							allowfullscreen
						></iframe>
					</div>

					<div class="flex flex-wrap gap-3">
						<a
							href={accommodationSearchLink}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-base font-semibold text-primary-700 transition-colors duration-300 hover:bg-primary-100"
						>
							Search accommodation near MIAS
						</a>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>
