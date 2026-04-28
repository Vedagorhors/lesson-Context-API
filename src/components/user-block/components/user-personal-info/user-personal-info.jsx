import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const UserPersonalInfo = () => {
	// userData и dispatch - это то, что мы храним в контексте в файле App.jsx: <AppContext value={{ userData, dispatch }}>, поэтому здесь тоже должно совпадать, пишем { userData, dispatch }
	const { userData, dispatch } = useContext(AppContext);
	// так как мы из контекста достаем не сами данные, а сначала переменную userData, а уже потом из неё мы можем достать наши данные
	const { name, age, email, phone } = userData;

	const onUserUpdate = () => {
		const newUserData = { name, age: 30, email, phone };
		// setUserData(newUserData);
		// dispatch() переводится как «отправить действие», а action — и есть какое-то действие. Действие (action) обычно является объектом с обязательным полем type, где указывается его тип. По сути это название действия. А payload переводится как нагрузка. Такое имя переменной часто используют, когда отправляют куда-то данные, как бы в нагрузку (например, на сервер).
		// dispatch() — функция, позволяющая отправить действие (action) и изменить состояние приложения.
		dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	// создаем обработчик
	const onUserAgeDecrease = () => {
		// указываем тип действия SET_USER_AGE и нагрузочные данные: 15 (это 15 лет)
		dispatch({ type: 'SET_USER_AGE', payload: 15 });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Обновить пользователя</button>
			<button onClick={onUserAgeDecrease}>Уменьшить возраст пользователя</button>
		</div>
	);
};
