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
	const walkMeetingMapLink = 'https://www.google.com/maps/search/?api=1&query=50.1031749%2C14.3947512';
	const dinnerMapLink = 'https://www.google.com/maps/search/?api=1&query=Pet%C5%99%C3%ADnsk%C3%A9+terasy,+Pet%C5%99%C3%ADnsk%C3%A9+sady+393,+Prague';
	const dinnerDirectionsLink = 'https://www.google.com/maps/dir/?api=1&origin=Masarykova+kolej,+Th%C3%A1kurova+1,+Prague&destination=Pet%C5%99%C3%ADnsk%C3%A9+terasy,+Pet%C5%99%C3%ADnsk%C3%A9+sady+393,+Prague&travelmode=transit';
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
				Practical information for the Prague kick-off, transport, accommodation, and social programme.
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
					<h4 class="text-xl font-bold text-gray-900">How to get there</h4>
					<div>
						<h5 class="mb-2 text-lg font-semibold text-gray-900">By car</h5>
						<p>
							We have <strong>three reserved parking spaces: 12, 13, and 14</strong>. Please <a href="mailto:ipw@cvut.cz" class="font-medium text-blue-600 hover:text-blue-700">contact us</a> if you need parking.
						</p>
					</div>

					<div>
						<h5 class="mb-2 text-lg font-semibold text-gray-900">By public transport</h5>
						<p>
							Please use Google Maps for the best current public transport connection to CIIRC / CTU in Prague.
						</p>
					</div>
				</div>
			</Card>

			<Card>
				<h3 class="mb-4 text-2xl font-bold text-gray-900">Public transport</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>You need a valid ticket when travelling on Prague public transport, including the metro, buses, and trams. You can buy tickets:</p>
					<ul class="list-disc space-y-2 pl-6">
						<li>As paper tickets at <a href="https://www.dpp.cz/en/fares/list-of-points-of-sales" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">ticket sales points and ticket machines</a>.</li>
						<li>In the <a href="https://pidlitacka.cz/en" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">PID Lítačka app</a>.</li>
						<li>By <a href="https://czech-transport.com/index.php?id=337" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">SMS</a> (requires a Czech SIM card with premium SMS enabled).</li>
					</ul>
					<p>Validate a paper ticket before entering the metro paid area or immediately after boarding a tram or bus, unless it is already issued with a validity time. With an app or SMS ticket, make sure the ticket is valid before you travel.</p>
					<p>If you plan to explore Prague more extensively, we recommend a 24-hour or 72-hour ticket, or a longer-term pass, instead of buying individual tickets for each journey.</p>
					<p>If you need help buying a ticket, ask one of the Czech participants or organisers — they will be happy to help.</p>
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

			<Card>
				<h3 id="monday" class="mb-4 scroll-mt-28 text-2xl font-bold text-gray-900">Monday: kick-off</h3>
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
				<h3 id="monday-evening" class="mb-4 scroll-mt-28 text-2xl font-bold text-gray-900">Monday afternoon/evening</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>Join us for an optional guided walk around <strong>Prague Castle and the surrounding area</strong> on <strong>Monday, October 5, 2026, from 17:00 to approximately 20:00</strong> (Prague local time).</p>
					<p>Meet at <strong>17:00 outside the building that houses Respirium, at street level</strong>. See the <a href={walkMeetingMapLink} target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">meeting point on Google Maps</a>.</p>
					<p>The programme lasts about three hours and includes a short bus ride. Please buy a public transport ticket beforehand if you do not already have one.</p>
					<p>We finish at <strong>Malostranská metro station (line A)</strong>. From there, Dejvická, near MIAS, is two metro stops away; you can also return by tram.</p>
					<p><a href="{base}/calendar/ipw-2026-prague-castle-walk.ics" download class="inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-700">Add Prague Castle guided walk to calendar</a></p>
				</div>
			</Card>

			<Card>
				<h3 id="tuesday" class="mb-4 scroll-mt-28 text-2xl font-bold text-gray-900">Tuesday</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>On <strong>Tuesday, October 6, 2026</strong>, you will visit your partner company together with your academic tutor. Please agree on the exact meeting time and location directly with your tutor.</p>
					<p>Several classrooms at <strong>MIAS</strong> will also be reserved for you to work together in your teams. The specific rooms will be announced on Monday.</p>
				</div>
			</Card>

			<Card>
				<h3 id="wednesday" class="mb-4 scroll-mt-28 text-2xl font-bold text-gray-900">Wednesday</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>On <strong>Wednesday, October 7, 2026</strong>, you can continue working together in your teams in the classrooms at <strong>MIAS</strong> during the day.</p>
					<p>The specific classrooms available for team work will be announced on Monday.</p>
				</div>
				<h4 id="wednesday-evening" class="mb-4 mt-6 scroll-mt-28 text-xl font-semibold text-gray-900">Evening: farewell dinner</h4>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>Join us for the <strong>IPW Prague Farewell Dinner</strong>, a buffet dinner together on <strong>Wednesday, October 7, 2026, from 18:00</strong> (Prague local time).</p>
					<p>We will meet at <a href="https://petrinsketerasy.cz/" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">Petřínské terasy</a>, Petřínské sady 393, Prague 1. <a href={dinnerMapLink} target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">View the restaurant on Google Maps</a>.</p>
					<p>Use these <a href={dinnerDirectionsLink} target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">public transport directions from Masaryk Dormitory to Petřínské terasy</a> to plan your journey.</p>
					<p>You can shorten the uphill walk by taking the Petřín funicular. It is included with a valid 24-hour or 72-hour Prague ticket or a long-term Prague pass. Ordinary 30-minute and 90-minute tickets do not cover it; otherwise, buy a separate funicular ticket. See the <a href="https://pid.cz/en/the-petrin-funicular-resumes-service-with-new-cabins-on-tuesday-september-22/" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:text-blue-700">PID funicular information and fare conditions</a>.</p>
					<p><a href="{base}/calendar/ipw-2026-farewell-dinner.ics" download class="inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary-700">Add IPW Prague Farewell Dinner to calendar</a></p>
				</div>
			</Card>

			<Card>
				<h3 id="thursday" class="mb-4 scroll-mt-28 text-2xl font-bold text-gray-900">Thursday</h3>
				<div class="space-y-4 text-lg leading-relaxed text-gray-700">
					<p>On <strong>Thursday, October 8, 2026, from 9:00 to 14:00</strong> (Prague local time), we will meet in the <strong>Blue Room at the CTU Rectorate</strong> to finalise the project action plans for our partner companies.</p>
					<p>Address: <strong>Jugoslávských partyzánů 1580/3, 160 00 Praha 6 – Dejvice</strong>, the same address as the CTU Rectorate.</p>
				</div>
			</Card>
		</div>
	</Container>
</Section>
