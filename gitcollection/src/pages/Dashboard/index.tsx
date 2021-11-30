import React from 'react'
import { Formulario, Title } from './styles'
import logo from "../../assets/logo.svg"

export const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logo} alt="Git Collection"/>
			<Title> Catálogo de repositórios do Github </Title>
			<Formulario>
				<input placeholder="username/nome_repositorio"/>
				<button type="submit">Buscar</button>
			</Formulario>
		</>
	)
}
