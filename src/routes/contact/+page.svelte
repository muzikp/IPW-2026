<script lang="ts">
	import { Container, Section, Card } from '$lib/components';
</script>

<svelte:head>
	<title>Contact - IPW</title>
</svelte:head>

<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact</h1>
			<p class="text-xl text-gray-700 mb-8">
				Questions about studying, partnering, or mobility? Write to us.
			</p>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="max-w-4xl mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<Card>
					<h2 class="text-2xl font-bold text-gray-900 mb-4">Get in touch</h2>
					<div class="space-y-4 text-gray-700">
						<p>
							<strong>Email:</strong><br />
							<a
								href="mailto:ipw@cvut.cz"
								class="text-blue-600 hover:text-blue-700 font-semibold"
							>
								ipw@cvut.cz
							</a>
						</p>
						<p>
							<strong>Website:</strong><br />
							<a
								href="https://www.muvs.cvut.cz/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-700"
							>
								www.muvs.cvut.cz
							</a>
						</p>
						<p>
							<strong>LinkedIn:</strong><br />
							<a
								href="https://www.linkedin.com/company/masarykuv-ustav-vyssich-studii-cvut-v-praze/"
								target="_blank"
								rel="noopener noreferrer"
								class="text-blue-600 hover:text-blue-700"
							>
								Masarykův ústav vyšších studií
							</a>
						</p>
					</div>
				</Card>

				<Card>
					<h2 class="text-2xl font-bold text-gray-900 mb-4">Address</h2>
					<div class="text-gray-700">
						<p class="font-semibold mb-2">Masaryk Institute of Advanced Studies</p>
						<p>Czech Technical University in Prague</p>
						<p>Kolejní 2637/2a</p>
						<p>160 00 Praha 6</p>
						<p>Czech Republic</p>
						<p class="mt-4">
							<strong>ID:</strong> 68407700<br />
							<strong>VAT ID:</strong> CZ68407700
						</p>
					</div>
				</Card>
			</div>

			<Card>
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Bank Accounts</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
					<div>
						<p class="font-semibold mb-2">CZK Account</p>
						<p class="font-mono text-sm">64450-6007550002/6300</p>
					</div>
					<div>
						<p class="font-semibold mb-2">EUR Account</p>
						<p class="font-mono text-sm">64450-6007550010/6300</p>
					</div>
				</div>
			</Card>

			<div class="mt-12 text-center">
				<Card class="bg-blue-50 border-blue-100">
					<h3 class="text-xl font-bold text-gray-900 mb-4">Contacting IPW</h3>
					<div class="space-y-4 text-gray-700 text-left max-w-2xl mx-auto">
						<p>
							<strong>If you are a student:</strong> include your university and expected graduation year.
						</p>
						<p>
							<strong>If you are a company:</strong> briefly describe your challenge and a preferred timeline.
						</p>
						<p>
							<strong>If you are a university:</strong> let us know about your interest in partnership and student mobility.
						</p>
					</div>
				</Card>
			</div>
		</div>
	</Container>
</Section>
