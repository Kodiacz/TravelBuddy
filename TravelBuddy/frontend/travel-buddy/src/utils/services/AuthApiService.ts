import { ILoginData, IUser } from '../../types/applicationTypes';
import ApiService from './ApiService';

export default class AuthApiService extends ApiService {
	constructor() {
		super();
	}

	async login(loginData: ILoginData) {
		console.log('inside login');
		const data = await this.post<IUser>('Authentication/Login', loginData);
		console.log('login => data => ', data);
		return { data: data.data, status: data.status };
	}
}
