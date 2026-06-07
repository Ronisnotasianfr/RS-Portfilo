import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'umd-poker-ai-research',
		color: '#5e95e3',
		description:
			'Conducted undergraduate-level CS research in collaboration with William Gararsch at the University of Maryland, applying game theory and probabilistic modeling to poker decision-making. Developed and tested algorithms for opponent modeling and optimal betting strategies, leveraging concepts from reinforcement learning and expected value computation. Analyzed large decision trees and Nash equilibrium approximations to improve agent performance in incomplete-information game environments.',
		shortDescription:
			'Poker AI using game theory and reinforcement learning to optimize betting strategies.',
		links: [],
		logo: Assets.UMD,
		name: 'UMD Research: Poker AI & Game Theory',
		period: {
			from: new Date(2025, 0, 1)
		},
		skills: getSkills('python', 'js', 'ts'),
		type: 'Research & AI'
	},
	{
		slug: 'bridge-nonprofit-platform',
		color: '#ff3e00',
		description:
			'Designed and deployed a scalable web platform for a nonprofit serving 500+ students, implementing authentication, dashboards, and content management systems. Optimized database queries and frontend rendering performance, improving page load time and user retention across mobile and desktop clients.',
		shortDescription:
			'Scalable web platform for nonprofit serving 500+ students with CMS and authentication.',
		links: [],
		logo: Assets.Bridge,
		name: 'BRIDGE Nonprofit Platform',
		period: {
			from: new Date(2026, 1, 1)
		},
		skills: getSkills('reactjs', 'nextjs', 'ts', 'css', 'html', 'tailwind', 'supabase', 'postgresql'),
		type: 'Web Application'
	},
	{
		slug: 'buck2-diagnostic-enhancement',
		color: '#4CAF50',
		description:
			'Independently identified and resolved a developer experience issue in Meta\'s production-grade build tool, improving diagnostic command usability for the global open-source community. Decoupled diagnostic workflows from internal Meta-specific services to enable seamless functionality in public environments.',
		shortDescription:
			'Enhanced Meta\'s Buck2 build tool diagnostic command for improved developer experience.',
		links: [],
		logo: Assets.Meta,
		name: 'Buck2 Diagnostic Tool Enhancement',
		period: {
			from: new Date(2026, 1, 1)
		},
		skills: getSkills('ts', 'js'),
		type: 'Open Source'
	}
];

export const title = 'Projects';
