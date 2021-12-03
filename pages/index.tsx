import React from 'react';
import { Button, Htag } from '../styles/components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearence='primary' arrow='right'>Кнопка</Button>
			<Button appearence='ghost'>Кнопка</Button>
		</>
	);
}
