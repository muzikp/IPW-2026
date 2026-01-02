<script lang="ts">
	import { Container, Section } from '$lib/components';
	import { base } from '$app/paths';

	let formData = {
		firstName: '',
		lastName: '',
		email: '',
		kodId: '',
		degreeProgram: '',
		yearOfStudy: '',
		englishLevel: '',
		motivation: '',
		erasmusParticipation: '',
		cvFile: null as File | null
	};

	let isSubmitting = false;
	let submitSuccess = false;
	let submitError = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		
		if (isSubmitting) return;
		
		// Validation
		if (!formData.firstName || !formData.lastName || !formData.email || !formData.kodId || 
		    !formData.degreeProgram || !formData.yearOfStudy || !formData.englishLevel || 
		    !formData.erasmusParticipation || !formData.cvFile) {
			submitError = 'Please fill in all required fields and upload your CV.';
			scrollToMessage();
			return;
		}

		if (formData.cvFile && formData.cvFile.type !== 'application/pdf') {
			submitError = 'CV must be a PDF file.';
			scrollToMessage();
			return;
		}

		if (formData.cvFile && formData.cvFile.size > 5 * 1024 * 1024) {
			submitError = 'CV file size must not exceed 5 MB.';
			scrollToMessage();
			return;
		}

		isSubmitting = true;
		submitError = '';
		submitSuccess = false;

		try {
			// Convert file to base64
			const fileBase64 = await new Promise<string>((resolve, reject) => {
				const reader = new FileReader();
				reader.onload = () => {
					const base64 = (reader.result as string).split(',')[1]; // Remove data:application/pdf;base64, prefix
					resolve(base64);
				};
				reader.onerror = reject;
				reader.readAsDataURL(formData.cvFile!);
			});

			// Prepare JSON payload according to API specification
			const payload = {
				fields: [
					{ rank: 1, property: 'recipientEmail', value: 'ipw@cvut.cz' },
					{ rank: 2, property: 'subject', value: 'IPW 2026 Application' },
					{ rank: 3, property: 'name', label: 'Name', value: `${formData.firstName} ${formData.lastName}` },
					{ rank: 4, property: 'email', label: 'Email', value: formData.email },
					{ rank: 5, property: 'kodId', label: 'KOD ID', value: formData.kodId },
					{ rank: 6, property: 'degreeProgram', label: 'Degree Programme', value: formData.degreeProgram },
					{ rank: 7, property: 'yearOfStudy', label: 'Year of Study', value: formData.yearOfStudy },
					{ rank: 8, property: 'englishLevel', label: 'English Level (CEFR)', value: formData.englishLevel },
					{ rank: 9, property: 'erasmusParticipation', label: 'Erasmus+ Participation (Winter 2026/2027)', value: formData.erasmusParticipation },
					{ rank: 10, property: 'message', label: 'Motivation', value: formData.motivation || 'Not provided' }
				],
				attachments: [
					{
						name: formData.cvFile.name,
						value: fileBase64
					}
				]
			};

			console.log('Submitting application:', {
				name: `${formData.firstName} ${formData.lastName}`,
				email: formData.email,
				fileName: formData.cvFile.name,
				fileSize: formData.cvFile.size
			});

			const response = await fetch('https://5dsrywp9e5.execute-api.eu-central-1.amazonaws.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			console.log('Response status:', response.status);
			const result = await response.json();
			console.log('Response result:', result);

			if (response.ok && result.success) {
				submitSuccess = true;
				// Scroll to message
				scrollToMessage();
				// Reset form
				formData = {
					firstName: '',
					lastName: '',
					email: '',
					kodId: '',
					degreeProgram: '',
					yearOfStudy: '',
					englishLevel: '',
					motivation: '',
					erasmusParticipation: '',
					cvFile: null
				};
				// Reset file input
				const fileInput = document.getElementById('cvFile') as HTMLInputElement;
				if (fileInput) fileInput.value = '';
			} else {
				submitError = result.message || 'Failed to submit application. Please try again.';
				// Scroll to error message
				scrollToMessage();
			}
		} catch (error) {
			console.error('Submission error:', error);
			// Check if it's a CORS error
			if (error instanceof TypeError && error.message.includes('fetch')) {
				submitError = 'There is a temporary technical issue with the submission system. Please try again later or contact ipw@cvut.cz directly.';
			} else {
				submitError = 'An error occurred while submitting your application. Please try again.';
			}
			// Scroll to error message
			scrollToMessage();
		} finally {
			isSubmitting = false;
		}
	}

	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files && target.files[0]) {
			formData.cvFile = target.files[0];
		}
	}

	function scrollToMessage() {
		// Use setTimeout to ensure DOM is updated
		setTimeout(() => {
			const messageEl = document.getElementById('form-message');
			if (messageEl) {
				messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}, 100);
	}
</script>

<svelte:head>
	<title>Apply Now - IPW</title>
	<meta name="description" content="Apply for International Project Workshop" />
</svelte:head>

<!-- Hero Section -->
<Section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
	<div class="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
	<div class="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
	
	<Container>
		<div class="relative text-center max-w-4xl mx-auto mb-8">
			<div class="inline-block mb-6">
				<div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center shadow-2xl mx-auto">
					<span class="text-4xl">📝</span>
				</div>
			</div>
			
			<h1 class="text-4xl md:text-6xl font-bold mb-6">
				<span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
					Apply to IPW
				</span>
			</h1>
			
			<p class="text-lg text-gray-600 mb-8">
				Ready to solve real company challenges in international teams? Fill out the application form below to join IPW 2026.
			</p>

			<!-- Back link -->
			<div class="mb-8">
				<a 
					href="{base}/"
					class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					Back to homepage
				</a>
			</div>
		</div>

		<!-- Form Container -->
		<div class="relative max-w-5xl mx-auto">
			<div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
				<!-- Application Form -->
				<form on:submit={handleSubmit} class="p-8 md:p-12">
					<div class="mb-8">
						<h2 class="text-2xl font-bold text-gray-900 mb-2">Recruitment Questionnaire</h2>
						<p class="text-gray-600">Fields marked with an asterisk (*) are required.</p>
					</div>

					<div id="form-message">
					{#if submitSuccess}
						<div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
							<div class="flex items-start gap-3">
								<svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<div>
									<h3 class="font-semibold text-green-900">Application submitted successfully!</h3>
									<p class="text-green-800 text-sm mt-1">We'll review your application and get back to you soon.</p>
								</div>
							</div>
						</div>
					{/if}

					{#if submitError}
						<div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
							<div class="flex items-start gap-3">
								<svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<div>
									<h3 class="font-semibold text-red-900">Error</h3>
									<p class="text-red-800 text-sm mt-1">{submitError}</p>
								</div>
							</div>
						</div>
					{/if}
					</div>

					<div class="space-y-6">
						<!-- First Name -->
						<div>
							<label for="firstName" class="block text-sm font-semibold text-gray-900 mb-2">
								1. First name *
							</label>
							<input
								id="firstName"
								type="text"
								bind:value={formData.firstName}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
								placeholder="Enter your first name"
							/>
						</div>

						<!-- Last Name -->
						<div>
							<label for="lastName" class="block text-sm font-semibold text-gray-900 mb-2">
								2. Last name *
							</label>
							<input
								id="lastName"
								type="text"
								bind:value={formData.lastName}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
								placeholder="Enter your last name"
							/>
						</div>

						<!-- Email -->
						<div>
							<label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
								3. Email address *
							</label>
							<input
								id="email"
								type="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
								placeholder="your.email@example.com"
							/>
						</div>

						<!-- KOD ID -->
						<div>
							<label for="kodId" class="block text-sm font-semibold text-gray-900 mb-2">
								4. Your KOD system ID (number) *
							</label>
							<input
								id="kodId"
								type="text"
								bind:value={formData.kodId}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
								placeholder="Enter your KOD ID"
							/>
						</div>

						<!-- Degree Programme -->
						<div class="p-4 border border-gray-200 rounded-xl">
							<label class="block text-base font-semibold text-gray-900 mb-3">
								5. Degree programme *
							</label>
							<div class="space-y-2">
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.degreeProgram}
										value="Bachelor's"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">Bachelor's</span>
								</label>
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.degreeProgram}
										value="Master's"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">Master's</span>
								</label>
							</div>
						</div>

						<!-- Year of Study -->
						<div class="p-4 border border-gray-200 rounded-xl">
							<label class="block text-base font-semibold text-gray-900 mb-3">
								6. Year of study *
							</label>
							<div class="space-y-2">
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.yearOfStudy}
										value="1st year"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">1st year</span>
								</label>
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.yearOfStudy}
										value="2nd year"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">2nd year</span>
								</label>
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.yearOfStudy}
										value="3rd year or higher"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">3rd year or higher</span>
								</label>
							</div>
						</div>

						<!-- English Level -->
						<div class="p-4 border border-gray-200 rounded-xl">
							<label class="block text-base font-semibold text-gray-900 mb-3">
								7. What is your English level? * <span class="text-sm font-normal text-gray-600">(CEFR)</span>
							</label>
							<div class="space-y-2">
								<label class="flex items-start gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.englishLevel}
										value="B1 (Intermediate)"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500 mt-1"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">B1 (Intermediate)</div>
										<div class="text-xs text-gray-600">Can handle everyday situations, write simple texts, follow the main points of clear standard speech</div>
									</div>
								</label>
								<label class="flex items-start gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.englishLevel}
										value="B2 (Upper-intermediate)"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500 mt-1"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">B2 (Upper-intermediate)</div>
										<div class="text-xs text-gray-600">Can communicate fluently in most situations, understand complex texts, write clear detailed texts</div>
									</div>
								</label>
								<label class="flex items-start gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.englishLevel}
										value="C1 (Advanced)"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500 mt-1"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">C1 (Advanced)</div>
										<div class="text-xs text-gray-600">Can use English effectively for academic/professional purposes, understand demanding texts, express ideas fluently</div>
									</div>
								</label>
								<label class="flex items-start gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.englishLevel}
										value="C2 (Proficient)"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500 mt-1"
									/>
									<div>
										<div class="text-sm font-medium text-gray-900">C2 (Proficient)</div>
										<div class="text-xs text-gray-600">Near-native level, can understand virtually everything heard/read and express meaning precisely</div>
									</div>
								</label>
							</div>
						</div>

						<!-- Motivation -->
						<div>
							<label for="motivation" class="block text-sm font-semibold text-gray-900 mb-2">
								8. In your own words, please describe why you would like to take part in IPW
							</label>
							<textarea
								id="motivation"
								bind:value={formData.motivation}
								rows="5"
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-y"
								placeholder="Share your motivation..."
							></textarea>
						</div>

						<!-- Erasmus Participation -->
						<div class="p-4 border border-gray-200 rounded-xl">
							<label class="block text-base font-semibold text-gray-900 mb-3">
								9. Do you expect to participate in another Erasmus+ programme during the winter semester of the academic year 2026/2027? *
							</label>
							<div class="space-y-2">
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.erasmusParticipation}
										value="No"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">No</span>
								</label>
								<label class="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
									<input
										type="radio"
										bind:group={formData.erasmusParticipation}
										value="Yes"
										required
										class="w-4 h-4 text-primary-600 focus:ring-primary-500"
									/>
									<span class="text-sm text-gray-700">Yes</span>
								</label>
							</div>
						</div>

						<!-- CV Upload -->
						<div>
							<label for="cvFile" class="block text-sm font-semibold text-gray-900 mb-2">
								10. Please upload your CV (structured format) *
							</label>
							<div class="text-sm text-gray-600 mb-2">PDF format, max 5 MB</div>
							<input
								id="cvFile"
								type="file"
								accept="application/pdf"
								on:change={handleFileChange}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
							/>
							{#if formData.cvFile}
								<div class="mt-2 text-sm text-gray-600">
									Selected: {formData.cvFile.name} ({(formData.cvFile.size / 1024 / 1024).toFixed(2)} MB)
								</div>
							{/if}
						</div>
					</div>

					<!-- Submit Button -->
					<div class="mt-8 pt-8 border-t border-gray-200">
						<button
							type="submit"
							disabled={isSubmitting}
							class="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
						>
							{#if isSubmitting}
								<span class="flex items-center justify-center gap-2">
									<svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Submitting...
								</span>
							{:else}
								Submit Application
							{/if}
						</button>
					</div>
				</form>
			</div>

			<!-- Info Card Below Form -->
			<div class="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl">
						ℹ️
					</div>
					<div>
						<h3 class="text-lg font-bold text-gray-900 mb-2">What happens next?</h3>
						<ul class="space-y-2 text-gray-600">
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">1.</span>
								<span>We'll review your application carefully</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">2.</span>
								<span>Shortlisted candidates will be invited for an interview in English</span>
							</li>
							<li class="flex items-start gap-2">
								<span class="text-primary-600 font-bold">3.</span>
								<span>Selected students will be notified about admission and team allocation</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</Container>
</Section>

<!-- Additional Info -->
<Section class="bg-gradient-to-br from-gray-50 to-white">
	<Container>
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">
				<span class="text-gradient">Questions?</span>
			</h2>
			<p class="text-lg text-gray-600 mb-8">
				If you have any questions about the application process, feel free to reach out to us.
			</p>
			<a 
				href="{base}/contact"
				class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
			>
				<span>Contact Us</span>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</Container>
</Section>
