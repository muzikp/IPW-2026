<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Callout } from '$lib/components';
</script>

<svelte:head>
	<title>Partner Guide - IPW</title>
</svelte:head>

<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<Callout type="info" class="mb-6">
			<p class="font-semibold">For confirmed partners only</p>
		</Callout>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Partner guide</h1>
			<p class="text-xl text-gray-700">
				This page contains onboarding notes, expectations, and downloadable templates.
			</p>
		</div>
	</Container>
</Section>

<!-- What students can (and can't) do -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			What students can (and can't) do
		</h2>
		<p class="text-lg text-gray-700 mb-6">
			To set expectations, it helps to treat the team as a <strong
				>highly motivated internal project team</strong
			> (supported by academic tutors)—not as an external vendor with their own research infrastructure.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Well-suited activities</h3>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>Desk research (open sources)</li>
					<li>Benchmarking</li>
					<li>Qualitative interviews</li>
					<li>Stakeholder mapping</li>
					<li>Deep observation (where feasible)</li>
					<li>Concept/design proposals (including UX and customer journeys)</li>
					<li>Building frameworks, roadmaps, and research-backed recommendations</li>
				</ul>
			</Card>

			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Less suitable</h3>
				<ul class="list-disc list-inside space-y-2 text-gray-700">
					<li>Representative surveys on a defined population</li>
					<li>High-cost fieldwork</li>
					<li>Work dependent on expensive infrastructure</li>
					<li>Work dependent on proprietary datasets the team cannot legally access</li>
				</ul>
			</Card>
		</div>

		<p class="text-gray-700">
			If quantitative validation is important, we can design a lightweight approach (e.g.,
			exploratory survey, interviews, triangulation with open data) or agree on what data your
			company can provide.
		</p>
	</Container>
</Section>

<!-- Writing a strong project brief -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Writing a strong project brief
		</h2>
		<p class="text-lg text-gray-700 mb-6">
			A strong brief is short, specific, and decision‑oriented. The best briefs:
		</p>
		<ul class="space-y-3 text-gray-700 text-lg">
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Define one clear challenge (not five)</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Explain why it matters and what decision it should support</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Clarify what information and stakeholders the team can access</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span
					>Specify what a "good outcome" looks like (deliverables + success criteria)</span
				>
			</li>
		</ul>
	</Container>
</Section>

<!-- Working with the team -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Working with the team</h2>
		<p class="text-lg text-gray-700 mb-4">
			Set a predictable cadence. A 30‑minute check‑in every 1–2 weeks is usually enough when the
			brief is clear.
		</p>
		<p class="text-lg text-gray-700">
			The mentor's role is to unblock access, validate assumptions, and help the team interpret
			findings in your context.
		</p>
	</Container>
</Section>

<!-- Data, confidentiality, and access -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Data, confidentiality, and access
		</h2>
		<p class="text-lg text-gray-700">
			Students can work with open data and open-access sources. If the project depends on internal
			data, the company should confirm what can be shared and under what conditions. Where needed,
			we can agree a lightweight confidentiality approach.
		</p>
	</Container>
</Section>

<!-- Timeline -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Timeline (operational view)</h2>
		<div class="space-y-4">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Kick‑off week</h3>
				<p class="text-gray-700">Briefing + alignment + action plan</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Remote phase (~2 months)</h3>
				<p class="text-gray-700">Check-ins + interim outputs</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Final week</h3>
				<p class="text-gray-700">Presentation to jury + wrap‑up</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Downloads & documents -->
<Section class="bg-blue-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Downloads & documents</h2>
		<p class="text-lg text-gray-700 mb-8">
			Download the templates and documents you need for your IPW partnership.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					1) Project brief form (blank template)
				</h3>
				<a
					href="{base}/downloads/partners/IPW_Project_Description_Template_blank.docx"
					class="text-blue-600 hover:text-blue-700 font-medium"
					download
				>
					Download DOCX →
				</a>
			</Card>

			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					2) Memorandum of cooperation (blank template)
				</h3>
				<a
					href="{base}/downloads/partners/IPW_Memorandum_of_Cooperation_Template_blank.docx"
					class="text-blue-600 hover:text-blue-700 font-medium"
					download
				>
					Download DOCX →
				</a>
			</Card>

			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-3">
					3) Donation agreement (blank template)
				</h3>
				<a
					href="{base}/downloads/partners/IPW_Donation_Agreement_Template_blank.docx"
					class="text-blue-600 hover:text-blue-700 font-medium"
					download
				>
					Download DOCX →
				</a>
			</Card>

			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-3">Optional: All templates (ZIP)</h3>
				<a
					href="{base}/downloads/partners/IPW_partner_downloads_templates.zip"
					class="text-blue-600 hover:text-blue-700 font-medium"
					download
				>
					Download ZIP →
				</a>
			</Card>
		</div>
	</Container>
</Section>

<!-- Contact -->
<Section class="bg-gray-900 text-white">
	<Container>
		<div class="text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">Contact (partners)</h2>
			<p class="text-xl mb-6">
				For onboarding, documents, and scheduling, contact: <a
					href="mailto:ipw@cvut.cz"
					class="text-blue-400 hover:text-blue-300 font-semibold">ipw@cvut.cz</a
				>
			</p>
		</div>
	</Container>
</Section>
