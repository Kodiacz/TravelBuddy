import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default abstract class ApiService {
	private axiosInstance: AxiosInstance;
	private ngrokUrl: string =
		'https://5140-2a01-5a8-306-233b-6d4d-49d-4a2e-9854.ngrok-free.app';

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: `${this.ngrokUrl}/api/`,
		});

		this.axiosInstance.defaults.headers.common!['Authorization'] =
			'Bearer YourAccessToken';
		this.axiosInstance.defaults.headers.common!['ngrok-skip-browser-warning'] =
			'7024';
		this.axiosInstance.defaults.headers.common!['Accept'] = 'application/json';
		this.axiosInstance.defaults.headers.common!['Content-Type'] =
			'application/json';

		this.axiosInstance.interceptors.response.use(
			(response: AxiosResponse) => response,
			(error) => {
				console.error('API Error:', error);
				return Promise.reject(error);
			},
		);
	}

	protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.axiosInstance.get<T>(url, config);
		return response.data;
	}

	protected async post<T>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<AxiosResponse<T>> {
		try {
			return await this.axiosInstance.post<T>(url, data, config);
		} catch (error: any) {
			return error.response as AxiosResponse<T>;
		}
	}

	protected async put<T>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const response = await this.axiosInstance.put<T>(url, data, config);
		return response.data;
	}

	protected async delete<T>(
		url: string,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const response = await this.axiosInstance.delete<T>(url, config);
		return response.data;
	}
}
