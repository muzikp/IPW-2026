<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Button } from '$lib/components';
</script>

<svelte:head>
	<title>Companies - IPW</title>
</svelte:head>

<!-- Hero -->
<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
				Partner with IPW as a company
			</h1>
			<p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
				Bring a real business challenge. We will match you with an international student team
				supported by academic supervision—so you receive a structured analysis and actionable
				recommendations.
			</p>
			<Button href="{base}/contact">Propose a project</Button>
		</div>
	</Container>
</Section>

<!-- What you get -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What you get</h2>
		<div class="prose prose-lg max-w-none mb-6">
			<p>
				IPW gives you a focused, time‑boxed project with a motivated team that treats your challenge
				seriously. Our company partners are often <strong
					>local or global leaders in their fields</strong
				>—from names like Mattoni 1873, Novartis, and TotalEnergies to past partners such as L'Oréal
				(examples vary by cohort).
			</p>
			<p>You typically receive:</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<p class="text-gray-700">A clear problem framing and structured analysis</p>
			</Card>
			<Card>
				<p class="text-gray-700">A set of recommendations you can discuss internally</p>
			</Card>
			<Card>
				<p class="text-gray-700">
					A final report and presentation suitable for decision-making
				</p>
			</Card>
			<Card>
				<p class="text-gray-700">
					Visibility among talented students and an opportunity to strengthen your employer brand
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- What we need from you -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What we need from you</h2>
		<p class="text-lg text-gray-700 mb-6">
			To make the collaboration work smoothly, we ask for a few essentials:
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">A concrete challenge</h3>
				<p class="text-gray-700">A question that can be meaningfully explored within one semester.</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">A mentor contact</h3>
				<p class="text-gray-700">
					Someone who can meet the team regularly (short check‑ins are usually enough).
				</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Basic access</h3>
				<p class="text-gray-700">Context, stakeholders, and/or data you can legally share.</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Kick‑off engagement</h3>
				<p class="text-gray-700">
					Ideally a briefing and, where feasible, a meeting or visit during the kick‑off week.
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- What the team delivers -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What the team delivers</h2>
		<p class="text-lg text-gray-700 mb-6">
			Teams deliver professional outputs you can use:
		</p>
		<ul class="space-y-3 text-gray-700 text-lg">
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span><strong>Final report:</strong> analysis, evidence, options, and recommendations</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span
					><strong>Final presentation deck:</strong> concise storyline and key takeaways</span
				>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span
					>Optional add‑ons: frameworks, roadmaps, concept proposals, methodology notes</span
				>
			</li>
		</ul>
	</Container>
</Section>

<!-- What makes a great IPW project -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			What makes a great IPW project
		</h2>
		<p class="text-lg text-gray-700 mb-6">
			The best projects combine a real decision context with a feasible scope.
		</p>
		<p class="text-lg text-gray-700 mb-6">A great IPW project is:</p>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Clear in scope</h3>
				<p class="text-gray-700">A question that fits ~10–12 weeks of work</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Supported with access</h3>
				<p class="text-gray-700">Context, interviews, or data you can share</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Meaningful in impact</h3>
				<p class="text-gray-700">Something you genuinely want to move forward</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Deliverable-driven</h3>
				<p class="text-gray-700">
					Recommendations, a roadmap, a concept, or an evaluation
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Partner guide -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Partner guide (for confirmed partners)
		</h2>
		<p class="text-lg text-gray-700 mb-6">
			Some details (practical limits, templates, and onboarding steps) are most useful <strong
				>after</strong
			> a company becomes a confirmed partner. We therefore keep them in a dedicated <strong
				>Partner Guide</strong
			> (page or downloadable PDF) to keep this public page concise.
		</p>
		<Button href="{base}/partners">Partner Guide + downloads (for confirmed partners)</Button>
	</Container>
</Section>

<!-- Project brief template -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Project brief template (copy/paste)
		</h2>
		<p class="text-lg text-gray-700 mb-6">
			Use the template below to propose a project. Short and clear works best.
		</p>
		<Card>
			<div class="space-y-4 text-gray-700 font-mono text-sm">
				<p><strong>Company:</strong></p>
				<p><strong>Background (5–8 lines):</strong></p>
				<p><strong>Challenge / key question (1–2 lines):</strong></p>
				<p><strong>Why it matters (3–5 lines):</strong></p>
				<p><strong>What you can provide (data, interviews, context):</strong></p>
				<p><strong>Constraints (legal, time, geography, confidentiality):</strong></p>
				<p><strong>Desired deliverables (ranked):</strong></p>
				<p><strong>Mentor contact + availability:</strong></p>
			</div>
		</Card>
	</Container>
</Section>

<!-- Timeline -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Timeline (high-level)</h2>
		<p class="text-lg text-gray-700 mb-6">
			The exact dates differ by cohort, but the project lifecycle is consistent:
		</p>
		<div class="space-y-4">
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					Project proposals (early year)
				</h3>
				<p class="text-gray-700">Companies submit briefs and agree on scope</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					Selection (spring / early summer)
				</h3>
				<p class="text-gray-700">
					Student recruitment and interviews across partner universities
				</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Kick‑off week</h3>
				<p class="text-gray-700">Briefing + alignment + action plan; company meeting/visit</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Remote phase (~2 months)</h3>
				<p class="text-gray-700">Regular check-ins and interim outputs</p>
			</Card>
			<Card>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">Final week (abroad)</h3>
				<p class="text-gray-700">Jury presentation + wrap‑up</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Financial contribution -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
			Financial contribution (optional)
		</h2>
		<p class="text-lg text-gray-700">
			Some cohorts may ask companies for a financial contribution to support course delivery
			(travel, venues, and organisational costs). If applicable, details are provided during the
			onboarding conversation and confirmed in the cooperation documents.
		</p>
	</Container>
</Section>

<!-- Contact -->
<Section class="bg-blue-50">
	<Container>
		<div class="text-center">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
			<p class="text-lg text-gray-700 mb-6">
				Email: <a href="mailto:ipw@cvut.cz" class="text-blue-600 hover:text-blue-700"
					>ipw@cvut.cz</a
				>
			</p>
			<Button href="{base}/contact">Talk to the IPW team</Button>
		</div>
	</Container>
</Section>
