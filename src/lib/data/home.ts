import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rohan';

export const lastName = 'Saindane';

export const description =
	'Full-stack engineer and open source contributor. I architect scalable web platforms and contribute to high-impact projects. Currently Head of Technology at JoinTheBridge and Open Source Developer at Meta. Passionate about engineering for social impact.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Ronisnotasianfr' },
	{
		platform: Platform.Linkedin,
		link: 'https://linkedin.com/in/lametalk'
	},
	{
		platform: Platform.Email,
		link: 'ronsaindane5917@gmail.com'
	}
];

export const skills = getSkills('js', 'ts', 'python', 'java', 'reactjs', 'nextjs', 'nodejs', 'css', 'html', 'tailwind', 'postgresql', 'git', 'github');
