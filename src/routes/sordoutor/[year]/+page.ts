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
				img: '/images/catarina.png'
			},
			{
				sexo: 'masculino',
				name: 'António Costa',
				wikipedia:
					'https://pt.wikipedia.org/wiki/Ant%C3%B3nio_Costa#Inf%C3%A2ncia_e_educa%C3%A7%C3%A3o',
				summary:
					'Licenciado em Direito pela Faculdade de Direito da Universidade de Lisboa, foi dirigente associativo da Associação Académica desta Faculdade (AAFDL, 1982–1984) e diretor da Revista da AAFDL (1986–1987). Obteve posteriormente <u>uma pós-graduação em Estudos Europeus</u>, no Instituto Europeu da Universidade Católica Portuguesa.',
				sordoutor: false,
				img: '/images/costa.png'
			},
			{
				sexo: 'feminino',
				name: 'Inês Sousa Real',
				wikipedia: 'https://pt.wikipedia.org/wiki/In%C3%AAs_Sousa_Real#Biografia',
				summary:
					'Licenciada em Direito pela Universidade Autónoma de Lisboa, reúne <u>pós-graduações em Ciências Jurídico-políticas e Contencioso Administrativo</u>. Mestre em Direito Animal e Sociedade, pela Universidade Autónoma de Barcelona (...) Em 2018 integrou o corpo docente do Mestrado em Direito Animal e Sociedade da Universidade Autónoma de Barcelona.',
				sordoutor: false,
				img: '/images/ines.png'
			},
			{
				sexo: 'masculino',
				name: 'Jerónimo de Sousa',
				wikipedia: 'https://pt.wikipedia.org/wiki/Jer%C3%B3nimo_de_Sousa#Biografia',
				summary:
					'Jerónimo de Sousa frequentou o antigo Curso Industrial, em Vila Franca de Xira, e <u>começou a trabalhar aos 14 anos</u> como afinador de máquinas, na MEC - Fábrica de Aparelhagem Industrial. Foi Delegado Sindical nessa fábrica, chegando à Direção do Sindicato dos Metalúrgicos de Lisboa em 1973.',
				sordoutor: false,
				img: '/images/camarada.png'
			},
			{
				sexo: 'masculino',
				name: 'João Cotrim de Figueiredo',
				wikipedia: 'https://pt.wikipedia.org/wiki/Jo%C3%A3o_Cotrim_de_Figueiredo',
				summary:
					'Estudou na Escola Alemã de Lisboa, seguindo-se a graduação em Economia na London School of Economics. De regresso a Lisboa, <u>tirou um MBA em Administração, Negócios e Marketing na Faculdade de Economia da Universidade Nova de Lisboa</u>.',
				sordoutor: false,
				img: '/images/cotrim.png'
			},
			{
				sexo: 'masculino',
				name: 'Rui Rio',
				wikipedia: 'https://pt.wikipedia.org/wiki/Rui_Rio#Carreira_acad%C3%A9mica',
				summary:
					'Estudou no Colégio Alemão do Porto (Deutsche Schule zu Porto) e <u>licenciou-se em Economia</u>, na Faculdade de Economia da Universidade do Porto, onde foi membro do Conselho Pedagógico e presidente da Associação de Estudantes. A sua direção constituiu, desde sempre, a primeira associação de estudantes de uma Faculdade de Economia do País sem maioria comunista.',
				sordoutor: false,
				img: '/images/rio.png'
			},
			{
				sexo: 'masculino',
				name: 'André Ventura',
				wikipedia:
					'https://pt.wikipedia.org/wiki/Andr%C3%A9_Ventura#Educa%C3%A7%C3%A3o_e_Juventude',
				summary:
					'Licenciou-se em Direito pela Faculdade de Direito da Universidade Nova de Lisboa (...) Em 2013, <u>defendeu a tese de doutoramento em Direito Público pela Faculdade de Direito da Universidade de Cork</u>, na Irlanda (...) Nesta, criticou o "populismo penal" e "estigmatização de minorias", revelando preocupação com a "expansão dos poderes policiais".',
				sordoutor: true,
				img: '/images/ventura.png'
			},
			{
				sexo: 'masculino',
				name: 'Francisco Rodrigues dos Santos',
				wikipedia:
					'https://pt.wikipedia.org/wiki/Francisco_Rodrigues_dos_Santos#Vida_pessoal_e_profissional',
				summary:
					'Frequentou o ensino básico e secundário no Colégio Militar (...) Enquanto estudante na Faculdade de Direito da Universidade de Lisboa, onde se <u>formou em Direito</u> (...).',
				sordoutor: false,
				img: '/images/xicao.png'
			}
		],
		2024: [
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
				name: 'Mariana Mortágua',
				wikipedia: 'https://pt.wikipedia.org/wiki/Mariana_Mort%C3%A1gua',
				summary:
					'É licenciada e mestre em Economia, pelo ISCTE - Instituto Universitário de Lisboa, tendo terminado o <u>doutoramento em Economia na School of Oriental and African Studies (SOAS) da Universidade de Londres.</u>',
				sordoutor: true,
				img: '/images/mariana.png'
			},
			{
				sexo: 'masculino',
				name: 'Pedro Nuno Santos',
				wikipedia: 'https://pt.wikipedia.org/wiki/Pedro_Nuno_Santos',
				summary:
					'do Instituto Superior de Economia e Gestão da Universidade Técnica de Lisboa e Membro da Direção da Associação de Estudantes do mesmo,<u>onde se licenciou em Economia.</u>',
				sordoutor: false,
				img: '/images/pedro.png'
			},
			{
				sexo: 'feminino',
				name: 'Inês Sousa Real',
				wikipedia: 'https://pt.wikipedia.org/wiki/In%C3%AAs_Sousa_Real#Biografia',
				summary:
					'Licenciada em Direito pela Universidade Autónoma de Lisboa, reúne <u>pós-graduações em Ciências Jurídico-políticas e Contencioso Administrativo</u>. Mestre em Direito Animal e Sociedade, pela Universidade Autónoma de Barcelona (...) Em 2018 integrou o corpo docente do Mestrado em Direito Animal e Sociedade da Universidade Autónoma de Barcelona.',
				sordoutor: false,
				img: '/images/ines.png'
			},
			{
				sexo: 'masculino',
				name: 'Paulo Raimundo',
				wikipedia: 'https://pt.wikipedia.org/wiki/Paulo_Raimundo',
				summary:
					'<u>Concluirá o 12º ano em regime de trabalhador-estudante a estudar à noite</u>, na Escola Secundária D. Manuel Martins, também em Setúbal',
				sordoutor: false,
				img: '/images/camarada2.png'
			},
			{
				sexo: 'masculino',
				name: 'Rui Rocha',
				wikipedia: 'https://en.wikipedia.org/wiki/Rui_Rocha',
				summary:
					'Residente em Braga desde 1978, com interrupção apenas para a licenciatura, é casado, com 2 filhos, e <u>licenciado em Direito pela Universidade Católica Portuguesa.</u>',
				sordoutor: false,
				img: '/images/rocha.png'
			},
			{
				sexo: 'masculino',
				name: 'Luís Montenegro',
				wikipedia: 'https://pt.wikipedia.org/wiki/Lu%C3%ADs_Montenegro',
				summary:
					'Luís Montenegro viria igualmente a prosseguir estudos em Direito, <u>licenciando-se na Universidade Católica Portuguesa (Centro Regional do Porto)</u>, em 1996. Anos mais tarde, voltaria a mesma universidade para realizar um curso pós-graduado em Direito da Proteção de Dados Pessoais.',
				sordoutor: false,
				img: '/images/montenegro.png'
			},
			{
				sexo: 'masculino',
				name: 'André Ventura',
				wikipedia:
					'https://pt.wikipedia.org/wiki/Andr%C3%A9_Ventura#Educa%C3%A7%C3%A3o_e_Juventude',
				summary:
					'Licenciou-se em Direito pela Faculdade de Direito da Universidade Nova de Lisboa (...) Em 2013, <u>defendeu a tese de doutoramento em Direito Público pela Faculdade de Direito da Universidade de Cork</u>, na Irlanda (...) Nesta, criticou o "populismo penal" e "estigmatização de minorias", revelando preocupação com a "expansão dos poderes policiais".',
				sordoutor: true,
				img: '/images/ventura.png'
			}
		],
		2025: [
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
				name: 'Mariana Mortágua',
				wikipedia: 'https://pt.wikipedia.org/wiki/Mariana_Mort%C3%A1gua',
				summary:
					'É licenciada e mestre em Economia, pelo ISCTE - Instituto Universitário de Lisboa, tendo terminado o <u>doutoramento em Economia na School of Oriental and African Studies (SOAS) da Universidade de Londres.</u>',
				sordoutor: true,
				img: '/images/mariana.png'
			},
			{
				sexo: 'masculino',
				name: 'Pedro Nuno Santos',
				wikipedia: 'https://pt.wikipedia.org/wiki/Pedro_Nuno_Santos',
				summary:
					'do Instituto Superior de Economia e Gestão da Universidade Técnica de Lisboa e Membro da Direção da Associação de Estudantes do mesmo,<u>onde se licenciou em Economia.</u>',
				sordoutor: false,
				img: '/images/pedro.png'
			},
			{
				sexo: 'feminino',
				name: 'Inês Sousa Real',
				wikipedia: 'https://pt.wikipedia.org/wiki/In%C3%AAs_Sousa_Real#Biografia',
				summary:
					'Licenciada em Direito pela Universidade Autónoma de Lisboa, reúne <u>pós-graduações em Ciências Jurídico-políticas e Contencioso Administrativo</u>. Mestre em Direito Animal e Sociedade, pela Universidade Autónoma de Barcelona (...) Em 2018 integrou o corpo docente do Mestrado em Direito Animal e Sociedade da Universidade Autónoma de Barcelona.',
				sordoutor: false,
				img: '/images/ines.png'
			},
			{
				sexo: 'masculino',
				name: 'Paulo Raimundo',
				wikipedia: 'https://pt.wikipedia.org/wiki/Paulo_Raimundo',
				summary:
					'<u>Concluirá o 12º ano em regime de trabalhador-estudante a estudar à noite</u>, na Escola Secundária D. Manuel Martins, também em Setúbal',
				sordoutor: false,
				img: '/images/camarada2.png'
			},
			{
				sexo: 'masculino',
				name: 'Rui Rocha',
				wikipedia: 'https://en.wikipedia.org/wiki/Rui_Rocha',
				summary:
					'Residente em Braga desde 1978, com interrupção apenas para a licenciatura, é casado, com 2 filhos, e <u>licenciado em Direito pela Universidade Católica Portuguesa.</u>',
				sordoutor: false,
				img: '/images/rocha.png'
			},
			{
				sexo: 'masculino',
				name: 'Luís Montenegro',
				wikipedia: 'https://pt.wikipedia.org/wiki/Lu%C3%ADs_Montenegro',
				summary:
					'Luís Montenegro viria igualmente a prosseguir estudos em Direito, <u>licenciando-se na Universidade Católica Portuguesa (Centro Regional do Porto)</u>, em 1996. Anos mais tarde, voltaria a mesma universidade para realizar um curso pós-graduado em Direito da Proteção de Dados Pessoais.',
				sordoutor: false,
				img: '/images/montenegro.png'
			},
			{
				sexo: 'masculino',
				name: 'André Ventura',
				wikipedia:
					'https://pt.wikipedia.org/wiki/Andr%C3%A9_Ventura#Educa%C3%A7%C3%A3o_e_Juventude',
				summary:
					'Licenciou-se em Direito pela Faculdade de Direito da Universidade Nova de Lisboa (...) Em 2013, <u>defendeu a tese de doutoramento em Direito Público pela Faculdade de Direito da Universidade de Cork</u>, na Irlanda (...) Nesta, criticou o "populismo penal" e "estigmatização de minorias", revelando preocupação com a "expansão dos poderes policiais".',
				sordoutor: true,
				img: '/images/ventura.png'
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
		year,
		data: shuffleArray([...data[year]])
	};
};
