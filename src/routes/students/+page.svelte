<script lang="ts">
	import { base } from '$app/paths';
	import { Container, Section, Card, Button } from '$lib/components';

	const highlights = [
		'6 ECTS',
		'Real projects',
		'International teams',
		'Prague kick-off',
		'European mobility',
		'Final jury presentation'
	];

	const processSteps = [
		{
			num: '01',
			title: 'Send your application',
			desc: 'Complete the application form and upload your CV and any cohort-specific materials.'
		},
		{
			num: '02',
			title: 'Evaluation of documents',
			desc: 'We review the submitted materials and assess the overall fit of each candidate.'
		},
		{
			num: '03',
			title: 'Interview for selected candidates',
			desc: 'Suitable candidates are invited to a personal interview focused on motivation, skills, readiness for demanding teamwork, and project preferences.'
		},
		{
			num: '04',
			title: 'Decision and allocation',
			desc: 'During May and June, candidates are informed whether they have been accepted and admitted students are later assigned to projects and teams.'
		}
	];

	const faqItems = [
		{
			question: 'What happens after I submit my application?',
			answer:
				'We first evaluate the submitted documents. Based on the overall fit, selected candidates are invited to a personal interview where we verify motivation, relevant skills, readiness for demanding teamwork, and discuss their preferences. During May and June, candidates are informed whether they have been accepted or not accepted.'
		},
		{
			question: 'How much time does it take?',
			answer:
				'Plan for steady teamwork during the semester. As a rough guide, many students spend 3-6 hours per week on average, with heavier weeks around the kick-off, key milestones, and the final presentations.'
		},
		{
			question: 'Do I need prior work experience?',
			answer: 'No. Motivation, reliability, and willingness to learn matter most.'
		},
		{
			question: 'Can I choose my project?',
			answer:
				'You can usually share your preferences, but the final allocation is done by the IPW team to ensure balanced teams and a strong overall fit.'
		},
		{
			question: 'What about travel and costs?',
			answer:
				'Mobility costs such as accommodation, meals, and travel are covered either through funds such as Erasmus+ or from internal project resources, depending on the participant and the specific mobility setup.'
		}
	];
</script>

