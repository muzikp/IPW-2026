<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Button, Callout } from '$lib/components';
</script>

<svelte:head>
	<title>Students - IPW</title>
</svelte:head>

<!-- Hero -->
<Section class="bg-gradient-to-br from-blue-50 to-indigo-100">
	<Container>
		<div class="text-center">
			<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join IPW as a student</h1>
			<p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
				Solve a real company challenge in an international team, travel abroad with Erasmus+, and
				earn 6 ECTS.
			</p>
			<Button href="{base}/contact">How to apply</Button>
		</div>
	</Container>
</Section>

<!-- What you will do -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What you will do</h2>
		<div class="prose prose-lg max-w-none mb-8">
			<p>
				You will join a small, international team and work on a clearly defined challenge provided
				by a partner company. With support from an academic tutor and a company mentor, your team
				will turn an open question into a structured recommendation.
			</p>
			<p>In practice, you will:</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<p class="text-gray-700">
					Align with the company during kick‑off week in Prague (often including a company visit)
				</p>
			</Card>
			<Card>
				<p class="text-gray-700">Plan the work and split responsibilities</p>
			</Card>
			<Card>
				<p class="text-gray-700">
					Collaborate online during the semester with regular checkpoints
				</p>
			</Card>
			<Card>
				<p class="text-gray-700">
					Deliver a final report and present your results to a jury of tutors and company
					representatives during the final week abroad
				</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- What you will learn -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What you will learn</h2>
		<p class="text-lg text-gray-700 mb-6">
			IPW is designed to teach the "full cycle" of applied problem‑solving:
		</p>
		<ul class="space-y-3 text-gray-700 text-lg">
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Framing a problem and defining a workable scope</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span
					>Finding and evaluating evidence (open sources, interviews, data the company can provide)</span
				>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Turning insights into options and recommendations</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Communicating clearly to stakeholders</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Delivering as a team under time constraints</span>
			</li>
		</ul>
	</Container>
</Section>

<!-- What you get -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What you get</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">6 ECTS</h3>
				<p class="text-gray-700">For a portfolio‑ready project outcome</p>
			</Card>
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">International experience</h3>
				<p class="text-gray-700">And teamwork across cultures</p>
			</Card>
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">Industry exposure</h3>
				<p class="text-gray-700">Through direct work with a company partner</p>
			</Card>
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-2">Professional feedback</h3>
				<p class="text-gray-700">From academics and practitioners</p>
			</Card>
		</div>
	</Container>
</Section>

<!-- Who should apply -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who should apply</h2>
		<p class="text-lg text-gray-700 mb-4">IPW is a good fit if you:</p>
		<ul class="space-y-3 text-gray-700 text-lg">
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Are motivated to work on a real stakeholder problem (in English)</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Enjoy teamwork and can manage deadlines</span>
			</li>
			<li class="flex items-start gap-3">
				<span class="text-blue-600 mt-1">✓</span>
				<span>Are comfortable with ambiguity and learning by doing</span>
			</li>
		</ul>
	</Container>
</Section>

<!-- How to apply -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to apply</h2>
		<Card class="mb-8">
			<h3 class="text-xl font-semibold text-gray-900 mb-4">Process (typical)</h3>
			<ol class="space-y-4 text-gray-700">
				<li>
					<strong>1. Application:</strong> submit the application form + CV (and any cohort‑specific
					documents).
				</li>
				<li><strong>2. Shortlisting:</strong> selected candidates are invited to an interview.</li>
				<li>
					<strong>3. Interview (in English):</strong> we assess motivation, teamwork readiness, relevant
					skills, and language ability.
				</li>
				<li>
					<strong>4. Decision:</strong> you will be informed whether you are admitted.
				</li>
				<li>
					<strong>5. Project allocation:</strong> organisers assign admitted students to specific projects
					and teams.
				</li>
			</ol>
		</Card>

		<Card class="mb-8">
			<h3 class="text-xl font-semibold text-gray-900 mb-4">Key dates (placeholders)</h3>
			<ul class="space-y-2 text-gray-700">
				<li><strong>Application opens:</strong> [date]</li>
				<li><strong>Deadline:</strong> [date]</li>
				<li><strong>Interviews:</strong> [range]</li>
				<li><strong>Results:</strong> [date]</li>
			</ul>
		</Card>

		<Button href="{base}/contact">Apply now / Application details</Button>
	</Container>
</Section>

<!-- Projects you can expect -->
<Section class="bg-gray-50">
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Projects you can expect</h2>
		<p class="text-lg text-gray-700 mb-6">
			Projects vary by company and year, but they usually focus on producing a usable output within
			one semester—such as a strategy proposal, an implementation roadmap, a concept design, or a
			research-backed recommendation.
		</p>
		<Button href="{base}/projects">Explore example projects</Button>
	</Container>
</Section>

<!-- FAQ -->
<Section>
	<Container>
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">FAQ (students)</h2>
		<div class="space-y-6">
			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">How much time does it take?</h3>
				<p class="text-gray-700">
					Plan for steady teamwork during the semester. As a rough guide, many students spend <strong
						>3–6 hours per week</strong
					> on average, with heavier weeks around kick‑off, key milestones, and the final presentations.
				</p>
			</Card>

			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">
					Do I need prior work experience?
				</h3>
				<p class="text-gray-700">
					No. Motivation, reliability, and willingness to learn matter most.
				</p>
			</Card>

			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">Can I choose my project?</h3>
				<p class="text-gray-700">
					You can usually share preferences, but final allocation is done by the IPW team to ensure
					balanced teams and a good fit.
				</p>
			</Card>

			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">What about travel and costs?</h3>
				<p class="text-gray-700">
					IPW includes at least one trip abroad. Erasmus+ typically covers a substantial part of
					mobility costs, but cohort-specific rules apply. Some costs may need to be pre-financed
					and reimbursed later. Full details are provided with the application information.
				</p>
			</Card>

			<Card>
				<h3 class="text-xl font-semibold text-gray-900 mb-3">
					How is the Erasmus+ mobility funded (CTU students)?
				</h3>
				<p class="text-gray-700 mb-4">
					For CTU students, the grant for short-term mobility typically combines:
				</p>
				<ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
					<li><strong>Individual support per day</strong> (for the physical mobility period)</li>
					<li><strong>Travel support</strong> based on the distance band</li>
					<li>Optional <strong>top-ups</strong> (e.g., green travel; fewer opportunities)</li>
				</ul>
				<Callout type="info" class="mb-4">
					<p class="font-semibold mb-2">Example (indicative): Prague → Görlitz, 5 days</p>
					<ul class="list-disc list-inside space-y-1 text-sm">
						<li>Individual support: 5 × 79 € = <strong>395 €</strong></li>
						<li>
							Travel support (100–499 km band): <strong>211 €</strong> (or <strong>285 €</strong> with
							green travel)
						</li>
						<li>
							Total (indicative): <strong>606 €</strong> (or <strong>680 €</strong> with green travel)
						</li>
					</ul>
				</Callout>
				<p class="text-gray-700 mb-2">
					Exact rules and rates are set per year and may vary by call and faculty. CTU students
					should consult the official Erasmus+ guidance and contact the mobility office early if
					they have Erasmus mobility in the same semester.
				</p>
				<p class="text-sm text-gray-600">
					<strong>Mobility contact (CTU):</strong> Mgr. Gabriela Dohnalová (International Office, exchange
					programmes)
				</p>
			</Card>
		</div>
	</Container>
</Section>
