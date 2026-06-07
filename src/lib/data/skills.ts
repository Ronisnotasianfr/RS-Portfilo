import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description: 'Modern JavaScript (ES6+) for building interactive and dynamic web applications with clean, maintainable code.',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description: 'TypeScript for type-safe, scalable applications with improved developer experience and code reliability.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: 'Java for building robust, scalable applications with strong OOP principles and extensive ecosystem.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python for backend development, AI/ML, and scripting with FastAPI for modern async web frameworks.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS3 for responsive, accessible, and beautifully styled web applications with modern layout techniques.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML5 for semantic, accessible markup that forms the foundation of modern web applications.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description: 'Sass for more powerful and maintainable stylesheets with variables, nesting, and mixins.',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description: 'Tailwind CSS for rapid UI development with utility-first CSS and consistent design systems.',
		logo: Assets.Tailwind,
		name: 'Tailwind CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React for building dynamic, component-based user interfaces with efficient rendering and state management.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'library'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description: 'Next.js for full-stack React applications with SSR, SSG, API routes, and optimized performance.',
		logo: Assets.Vite,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js for building fast, scalable backend services with JavaScript runtime.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'teal',
		description: 'FastAPI for building modern, high-performance Python APIs with automatic documentation.',
		logo: Assets.FastApi,
		name: 'FastAPI',
		category: 'framework'
	}),
	defineSkill({
		slug: 'supabase',
		color: 'green',
		description: 'Supabase for open-source Firebase alternative with PostgreSQL backend and real-time features.',
		logo: Assets.PostgreSQL,
		name: 'Supabase',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL for reliable, feature-rich relational database management.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: 'Firebase for real-time databases, authentication, and cloud services.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'sql',
		color: 'red',
		description: 'SQL for querying and managing relational databases efficiently.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Git for version control and collaborative development workflows.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'github',
		color: 'black',
		description: 'GitHub for repository hosting, collaboration, and CI/CD pipelines.',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: 'VS Code for modern, powerful code editing and development environment.',
		logo: Assets.VsCode,
		name: 'VS Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vercel',
		color: 'black',
		description: 'Vercel for deploying and hosting modern web applications with optimal performance.',
		logo: Assets.Vercel,
		name: 'Vercel',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'cicd',
		color: 'purple',
		description: 'CI/CD Pipelines for automated testing, building, and deployment workflows.',
		logo: Assets.Docker,
		name: 'CI/CD Pipelines',
		category: 'devops'
	}),
	defineSkill({
		slug: 'linux',
		color: 'orange',
		description: 'Linux and Bash for command-line development and server management.',
		logo: Assets.Linux,
		name: 'Linux/Bash',
		category: 'devtools'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