<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-12 -left-24 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl"></div>
		<div class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl"></div>
	</div>

	<Container class="relative z-10">
		<div class="mx-auto max-w-5xl text-center">
			<div class="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-700 shadow-lg backdrop-blur-sm">
				<span>Students</span>
				<span class="text-gray-300">|</span>
				<span>International Project Workshop</span>
			</div>

			<h1 class="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
				Join IPW as a student
			</h1>
			<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
				Work on a real company challenge in an international team, spend part of the semester in person
				with your peers, and turn the outcome into experience you can actually use.
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button href="{base}/apply" variant="gradient" size="lg" class="min-w-[220px] text-xl">
					Apply now
				</Button>
				<Button href="{base}/projects" variant="outline" size="lg">
					See example projects
				</Button>
			</div>

			<div class="mt-10 flex flex-wrap justify-center gap-3">
				{#each highlights as item}
					<span class="rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm">
						{item}
					</span>
				{/each}
			</div>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">
				<span class="text-gradient">What you will do</span>
			</h2>
			<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary-600 to-accent-600"></div>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			<Card class="group">
				<div class="flex items-start gap-4">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-xl font-bold text-white shadow-lg">
						01
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold text-gray-900">Work with a real brief</h3>
						<p class="leading-relaxed text-gray-600">
							You will join a small international team and work on a clearly defined challenge provided
							by a project partner.
						</p>
					</div>
				</div>
			</Card>

			<Card class="group">
				<div class="flex items-start gap-4">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 text-xl font-bold text-white shadow-lg">
						02
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold text-gray-900">Kick off in Prague</h3>
						<p class="leading-relaxed text-gray-600">
							Teams meet in person at the start, align on the task, get to know each other, and often
							visit the partner organization.
						</p>
					</div>
				</div>
			</Card>

			<Card class="group">
				<div class="flex items-start gap-4">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-xl font-bold text-white shadow-lg">
						03
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold text-gray-900">Collaborate through the semester</h3>
						<p class="leading-relaxed text-gray-600">
							You will plan the work, split responsibilities, and develop your output through regular
							online teamwork and milestone reviews.
						</p>
					</div>
				</div>
			</Card>

			<Card class="group">
				<div class="flex items-start gap-4">
					<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-xl font-bold text-white shadow-lg">
						04
					</div>
					<div>
						<h3 class="mb-3 text-xl font-bold text-gray-900">Present final results</h3>
						<p class="leading-relaxed text-gray-600">
							The semester ends with a final presentation to a jury, together with a report or another
							professional output your team has developed.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>

<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
			<Card>
				<h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">What you will learn</h2>
				<ul class="space-y-4 text-lg text-gray-700">
					<li>Framing a problem and defining a workable scope</li>
					<li>Finding and evaluating evidence from open sources, interviews, and data</li>
					<li>Turning insights into structured options and recommendations</li>
					<li>Communicating clearly with stakeholders</li>
					<li>Delivering as a team under real deadlines</li>
				</ul>
			</Card>

			<Card class="bg-gradient-to-br from-primary-600 to-accent-600 text-white">
				<h2 class="mb-6 text-3xl font-bold md:text-4xl">What you get</h2>
				<div class="space-y-5">
					<div>
						<h3 class="text-xl font-semibold">6 ECTS</h3>
						<p class="mt-1 text-white/90">For a substantial semester project with a real-world output.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold">International experience</h3>
						<p class="mt-1 text-white/90">You work across cultures, disciplines, and institutions.</p>
					</div>
					<div>
						<h3 class="text-xl font-semibold">Industry exposure</h3>
						<p class="mt-1 text-white/90">Your team interacts with practitioners and receives direct feedback.</p>
					</div>
				</div>
			</Card>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
			<Card>
				<h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Who should apply</h2>
				<ul class="space-y-4 text-lg text-gray-700">
					<li>You want to work on a real stakeholder problem in English.</li>
					<li>You enjoy teamwork and can handle deadlines responsibly.</li>
					<li>You are comfortable with ambiguity and learning by doing.</li>
					<li>You want a demanding but practical international experience.</li>
				</ul>
			</Card>

			<Card class="overflow-hidden">
				<div class="mb-6 flex items-center gap-4">
					<div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-2xl font-bold text-white shadow-lg">
						?
					</div>
					<div>
						<h2 class="text-3xl font-bold text-gray-900 md:text-4xl">How the application works</h2>
						<p class="mt-1 text-gray-600">Typical process for the upcoming cohort</p>
					</div>
				</div>

				<div class="space-y-5">
					{#each processSteps as step}
						<div class="flex items-start gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4">
							<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-primary-700 shadow-sm">
								{step.num}
							</div>
							<div>
								<h3 class="text-lg font-semibold text-gray-900">{step.title}</h3>
								<p class="mt-1 leading-relaxed text-gray-600">{step.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</Card>
		</div>
	</Container>
</Section>

<Section class="bg-gray-50">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">
				<span class="text-gradient">Projects you can expect</span>
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-gray-600">
				Projects vary by year, but they usually focus on producing a usable output within one semester,
				such as a strategy proposal, an implementation roadmap, a concept design, or a
				research-backed recommendation.
			</p>
			<div class="mt-8">
				<Button href="{base}/projects" variant="gradient" size="lg">Explore example projects</Button>
			</div>
		</div>
	</Container>
</Section>

<Section>
	<Container>
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">
				<span class="text-gradient">FAQ for students</span>
			</h2>
			<p class="mt-4 text-lg text-gray-600">A few practical questions we get most often.</p>
		</div>

		<div class="mx-auto max-w-4xl space-y-6">
			{#each faqItems as item}
				<Card>
					<h3 class="mb-3 text-xl font-bold text-gray-900">{item.question}</h3>
					<p class="leading-relaxed text-gray-600">{item.answer}</p>
				</Card>
			{/each}
		</div>
	</Container>
</Section>

<Section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
	<div class="absolute top-0 right-0 h-80 w-80 rounded-full bg-primary-500/10 blur-3xl"></div>
	<div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl"></div>

	<Container>
		<div class="relative text-center">
			<h2 class="text-3xl font-bold md:text-5xl">
				<span class="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
					Ready to apply?
				</span>
			</h2>
			<p class="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
				If IPW sounds like the kind of semester you want, start with the application form.
			</p>
			<div class="mt-8">
				<Button href="{base}/apply" variant="gradient" size="lg" class="min-w-[220px] text-xl">
					Apply now
				</Button>
			</div>
		</div>
	</Container>
</Section>
