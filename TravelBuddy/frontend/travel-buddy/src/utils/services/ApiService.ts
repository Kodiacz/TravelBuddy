import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export default abstract class ApiService {
	private axiosInstance: AxiosInstance;
	private url: string = 'http://192.168.1.4:5284/api/';

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: `${this.url}`,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: 'Bearer',
			},
		});

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

	protected async patch<T>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const response = await this.axiosInstance.patch<T>(url, data, config);
		return response.data;
	}
}
