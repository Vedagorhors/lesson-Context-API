import { useContext } from 'react';
import { AppContext } from '../../../../context';

export const CurrentUser = () => {
	const { userData } = useContext(AppContext);
	const { name } = userData;

	return (
		<div>
			<div>Текущий пользователь: {name}</div>
		</div>
	);
};
