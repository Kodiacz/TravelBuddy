import { ILoginData, IRegisterData, IUser } from '../../types/applicationTypes';
import customLog from '../logUtils';
import ApiService from './ApiService';

export default class AuthApiService extends ApiService {
	constructor() {
		super();
	}

	async login(loginData: ILoginData) {
		const response = await this.post<IUser>('Authentication/Login', loginData);
		return { data: response.data, status: response.status };
	}

	async register(registerData: IRegisterData) {
		const response = await this.post<IUser>(
			'Authentication/Register',
			registerData,
		);
		customLog('AuthApiService', response.data);
		return { data: response.data, status: response.status };
	}
}
