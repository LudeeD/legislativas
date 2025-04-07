import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type SorDoutor = {
	sexo: string;
	name: string;
	wikipedia: string;
	summary: string;
	sordoutor: boolean;
	img: string;
};

export const load: PageLoad = ({ params }) => {
	const data: {
		[year: number]: SorDoutor[];
	} = {
		2022: [
			{
				sexo: 'masculino',
				name: 'Rui Tavares',
				wikipedia: 'https://pt.wikipedia.org/wiki/Rui_Tavares#Biografia',
				summary:
					'Licenciou-se em História, variante de História da Arte, pela Universidade Nova de Lisboa, e <u >doutorou-se em História, pela École des Hautes Études en Sciences Sociales de Paris</u >. É especialista em história e cultura do século XVIII.',
				sordoutor: true,
				img: '/images/rui.png'
			},
			{
				sexo: 'feminino',
				name: 'Catarina Martins',
				wikipedia: 'https://pt.wikipedia.org/wiki/Catarina_Martins#Vida_pessoal',
				summary:
					'Fez a primeira classe em São Tomé (...) a segunda e terceira classes em Cabo Verde. Regressa a Portugal aos nove anos e vive em cidades como Aveiro, Vila Nova de Gaia e Lisboa. Licenciada em Línguas e Literaturas Modernas, tem um mestrado em Linguística e <u>frequência de doutoramento</u> em Didática das Línguas.',
				sordoutor: false,
				img: '/images/rui.png'
			}
		]
	};

	const year = parseInt(params.year);

	if (!data[year]) {
		error(404, 'Not found');
	}

	// Shuffle the data array using Fisher-Yates algorithm
	const shuffleArray = (array: SorDoutor[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	return {
		data: shuffleArray([...data[year]])
	};
};
