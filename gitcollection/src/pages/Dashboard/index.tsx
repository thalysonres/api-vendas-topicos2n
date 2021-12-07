import React from 'react'
import { Formulario, Repo, Title } from './styles'
import logo from "../../assets/logo.svg"
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {

	//vamos criar um tipo de dados
	interface IGithubRepository {
		full_name: string;
		description: string;
		owner: {
			login: string;
			avatar_url: string;
		}
	}
	//criando um estado de variável e inicializo com vazio
	const [novoRepositorio, setNovoRepositorio] = React.useState('');

	//estado da variável repositório que inicia como vazio do tipo githubRepository
	//repositorio é um vetor
	const [repositorio, setRepositorio] = React.useState<IGithubRepository[]>([]);

	//altera o estado da variável novoRepositorio com o valor na caixa de texto
	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
		//alterar o valor de novoRepositorio com o valor digitado pelo usuário
		setNovoRepositorio(event.target.value)
	}
	//chamar a API do github -> assíncrona
	async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void> {

		//não atualiza a página
		event.preventDefault();

		//vamos chamar a API -> dependência axios
		//novoRepositorio é a informação do Usuário
		//tratar o erro
		try {
			const resposta = await api.get<IGithubRepository>(`repos/${novoRepositorio}`);
			const aux = resposta.data //dados vindo do servidor
			//adiciona aux no vetor repositório
			setRepositorio([...repositorio, aux]) //atualiza o repositorio com os dados do servidor
		}
		catch {
			console.log(`Repositório não encontrado`)
		}
	}

	return (
		<>
			<img src={logo} alt="Git Collection"/>
			<Title> Catálogo de repositórios do Github </Title>
			<Formulario onSubmit={handleAddRepo}>
				<input placeholder="username/nome_repositorio" onChange={handleInputChange}/>
				<button type="submit">Buscar</button>
			</Formulario>

			<Repo>
				{ //percorre o vetor
					repositorio.map((item, indices) => (
						<Link 
							to={`/repositories/${item.full_name}`}>
							<img src={item.owner.avatar_url}
								alt={item.owner.login} />
							<div>
								<strong> {item.full_name} </strong>
								<p> {item.description} </p>
							</div>
						</Link>
					))
				}
			</Repo>
		</>
	)
}
