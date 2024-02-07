import { ILoginData, IUser } from '../../types/applicationDbTypes';
import ApiService from './ApiService';

export default class AuthApiService extends ApiService {
	constructor() {
		super();
	}

	async login(loginData: ILoginData) {
		const data = await this.post<IUser>('Authentication/Login', loginData);
		return { data: data.data, status: data.status };
	}
}
