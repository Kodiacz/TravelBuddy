import { useSelector } from 'react-redux';
import { AppReducers } from '../redux/store';

const usePersistedUser = () => {
	const user = useSelector((state: AppReducers) => state.userReducer.data);
	return user;
};

export default usePersistedUser;
