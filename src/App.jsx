import { Header, UserBlock } from './components';
import styles from './App.module.css';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Иван',
	age: 48,
	email: 'ivan@mail.ru',
	phone: '+7-777-777-77-77',
});

export const App = () => {
	const { name, age, email, phone } = getUserFromServer();

	return (
		<div className={styles.app}>
			<Header name={name} />
			<hr />
			<UserBlock name={name} age={age} email={email} phone={phone} />
		</div>
	);
};
