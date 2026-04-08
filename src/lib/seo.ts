const SITE_URL = 'https://ipw.muvs.cvut.cz';
const DEFAULT_TITLE = 'International Project Workshop | IPW at MIAS CTU';
const DEFAULT_DESCRIPTION =
	'International Project Workshop (IPW) at Masaryk Institute of Advanced Studies, CTU in Prague, connects students, universities, and companies through real international projects.';
const DEFAULT_KEYWORDS = [
	'IPW',
	'International Project Workshop',
	'MIAS CTU',
	'CTU MIAS',
	'Masaryk Institute of Advanced Studies',
	"Masaryk's Institute of Advanced Studies",
	'Masarykův ústav vyšších studií',
	'CTU in Prague',
	'MUVS CVUT',
	'MUVS ČVUT',
	'international student projects',
	'company challenges',
	'project workshop Prague',
	'business projects for students',
	'international teams',
	'Erasmus project'
];

type SeoEntry = {
	title: string;
	description: string;
	keywords?: string[];
	robots?: string;
};

const seoByPath: Record<string, SeoEntry> = {
	'/': {
		title: DEFAULT_TITLE,
		description:
			'Join IPW at MIAS CTU and work on real company challenges in international student teams. Explore projects, applications, and partnerships across Europe.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'international project workshop Prague',
			'student consulting projects',
			'European university collaboration'
		]
	},
	'/students': {
		title: 'For Students | International Project Workshop',
		description:
			'Discover how students join IPW, work on real company assignments, earn credits, and collaborate in international teams during the semester.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'IPW students',
			'student application Prague',
			'international semester project'
		]
	},
	'/apply': {
		title: 'Apply to IPW | International Project Workshop at MIAS CTU',
		description:
			'Apply to the International Project Workshop at MIAS CTU. Submit your application, CV, and motivation to join the next international project cohort.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'apply to IPW',
			'IPW application',
			'CTU student application'
		]
	},
	'/projects': {
		title: 'Projects | International Project Workshop',
		description:
			'Browse selected IPW projects and real company challenges solved by international student teams for corporate and institutional partners.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'IPW projects',
			'student business projects',
			'company challenge examples'
		]
	},
	'/about': {
		title: 'About IPW | Team and Tutors',
		description:
			'Meet the organizers, tutors, and academic partners behind the International Project Workshop at Masaryk Institute of Advanced Studies, CTU in Prague.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'IPW team',
			'IPW tutors',
			'Masaryk Institute of Advanced Studies'
		]
	},
	'/contact': {
		title: 'Contact | International Project Workshop',
		description:
			'Contact the International Project Workshop team at MIAS CTU for student applications, company collaboration, university partnerships, and mobility questions.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'IPW contact',
			'MUVS contact',
			'CTU Prague contact'
		]
	},
	'/partners': {
		title: 'Partner Guide | International Project Workshop',
		description:
			'Partner resources, templates, and onboarding documents for organizations collaborating with the International Project Workshop.',
		keywords: [
			...DEFAULT_KEYWORDS,
			'IPW partners',
			'partner guide',
			'project partnership documents'
		],
		robots: 'noindex,follow'
	}
};

function normalizePath(pathname: string) {
	if (pathname.length > 1 && pathname.endsWith('/')) {
		return pathname.slice(0, -1);
	}

	return pathname;
}

export function getSeo(pathname: string) {
	const normalizedPath = normalizePath(pathname);
	const entry = seoByPath[normalizedPath] ?? {
		title: DEFAULT_TITLE,
		description: DEFAULT_DESCRIPTION
	};
	const canonicalPath = normalizedPath === '/' ? '' : normalizedPath;

	return {
		...entry,
		keywords: (entry.keywords ?? DEFAULT_KEYWORDS).join(', '),
		robots: entry.robots ?? 'index,follow',
		canonical: `${SITE_URL}${canonicalPath}`,
		siteUrl: SITE_URL
	};
}

export const sitemapPages = ['/', '/students', '/apply', '/projects', '/about', '/contact'];
