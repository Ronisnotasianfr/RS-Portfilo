import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'High School Diploma',
		description: 'Honors Roll recipient. Active member of DECA, MCR-SGA Gender Equity Task Force, and Student Climate Action Council (SCAC). Relevant coursework: AP Computer Science A (Java), AP Calculus BC, AP Statistics, Data Structures, Algorithms.',
		location: 'Germantown, MD',
		logo: Assets.Coyotes,
		name: 'Clarksburg High School',
		organization: 'Clarksburg High School',
		period: { from: new Date(2023, 0, 1), to: new Date(2027, 6, 1) },
		shortDescription: 'High School Diploma with Honors',
		slug: 'clarksburg-high-school',
		subjects: ['Java', 'AP Computer Science A', 'AP Calculus BC', 'AP Statistics', 'Data Structures', 'Algorithms']
	}
];

export const title = 'Education';
